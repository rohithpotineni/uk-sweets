# API Specification

## 1. Overview

This document defines the REST API contract for the UK Sweets e-commerce application before implementation.

- Base URL: `/api/v1`
- Format: JSON
- Authentication: Bearer JWT for customers and admin users
- Timestamps: ISO 8601
- Currency: GBP values should be represented in minor units (pence) for consistency
- IDs: UUIDs unless otherwise stated

---

## 2. Common Conventions

### Success response shape
```json
{
  "data": {},
  "meta": {
    "request_id": "uuid",
    "timestamp": "2026-07-21T12:00:00Z"
  }
}
```

### Pagination metadata
```json
{
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 120,
    "total_pages": 6,
    "has_next": true,
    "has_previous": false
  }
}
```

### Error response shape
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "One or more fields are invalid",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  }
}
```

### Standard status codes
- `200 OK` – successful read or update
- `201 Created` – successfully created resource
- `204 No Content` – successful deletion or no body response
- `400 Bad Request` – malformed request or invalid input
- `401 Unauthorized` – missing or invalid token
- `403 Forbidden` – authenticated but not allowed
- `404 Not Found` – resource not found
- `409 Conflict` – duplicate or conflicting state
- `422 Unprocessable Entity` – validation errors
- `429 Too Many Requests` – rate limiting
- `500 Internal Server Error` – unexpected server-side failure

---

## 3. Authentication API

### 3.1 Register customer
- Method: `POST`
- Path: `/auth/register`
- Authentication: none

Request body:
```json
{
  "first_name": "Alice",
  "last_name": "Brown",
  "email": "alice@example.com",
  "password": "StrongPass123!"
}
```

Success response `201`:
```json
{
  "data": {
    "customer": {
      "id": "uuid",
      "first_name": "Alice",
      "last_name": "Brown",
      "email": "alice@example.com"
    },
    "access_token": "jwt",
    "refresh_token": "jwt"
  }
}
```

Validation:
- `first_name` and `last_name` required
- `email` must be valid and unique
- `password` minimum 8 characters

---

### 3.2 Login
- Method: `POST`
- Path: `/auth/login`
- Authentication: none
- Rate limit: `5 requests/minute/IP`

Request body:
```json
{
  "email": "alice@example.com",
  "password": "StrongPass123!"
}
```

Success response `200`:
```json
{
  "data": {
    "access_token": "jwt",
    "refresh_token": "jwt",
    "token_type": "bearer"
  }
}
```

Validation:
- `email` and `password` required

---

### 3.3 Refresh token
- Method: `POST`
- Path: `/auth/refresh`
- Authentication: none

Request body:
```json
{
  "refresh_token": "jwt"
}
```

Success response `200`:
```json
{
  "data": {
    "access_token": "jwt"
  }
}
```

---

### 3.4 Logout
- Method: `POST`
- Path: `/auth/logout`
- Authentication: Bearer access token

Request body:
```json
{}
```

Success response `204`

---

### 3.5 Current user profile
- Method: `GET`
- Path: `/auth/me`
- Authentication: Bearer access token

Success response `200`:
```json
{
  "data": {
    "id": "uuid",
    "first_name": "Alice",
    "last_name": "Brown",
    "email": "alice@example.com"
  }
}
```

---

### 3.6 Password reset request
- Method: `POST`
- Path: `/auth/password/forgot`
- Authentication: none
- Rate limit: `3 requests/hour/email`

Request body:
```json
{
  "email": "alice@example.com"
}
```

Success response `200`

---

### 3.7 Reset password
- Method: `POST`
- Path: `/auth/password/reset`
- Authentication: none

Request body:
```json
{
  "token": "reset_token",
  "new_password": "NewStrongPass123!"
}
```

Success response `200`

---

## 4. Products API

### 4.1 List products
- Method: `GET`
- Path: `/products`
- Authentication: none

Query parameters:
- `category` (optional)
- `search` (optional)
- `page` (default `1`)
- `limit` (default `20`)
- `sort` (`price_asc`, `price_desc`, `newest`)

Success response `200`:
```json
{
  "data": {
    "items": [
      {
        "id": "uuid",
        "name": "Chocolate Fudge Bar",
        "slug": "chocolate-fudge-bar",
        "price": 250,
        "currency": "GBP",
        "availability": "in_stock",
        "is_active": true,
        "image_url": "https://..."
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 120
    }
  }
}
```

Validation:
- `page` and `limit` must be positive integers

---

### 4.2 Get product by ID
- Method: `GET`
- Path: `/products/{product_id}`
- Authentication: none

Success response `200`

---

### 4.3 List categories
- Method: `GET`
- Path: `/categories`
- Authentication: none

Success response `200`

---

### 4.4 Admin create product
- Method: `POST`
- Path: `/admin/products`
- Authentication: Bearer admin token

Request body:
```json
{
  "name": "Gummy Bears",
  "slug": "gummy-bears",
  "description": "Sweet gummy candy",
  "price": 320,
  "category_id": "uuid",
  "stock_quantity": 100,
  "is_active": true,
  "is_featured": false
}
```

Success response `201`

Validation:
- `name`, `slug`, `price`, `category_id` required
- `slug` unique
- `price` non-negative

---

### 4.5 Admin update product
- Method: `PATCH`
- Path: `/admin/products/{product_id}`
- Authentication: Bearer admin token

Request body:
```json
{
  "name": "Gummy Bears",
  "price": 350,
  "is_active": true
}
```

Success response `200`

Validation:
- fields are optional
- `updated_at` or `version` can be used for optimistic concurrency control

---

### 4.6 Admin delete product
- Method: `DELETE`
- Path: `/admin/products/{product_id}`
- Authentication: Bearer admin token

Success response `204`

---

## 5. Cart API

### 5.1 Get cart
- Method: `GET`
- Path: `/cart`
- Authentication: Bearer customer token

Success response `200`:
```json
{
  "data": {
    "items": [
      {
        "id": "uuid",
        "product_id": "uuid",
        "product_name": "Chocolate Fudge Bar",
        "quantity": 2,
        "unit_price": 250,
        "line_total": 500
      }
    ],
    "subtotal": 500,
    "shipping_total": 0,
    "grand_total": 500
  }
}
```

---

### 5.2 Add item to cart
- Method: `POST`
- Path: `/cart/items`
- Authentication: Bearer customer token

Request body:
```json
{
  "product_id": "uuid",
  "quantity": 2
}
```

Success response `201`

Validation:
- `product_id` required
- `quantity` must be at least `1`
- product must be active and in stock

---

### 5.3 Update cart item quantity
- Method: `PATCH`
- Path: `/cart/items/{item_id}`
- Authentication: Bearer customer token

Request body:
```json
{
  "quantity": 3
}
```

Success response `200`

---

### 5.4 Remove cart item
- Method: `DELETE`
- Path: `/cart/items/{item_id}`
- Authentication: Bearer customer token

Success response `204`

---

### 5.5 Clear cart
- Method: `DELETE`
- Path: `/cart`
- Authentication: Bearer customer token

Success response `204`

---

## 6. Checkout API

### 6.1 Estimate checkout totals
- Method: `POST`
- Path: `/checkout/estimate`
- Authentication: Bearer customer token

Request body:
```json
{
  "shipping_address_id": "uuid",
  "shipping_zone_code": "ENG"
}
```

Success response `200`:
```json
{
  "data": {
    "subtotal": 500,
    "shipping_total": 350,
    "tax_total": 70,
    "discount_total": 0,
    "grand_total": 920
  }
}
```

Validation:
- cart must not be empty
- shipping address must be valid for the chosen zone

---

### 6.2 Create checkout / place order
- Method: `POST`
- Path: `/checkout`
- Authentication: Bearer customer token

Headers:
- `Idempotency-Key: 8f8d7d7c-...`

Request body:
```json
{
  "shipping_address_id": "uuid",
  "shipping_zone_code": "ENG",
  "payment_method": "card"
}
```

Success response `201`:
```json
{
  "data": {
    "order_id": "uuid",
    "status": "pending",
    "grand_total": 920
  }
}
```

Validation:
- cart must not be empty
- shipping address required
- payment method supported

Error handling:
- `409 Conflict` if inventory changes after cart creation
- `422` if checkout data invalid

---

## 7. Orders API

### 7.1 List customer orders
- Method: `GET`
- Path: `/orders`
- Authentication: Bearer customer token

Success response `200`

---

### 7.2 Get order by ID
- Method: `GET`
- Path: `/orders/{order_id}`
- Authentication: Bearer customer token or admin token

Success response `200`:
```json
{
  "data": {
    "id": "uuid",
    "status": "processing",
    "grand_total": 920,
    "items": [],
    "shipping_address_snapshot": {},
    "payments": []
  }
}
```

---

### 7.3 Cancel order
- Method: `POST`
- Path: `/orders/{order_id}/cancel`
- Authentication: Bearer customer token or admin token

Request body:
```json
{
  "reason": "Customer changed mind"
}
```

Success response `200`

Validation:
- only cancelable statuses allowed

---

## 8. Admin API

### 8.1 List all orders for admin
- Method: `GET`
- Path: `/admin/orders`
- Authentication: Bearer admin token

Query parameters:
- `status`
- `customer_id`
- `page`
- `limit`

Success response `200`

---

### 8.2 Update order status
- Method: `PATCH`
- Path: `/admin/orders/{order_id}/status`
- Authentication: Bearer admin token

Request body:
```json
{
  "status": "shipped",
  "note": "Dispatched to courier"
}
```

Success response `200`

Validation:
- `status` must be one of allowed values
- note optional but limited to 500 chars

---

### 8.3 List customers
- Method: `GET`
- Path: `/admin/customers`
- Authentication: Bearer admin token

Success response `200`

---

### 8.4 View audit logs
- Method: `GET`
- Path: `/admin/audit-logs`
- Authentication: Bearer admin token

Query parameters:
- `entity_type`
- `entity_id`
- `admin_user_id`
- `page`
- `limit`

Success response `200`

---

## 9. Shipping API

### 9.1 List shipping zones
- Method: `GET`
- Path: `/shipping/zones`
- Authentication: none

Success response `200`

---

### 9.2 Estimate shipping rate
- Method: `POST`
- Path: `/shipping/rates/estimate`
- Authentication: Bearer customer token

Request body:
```json
{
  "postcode": "SW1A 1AA",
  "subtotal": 500,
  "country_code": "GB"
}
```

Success response `200`

---

### 9.3 Manage saved addresses
- Method: `GET` / `POST` / `PUT` / `DELETE`
- Path: `/shipping/addresses`
- Authentication: Bearer customer token

Request body for create/update:
```json
{
  "address_line_1": "10 Example Street",
  "address_line_2": "",
  "city": "London",
  "postcode": "SW1A 1AA",
  "country_code": "GB",
  "is_default": true
}
```

Success response `200` or `201`

Validation:
- required fields: `address_line_1`, `city`, `postcode`, `country_code`

---

## 10. Tracking API

### 10.1 Get tracking details
- Method: `GET`
- Path: `/tracking/{tracking_number}`
- Authentication: Bearer customer token or admin token

Success response `200`:
```json
{
  "data": {
    "tracking_number": "ABC123",
    "status": "in_transit",
    "carrier_name": "Royal Mail",
    "events": [
      {
        "status": "picked_up",
        "timestamp": "2026-07-21T10:00:00Z"
      }
    ]
  }
}
```

---

## 11. Payments API

### 11.1 Create payment intent
- Method: `POST`
- Path: `/payments/intents`
- Authentication: Bearer customer token

Headers:
- `Idempotency-Key: 8f8d7d7c-...`

Request body:
```json
{
  "order_id": "uuid",
  "provider": "stripe"
}
```

Success response `201`:
```json
{
  "data": {
    "payment_id": "uuid",
    "provider": "stripe",
    "client_secret": "pi_secret",
    "status": "pending"
  }
}
```

Validation:
- `order_id` required
- order must be in a payable state

---

### 11.2 Get payment status
- Method: `GET`
- Path: `/payments/{payment_id}`
- Authentication: Bearer customer token or admin token

Success response `200`

---

### 11.3 Webhook callback
- Method: `POST`
- Path: `/payments/webhooks/stripe`
- Authentication: provider signature validation, not JWT

Success response `200`

Error handling:
- invalid signature returns `401`
- duplicate event returns `200` with idempotent handling

---

## 12. Email API

### 12.1 Send transactional email
- Method: `POST`
- Path: `/emails/send`
- Authentication: service-to-service token or admin token

Request body:
```json
{
  "template": "order_confirmation",
  "recipient_email": "alice@example.com",
  "data": {
    "customer_name": "Alice",
    "order_number": "ORD-1001"
  }
}
```

Success response `202`

Validation:
- `template` and `recipient_email` required
- `data` must be an object

Error handling:
- invalid template returns `422`
- email provider failure returns `502 Bad Gateway`

---

## 13. Health Check

### 13.1 Health check
- Method: `GET`
- Path: `/health`
- Authentication: none

Success response `200`:
```json
{
  "status": "healthy",
  "database": "connected",
  "version": "1.0.0"
}
```

---

## 14. Error Handling Policy

All endpoints should return consistent, actionable error messages.

### Common validation errors
- missing required field
- invalid format
- value out of range
- duplicate unique value

### Security errors
- `401` for missing/invalid token
- `403` for insufficient role or scope

### Business-rule errors
- inventory unavailable
- invalid order state transition
- payment already attempted

### Logging and traceability
- every request should include a request ID
- server-side failures should be logged with correlation IDs

---

## 15. Authentication Model

### Customer access
- JWT access token with short lifetime
- refresh token with longer lifetime

### Admin access
- separate admin role claims
- admin endpoints require role `admin` or `super_admin`

### Authorization rules
- Customers can read their own orders and cart
- Admins can manage products, orders, payments, and audit logs
- Service-to-service email and payment webhooks do not use customer JWTs

---

## 16. Implementation Notes

The API should be implemented with:
- request validation middleware
- role-based access control
- structured logging
- idempotency for payment and checkout operations
- rate limiting for authentication and public endpoints
- OpenAPI tags for Swagger organization

Recommended FastAPI tags:
- Authentication
- Products
- Categories
- Cart
- Checkout
- Orders
- Payments
- Shipping
- Tracking
- Admin
- Emails

No code will be written until approval is given.
