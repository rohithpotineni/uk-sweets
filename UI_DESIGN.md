# UI Design Specification

## 1. Overview

This document defines the user interface structure and page-level experience for the UK Sweets e-commerce application before implementation.

The UI should feel clean, modern, and trustworthy, with a strong focus on product discovery, cart flow, checkout clarity, and admin usability.

- Framework: Next.js + React + TypeScript
- Styling: Tailwind CSS
- Primary goal: make browsing sweets, adding products to cart, and completing checkout feel simple and reassuring
- Tone: friendly, premium, and easy to use

---

## 2. Global UI Principles

### Layout
- A persistent header at the top with navigation links
- A clear shopping cart entry point visible on all major pages
- A consistent footer with useful links and contact information

### Navigation
- Customers should be able to go from home to products to product details to cart to checkout with minimal friction
- Admin users should have a separate, clearly structured navigation path for management tasks

### Design language
- Bright, appetizing visuals suitable for sweets and confectionery
- Large product imagery and clean typography
- Clear buttons, strong hierarchy, and obvious CTAs

---

## 3. Shared Layout

### Header
Contains:
- Brand/logo
- Home link
- Products link
- About/Contact links
- Search bar
- Cart icon with item count
- Login/Register or account menu for signed-in users

### Footer
Contains:
- Brand information
- Useful links
- Contact information
- Social links
- Delivery/returns information

### Mobile experience
- Collapsible mobile menu
- Sticky cart button where appropriate
- Touch-friendly form fields and buttons

---

## 4. Home Page

### Purpose
The home page should introduce the brand and guide the user toward browsing products quickly.

### Sections
1. Hero section
   - Large headline such as “Sweet treats for every occasion”
   - Subtext describing delivery across the UK
   - Primary CTA: “Shop now”
   - Secondary CTA: “Browse best sellers”
   - Promotional image or product collage

2. Featured products
   - A grid of featured sweets with:
     - product image
     - name
     - price
     - short description
     - “Add to cart” button

3. Categories
   - Cards for categories such as chocolates, gummies, gift boxes, seasonal treats

4. Trust / benefit section
   - Fast delivery
   - Secure checkout
   - Fresh products
   - Customer support

5. Newsletter signup
   - Email capture for product updates and offers

### Navigation flow
- User lands here, then clicks “Shop now” or a category card to move into products

---

## 5. Products Page

### Purpose
The products page should help users browse the catalog efficiently.

### Layout
- Left sidebar or top filters for:
  - category
  - price range
  - sort by price/newest/featured
- Main content area with product cards

### Product card content
Each card should include:
- product image
- product name
- short description
- price
- availability badge
- “View details” button
- “Add to cart” button

### Behavior
- Search should update results instantly or after a short debounce
- Pagination or infinite scroll should be supported
- Empty state should be shown if no products match

### Navigation flow
- User selects a product card to go to the product detail page

---

## 6. Product Details Page

### Purpose
This page should give enough detail for the user to feel confident about purchasing.

### Layout
- Large product image gallery
- Product title and price
- Short description and key features
- Availability banner
- Quantity selector
- “Add to cart” button
- Optional “Buy now” button

### Additional sections
- Ingredients or product details
- Delivery information
- Reviews or testimonials (future enhancement)
- Related products

### Behavior
- If the product is out of stock, the add-to-cart button should be disabled and a clear message shown
- The page should include breadcrumb navigation such as Home > Products > Category > Product

### Navigation flow
- From here, user can add the item to cart and continue to checkout

---

## 7. Cart Page

### Purpose
The cart page should make it easy to review items before checkout.

### Layout
- Left side: list of cart items
- Right side: summary panel with totals

### Cart item content
Each item should include:
- product image
- product name
- quantity selector
- unit price
- line total
- remove button

### Summary panel
Should include:
- subtotal
- delivery estimate
- total
- proceed to checkout button
- continue shopping link

### Behavior
- If the cart is empty, show an empty state with a button to return to products
- Quantity updates should be immediate and reflected in totals

### Navigation flow
- User proceeds to checkout from this page

---

## 8. Checkout Page

### Purpose
The checkout page should feel secure, clear, and low-friction.

### Layout
- Progress indicator: Cart > Checkout > Confirmation
- Left side: shipping details and payment section
- Right side: order summary

### Sections
1. Delivery address
   - Saved addresses or a form to add new address
   - Option to choose default address

2. Shipping options
   - Standard delivery / express delivery if supported

3. Payment section
   - Card payment or other supported payment method
   - Clear labels and secure UI messaging

4. Order summary
   - Subtotal
   - Shipping cost
   - Total
   - Promo code area if later added

### Behavior
- Validation should be shown inline for form fields
- The page should clearly indicate when the order is being processed
- Upon success, the user should be redirected to an order confirmation or order history view

### Navigation flow
- After successful placement, the user is taken to an order confirmation experience and can view their order in order history

---

## 9. Order Confirmation Page

### Purpose
Provide a reassuring post-purchase confirmation experience after checkout.

### Layout
- Success/thank-you banner
- Order number
- Payment status
- Estimated delivery date
- Shipping address summary
- Order summary with line items and totals
- Buttons: “Continue Shopping” and “View Orders”

