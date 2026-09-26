import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [joined, setJoined] = useState(false)
  return (
    <section className="bg-[#dfe3d8] px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#6e786b]">A note now and then</p><h2 className="serif max-w-[520px] text-[34px] leading-tight sm:text-[42px]">Good things, occasionally.</h2><p className="mt-3 text-[12px] text-[#6b7167]">New work, maker stories, and the odd little delight.</p></div>
        <form className="flex w-full max-w-[430px] border-b border-[#92978b]" onSubmit={(event) => { event.preventDefault(); setJoined(true) }}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input required id="newsletter-email" type="email" placeholder="Your email address" className="h-12 min-w-0 flex-1 bg-transparent text-[12px] outline-none placeholder:text-[#777d73]" /><button className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.12em]">{joined ? 'You’re on the list' : 'Sign me up'} {joined ? <Check size={15} /> : <ArrowRight size={15} />}</button></form>
      </div>
    </section>
  )
}