import { Link } from 'react-router-dom'
import { photo } from '../data/products.js'

export default function ProductGrid({ items, onAdd }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-6">
      {items.map((product) => (
        <article key={product.id} className="group min-w-0">
          <Link to="/products" className="relative block aspect-[.82] overflow-hidden bg-[#e7e5dc]">
            <img src={photo(product.image)} alt={product.name} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
            {product.tag && <span className="absolute left-2 top-2 bg-[var(--paper)] px-2 py-1 text-[8px] uppercase tracking-[.1em] sm:left-3 sm:top-3 sm:text-[9px]">{product.tag}</span>}
          </Link>
          <div className="flex items-start justify-between gap-2 pt-3">
            <div className="min-w-0"><p className="truncate text-[11px] font-medium sm:text-[13px]">{product.name}</p><p className="mt-1 text-[10px] text-[#85877d] sm:text-[11px]">{product.category}</p></div>
            <span className="shrink-0 text-[11px] sm:text-[12px]">${product.price}</span>
          </div>
          <button onClick={onAdd} className="mt-3 flex w-full items-center justify-between border-b border-[#bdbdb2] pb-2 text-left text-[9px] font-semibold uppercase tracking-[.13em] transition-colors hover:border-[var(--forest)] hover:text-[var(--forest)] sm:text-[10px]">Add to bag <span className="text-[15px] font-normal leading-none">+</span></button>
        </article>
      ))}
    </div>
  )
}