### Behavior
- Show the order details clearly and avoid unnecessary friction
- Make it easy for the user to continue browsing or review past orders

### Navigation flow
- Reached immediately after successful checkout
- From here, the user can continue shopping or open their order history

---

## 10. Login Page

### Purpose
Allow returning customers to sign in quickly.

### Layout
- Simple centered form
- Email field
- Password field
- “Sign in” button
- Link to register
- Link to forgot password

### Behavior
- Show inline validation errors
- Show a helpful loading state while authenticating
- On success, redirect back to the previous page or home

### Navigation flow
- New users can move to register page
- Returning users continue to their account experience

---

## 11. My Account Page

### Purpose
Serve as the main account area for returning customers after login.

### Layout
- Sidebar or top navigation with sections:
  - Profile
  - Saved Addresses
  - Order History
  - Change Password
  - Logout

### Content
- Profile section with editable personal information
- Saved Addresses section listing stored delivery addresses
- Order History section linking to recent orders
- Change Password section with password form

### Navigation flow
- This should be the landing page after login for authenticated users
- From here, users can access account-related tasks without returning to the main site navigation

---

## 12. Register Page

### Purpose
Allow new customers to create an account.

### Layout
- Centered form with:
  - first name
  - last name
  - email
  - password
  - confirm password
  - register button

### Behavior
- Validate email format and password strength
- Show error messages clearly
- On success, redirect to login or directly to account dashboard

### Navigation flow
- User can also navigate to login if they already have an account

---

## 13. Order History Page

### Purpose
Let customers view their past orders and track status.

### Layout
- Page heading: “My Orders”
- List of past orders with:
  - order number
  - order date
  - total amount
  - status badge
  - “View details” button

### Behavior
- Orders should be grouped logically and easily searchable by date or status
- Each item should link to more detail if needed

### Navigation flow
- User can click an order to open order details or track shipment status

---

## 14. Track Order Page

### Purpose
Allow customers to follow the progress of a shipment.

### Layout
- Order number and current status banner
- Timeline of delivery events
- Courier name and tracking number if available
- Optional support contact info

### Behavior
- Show a clear progression such as pending, processing, shipped, delivered
- If tracking is unavailable, show a friendly informational message

### Navigation flow
- Accessed from order history or directly via a tracking link

---

## 15. Admin Dashboard

### Purpose
Provide a central area for store management.

### Layout
- Sidebar navigation for:
  - Dashboard
  - Orders
  - Products
  - Customers
  - Shipping
  - Audit logs
  - Settings

### Main content area
- Summary cards showing:
  - total orders
  - pending orders
  - total revenue
  - low stock items
- Recent activity list
- Recent orders table

### Admin interactions
- Update order status
- Create/edit/delete products
- Review audit logs
- Manage shipping and customer support tasks

### Admin product form
The product form should include:
- Product Name
- Description
- Price
- Category
- Images
- Stock
- Featured
- Active

### Navigation flow
- Admins move between operational views from the sidebar

---

## 16. Design System

### Color palette
- Primary color: deep berry or rich candy-inspired red/purple
- Secondary color: warm cream or soft neutral
- Accent color: bright candy pink or gold
- Success: green
- Error: red
- Warning: amber

### Typography
- Heading font: bold, friendly sans-serif
- Body font: clean readable sans-serif
- Suggested scale: H1, H2, H3, body, small caption

### Spacing and layout
- Use a consistent spacing scale such as 4, 8, 12, 16, 24, 32

### Radius and shadows
- Rounded cards and buttons
- Subtle shadows for depth

### Components
- Buttons: primary, secondary, ghost
- Inputs: text, email, password, select
- Cards: product card, summary card, info card
- Icons: simple outline icons for cart, account, shipping, and status

---

## 17. Loading, Empty, and Error States

### Loading states
- Product skeleton loaders on product list and detail pages
- Spinner or progress state for checkout and authentication actions

### Empty states
- Empty cart illustration with “Continue shopping” CTA
- No products found state on search/filter results
- No orders found state on account order history

### Error states
- Product not found page
- Server error page with retry action
- Network retry state for failed requests

---

## 18. Route Structure

Suggested routes:
- `/`
- `/products`
- `/products/[slug]`
- `/cart`
- `/checkout`
- `/login`
- `/register`
- `/account`
- `/account/orders`
- `/tracking/[trackingNumber]`
- `/admin`
- `/admin/products`
- `/admin/orders`
- `/admin/customers`
- `/admin/shipping`
- `/admin/audit-logs`

---

## 19. User Journey Summary

### Customer journey
1. Land on home page
2. Browse products or categories
3. View product details
4. Add product to cart
5. Review cart
6. Proceed to checkout
7. Complete payment
8. View order confirmation and order history

### Admin journey
1. Login as admin
2. Access dashboard
3. Review orders and stock
4. Update statuses and manage catalog
5. Review audit logs and operational events

---

## 20. Implementation Notes

The UI should be implemented with:
- clear route structure for customer and admin pages
- reusable components for cards, forms, buttons, and headers
- consistent loading, error, and empty states
- responsive behavior across mobile and desktop

No code will be written until approval is given.
