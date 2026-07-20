import Link from 'next/link';

const featuredProducts = [
  {
    name: 'Classic Jelly Beans',
    description: 'Bright fruit flavours with a chewy finish.',
    price: '£4.50',
    badge: 'Best seller',
    accent: 'from-amber-200 via-orange-100 to-amber-50',
    emoji: '🍬',
  },
  {
    name: 'Caramel Fudge Box',
    description: 'Rich handmade fudge in gift-ready boxes.',
    price: '£8.95',
    badge: 'New',
    accent: 'from-pink-200 via-rose-100 to-amber-50',
    emoji: '🍫',
  },
  {
    name: 'Mini Doughnuts',
    description: 'Soft, sugared favourites for sharing.',
    price: '£6.20',
    badge: 'Limited',
    accent: 'from-emerald-200 via-green-100 to-amber-50',
    emoji: '🍩',
  },
];

const categories = ['Pick & Mix', 'Birthday Treats', 'Luxury Chocolate', 'Seasonal Favourites'];

const trustPoints = [
  { title: 'Fast delivery', description: 'Tracked parcels across the UK in 1–3 days.', icon: '🚚' },
  { title: 'Secure checkout', description: 'Protected payments with trusted billing partners.', icon: '🔒' },
  { title: 'Freshly packed', description: 'Carefully prepared sweets with quality checked daily.', icon: '🌿' },
  { title: 'Helpful support', description: 'Friendly team ready to answer questions quickly.', icon: '💬' },
];

function PlaceholderVisual({ label, accent }: { label: string; accent: string }) {
  return (
    <div className={`flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-gradient-to-br ${accent} p-4`}>
      <span className="text-4xl" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8e1,_#fff)] text-zinc-800">
      <header className="border-b border-amber-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-600 text-lg font-semibold text-white">
                UK
              </div>
              <div>
                <p className="text-base font-semibold">UK Sweets</p>
                <p className="text-sm text-zinc-500">Premium treats</p>
              </div>
            </Link>
            <Link
              href="/cart"
              className="rounded-full border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 lg:hidden"
            >
              Cart (2)
            </Link>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-600">
            <Link href="/products" className="transition hover:text-amber-700">
              Products
            </Link>
            <Link href="/about" className="transition hover:text-amber-700">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-amber-700">
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-500 sm:min-w-[240px]">
              <span aria-hidden="true">🔎</span>
              <input
                aria-label="Search products"
                className="w-full bg-transparent outline-none placeholder:text-zinc-400"
                placeholder="Search sweets"
              />
            </label>
            <div className="flex items-center gap-2">
              <Link
                href="/cart"
                className="hidden items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 lg:flex"
              >
                <span aria-hidden="true">🛒</span>
                Cart (2)
              </Link>
              <Link
                href="/login"
                className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Login / Account
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <section className="overflow-hidden rounded-[2rem] border border-amber-200 bg-white/80 shadow-[0_20px_80px_rgba(120,53,15,0.12)] backdrop-blur">
            <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:p-16">
              <div className="max-w-2xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
                  UK Sweets storefront
                </p>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Sweet treats for every occasion.
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  Discover nostalgic favourites, modern gift boxes, and delightful party picks delivered with care across the UK.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/products"
                    className="rounded-full bg-amber-600 px-5 py-3 font-medium text-white transition hover:bg-amber-700"
                  >
                    Browse best sellers
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-full border border-zinc-300 px-5 py-3 font-medium text-zinc-700 transition hover:bg-zinc-100"
                  >
                    Why choose us
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50 p-5 sm:p-8">
                <PlaceholderVisual label="🍓" accent="from-amber-200 via-orange-100 to-amber-50" />
                <div className="mt-5 rounded-2xl border border-white bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                    Seasonal pick
                  </p>
                  <p className="mt-2 font-semibold text-zinc-800">Cheery gift boxes for birthdays and celebrations</p>
                  <p className="mt-2 text-sm text-zinc-600">Swap this placeholder with a real promotional photo later.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] border border-zinc-200 bg-white/80 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Shop by mood</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {categories.map((category) => (
                  <div key={category} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm font-medium text-zinc-700">
                    {category}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-900 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Why customers love us</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {trustPoints.slice(0, 4).map((point) => (
                  <div key={point.title}>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl">
                      <span aria-hidden="true">{point.icon}</span>
                    </div>
                    <p className="text-lg font-semibold">{point.title}</p>
                    <p className="mt-2 text-sm text-zinc-300">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-zinc-200 bg-white/80 p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Featured sweets</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Popular picks for quick delivery</h2>
              </div>
              <Link href="/products" className="text-sm font-semibold text-amber-700 transition hover:text-amber-800">
                View all sweets →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((product) => (
                <article key={product.name} className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
                  <PlaceholderVisual label={product.emoji} accent={product.accent} />
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">{product.badge}</p>
                      <h3 className="mt-2 text-xl font-semibold text-zinc-800">{product.name}</h3>
                    </div>
                    <p className="text-sm font-semibold text-zinc-700">{product.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{product.description}</p>
                  <button className="mt-5 w-full rounded-full bg-amber-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-700">
                    Add to Cart
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-zinc-200 bg-white/80 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Trusted by families</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">A simple, reassuring sweets shopping experience</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div key={point.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg">
                      <span aria-hidden="true">{point.icon}</span>
                    </div>
                    <p className="mt-3 font-semibold text-zinc-800">{point.title}</p>
                    <p className="mt-2 text-sm text-zinc-600">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Join the newsletter</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Get exclusive offers and new arrivals</h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                Receive updates on limited edition sweets and seasonal gift boxes before they sell out.
              </p>
              <form className="mt-6 flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-full border border-zinc-300 bg-white px-4 py-3 outline-none ring-0"
                />
                <button className="rounded-full bg-zinc-900 px-4 py-3 font-semibold text-white transition hover:bg-zinc-700">
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-200 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
          <div className="max-w-md">
            <p className="text-lg font-semibold text-zinc-800">UK Sweets</p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Charming confectionery, thoughtful gift boxes, and dependable delivery designed for modern sweet lovers.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Shop</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li><Link href="/products" className="transition hover:text-amber-700">Products</Link></li>
                <li><Link href="/products" className="transition hover:text-amber-700">Best sellers</Link></li>
                <li><Link href="/products" className="transition hover:text-amber-700">Gift boxes</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Support</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li><Link href="/contact" className="transition hover:text-amber-700">Contact us</Link></li>
                <li><Link href="/about" className="transition hover:text-amber-700">About us</Link></li>
                <li><Link href="/tracking" className="transition hover:text-amber-700">Track order</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Info</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li>Delivery & returns</li>
                <li>Privacy policy</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
