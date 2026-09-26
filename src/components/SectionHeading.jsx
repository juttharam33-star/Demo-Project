import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SectionHeading({ eyebrow, title, link, to = '/products' }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#857764]">{eyebrow}</p>
        <h2 className="serif text-[32px] leading-tight sm:text-[42px]">{title}</h2>
      </div>
      {link && <Link to={to} className="group mb-1 flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[.12em]">{link}<ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link>}
    </div>
  )
}