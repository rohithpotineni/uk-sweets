import Link from 'next/link';

const featuredProducts = [
  { name: 'Classic Jelly Beans', description: 'Bright fruit flavours with a chewy finish.', badge: 'Best seller' },
  { name: 'Caramel Fudge Box', description: 'Rich handmade fudge in gift-ready boxes.', badge: 'New' },
  { name: 'Mini Doughnuts', description: 'Soft, sugared favourites for sharing.', badge: 'Limited' },
];

const categories = [
  'Pick & Mix',
  'Birthday Treats',
  'Luxury Chocolate',
  'Seasonal Favourites',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8e1,_#fff)] px-6 py-16 text-zinc-800 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <section className="overflow-hidden rounded-[2rem] border border-amber-200 bg-white/80 shadow-[0_20px_80px_rgba(120,53,15,0.12)] backdrop-blur">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">
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

            <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                This week&apos;s favourites
              </p>
              <ul className="mt-6 space-y-4">
                {featuredProducts.map((product) => (
                  <li key={product.name} className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-zinc-800">{product.name}</p>
                        <p className="mt-1 text-sm text-zinc-600">{product.description}</p>
                      </div>
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                        {product.badge}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
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
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold">24/7</p>
                <p className="mt-2 text-sm text-zinc-300">Fast packing and dispatch.</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">98%</p>
                <p className="mt-2 text-sm text-zinc-300">Repeat purchase rate.</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">4.9★</p>
                <p className="mt-2 text-sm text-zinc-300">Average review score.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
