import { useMemo, useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import ProductGrid from '../components/ProductGrid.jsx'
import { products } from '../data/products.js'

const categories = ['All objects', 'Ceramics', 'Textiles', 'Objects', 'Glassware']

export default function ProductsPage({ onAdd }) {
  const [category, setCategory] = useState('All objects')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('Featured')
  const visibleProducts = useMemo(() => {
    let result = products.filter((item) => (category === 'All objects' || item.category === category) && item.name.toLowerCase().includes(query.toLowerCase().trim()))
    if (sort === 'Price: low to high') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'Price: high to low') result = [...result].sort((a, b) => b.price - a.price)
    return result
  }, [category, query, sort])

  return (
    <main className="mx-auto min-h-[65vh] max-w-[1440px] px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12">
      <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[var(--line)] pb-8 sm:mb-12 sm:flex-row sm:items-end"><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#887963]">The collection</p><h1 className="serif text-[46px] leading-tight sm:text-[60px]">Objects to live with.</h1><p className="mt-3 max-w-[460px] text-[13px] leading-6 text-[#74776e]">Useful, lasting pieces that bring a little more intention to the everyday.</p></div><p className="text-[11px] text-[#777a70]">{visibleProducts.length} considered pieces</p></div>
      <div className="mb-8 flex flex-col gap-4 border-b border-[var(--line)] pb-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by category">{categories.map((item) => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={`shrink-0 px-3 py-2 text-[10px] transition-colors sm:text-[11px] ${category === item ? 'bg-[var(--forest)] text-white' : 'text-[#6f736a] hover:bg-[#e9e8df]'}`}>{item}</button>)}</div><div className="flex items-center gap-4"><label className="flex items-center gap-2 border-b border-[#c7c6bc] pb-1"><Search size={15} className="text-[#777a70]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pieces" aria-label="Search products" className="w-28 bg-transparent text-[11px] outline-none placeholder:text-[#94968d] sm:w-36" /></label><label className="relative flex items-center gap-1 text-[10px] text-[#686d64] sm:text-[11px]">Sort<select value={sort} onChange={(event) => setSort(event.target.value)} className="appearance-none bg-transparent pr-4 text-[10px] font-medium outline-none sm:text-[11px]"><option>Featured</option><option>Price: low to high</option><option>Price: high to low</option></select><ChevronDown size={13} className="pointer-events-none absolute right-0" /></label></div></div>
      {visibleProducts.length ? <ProductGrid items={visibleProducts} onAdd={onAdd} /> : <div className="py-20 text-center"><p className="serif text-3xl">Nothing found just yet.</p><button onClick={() => { setQuery(''); setCategory('All objects') }} className="mt-5 border-b border-current pb-1 text-[11px] uppercase tracking-[.12em]">Clear filters</button></div>}
    </main>
  )
}