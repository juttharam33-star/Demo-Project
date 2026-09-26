import { ArrowUpRight, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer className="bg-[#26392e] text-[#f6f4ee]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-12 lg:py-16">
        <div><Link to="/" className="serif text-[27px]">form & field</Link><p className="mt-3 max-w-[220px] text-[11px] leading-5 text-[#c3c8be]">Objects for everyday. Useful by nature, made to stay.</p></div>
        <div><p className="mb-4 text-[9px] font-semibold uppercase tracking-[.18em] text-[#bbc5b8]">Explore</p><div className="grid gap-3 text-[11px] text-[#e0e3dc]"><Link to="/products">All objects</Link><Link to="/about">Our story</Link></div></div>
        <div><p className="mb-4 text-[9px] font-semibold uppercase tracking-[.18em] text-[#bbc5b8]">Your account</p><div className="grid gap-3 text-[11px] text-[#e0e3dc]"><Link to="/login">Sign in</Link><Link to="/register">Create account</Link></div></div>
        <div><p className="mb-4 text-[9px] font-semibold uppercase tracking-[.18em] text-[#bbc5b8]">Keep in touch</p><a href="https://instagram.com" className="inline-flex items-center gap-2 text-[11px] text-[#e0e3dc]"><Instagram size={15} /> Instagram <ArrowUpRight size={12} /></a><p className="mt-3 text-[10px] text-[#bdc4b8]">hello@formandfield.example</p></div>
      </div>
      <div className="border-t border-white/15"><div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-4 text-[9px] text-[#bec5bb] sm:flex-row sm:justify-between sm:px-8 lg:px-12"><span>© 2025 Form & Field. Made with care.</span><span>Thoughtfully sourced. Always.</span></div></div>
    </footer>
  )
}