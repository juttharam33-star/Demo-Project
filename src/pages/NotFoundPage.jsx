import { ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function NotFoundPage() {
  const { pathname } = useLocation()
  return <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center"><p className="text-[10px] uppercase tracking-[.2em] text-[#887963]">404 · Lost in the field</p><h1 className="serif mt-3 text-5xl">This page wandered off.</h1><p className="mt-4 text-[13px] text-[#777a70]">We couldn’t find {pathname}.</p><Link to="/" className="mt-7 inline-flex items-center gap-3 bg-[var(--forest)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.12em] text-white">Back home <ArrowRight size={15} /></Link></main>
}