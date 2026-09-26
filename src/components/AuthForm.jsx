import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { photo } from '../data/products.js'

export default function AuthForm({ mode }) {
  const isRegister = mode === 'register'
  const [submitted, setSubmitted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  return (
    <main className="mx-auto grid min-h-[72vh] max-w-[1120px] items-center gap-12 px-5 py-14 sm:px-8 md:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-16 lg:py-20">
      <div className="hidden md:block"><p className="mb-4 text-[10px] font-semibold uppercase tracking-[.2em] text-[#887963]">Your place, your pace</p><h1 className="serif text-[54px] leading-[1.08] lg:text-[66px]">A little more<br />room for <em className="font-medium text-[var(--forest)]">you.</em></h1><p className="mt-5 max-w-[360px] text-[13px] leading-6 text-[#6e7269]">Keep the pieces you love close. Your saved finds and order details, all in one place.</p><div className="mt-8 h-[210px] overflow-hidden lg:h-[260px]"><img src={photo('photo-1616486338812-3dadae4b4ace', 800)} alt="A quiet, sunlit living space" className="size-full object-cover" /></div></div>
      <div className="mx-auto w-full max-w-[430px]">
        <Link to="/" className="mb-7 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.12em] text-[#777a70]"><ArrowLeft size={14} /> Back to the shop</Link>
        {submitted ? <div className="border border-[#d8d8cc] bg-[#f0efe8] px-6 py-12 text-center"><span className="mx-auto flex size-10 items-center justify-center rounded-full bg-[var(--forest)] text-white"><Check size={19} /></span><h1 className="serif mt-5 text-[33px]">{isRegister ? 'You’re on your way.' : 'Welcome back.'}</h1><p className="mt-3 text-[13px] leading-6 text-[#6e7269]">{isRegister ? 'Your account details have been received.' : 'You’re signed in for this demo.'}</p><Link to="/products" className="mt-7 inline-flex items-center gap-3 bg-[var(--forest)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.12em] text-white">Explore the collection <ArrowRight size={15} /></Link></div> : <>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#887963]">{isRegister ? 'A good place to start' : 'Good to see you again'}</p><h1 className="serif text-[42px] leading-tight">{isRegister ? 'Create an account' : 'Welcome back'}</h1><p className="mt-3 text-[13px] text-[#777a70]">{isRegister ? 'Join us for thoughtful things and the stories behind them.' : 'Sign in to find your saved pieces and orders.'}</p>
          <form className="mt-8 space-y-5" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            {isRegister && <FormField label="Your name" name="name" placeholder="First and last name" autoComplete="name" />}
            <FormField label="Email address" name="email" placeholder="you@example.com" type="email" autoComplete="email" />
            <div><label htmlFor="password" className="mb-2 block text-[10px] font-semibold uppercase tracking-[.12em]">Password</label><div className="relative"><input id="password" name="password" type={showPassword ? 'text' : 'password'} required minLength={8} autoComplete={isRegister ? 'new-password' : 'current-password'} placeholder="At least 8 characters" className="h-12 w-full border border-[#d7d6cc] bg-transparent px-3 pr-16 text-[12px] outline-none transition-colors focus:border-[var(--forest)]" /><button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-semibold uppercase tracking-[.1em] text-[#777a70]">{showPassword ? 'Hide' : 'Show'}</button></div></div>
            {!isRegister && <div className="-mt-2 flex justify-end"><button type="button" onClick={() => window.alert('Password reset is not connected in this demo.')} className="text-[10px] text-[#687369] underline underline-offset-4">Forgot password?</button></div>}
            {isRegister && <label className="flex items-start gap-2 text-[11px] leading-5 text-[#70746b]"><input type="checkbox" required className="mt-1 accent-[var(--forest)]" /> Send me occasional notes on new pieces and good things. No noise, promise.</label>}
            <button type="submit" className="flex h-12 w-full items-center justify-center gap-3 bg-[var(--forest)] text-[10px] font-semibold uppercase tracking-[.14em] text-white transition-colors hover:bg-[#253a2d]">{isRegister ? 'Create my account' : 'Sign in'} <ArrowRight size={15} /></button>
          </form>
          <p className="mt-7 text-center text-[11px] text-[#777a70]">{isRegister ? 'Already have an account?' : 'New around here?'} <Link to={isRegister ? '/login' : '/register'} className="ml-1 font-semibold text-[var(--forest)] underline underline-offset-4">{isRegister ? 'Sign in' : 'Create an account'}</Link></p>
        </>}
      </div>
    </main>
  )
}

function FormField({ label, name, placeholder, type = 'text', autoComplete }) {
  return <div><label htmlFor={name} className="mb-2 block text-[10px] font-semibold uppercase tracking-[.12em]">{label}</label><input id={name} name={name} type={type} required autoComplete={autoComplete} placeholder={placeholder} className="h-12 w-full border border-[#d7d6cc] bg-transparent px-3 text-[12px] outline-none transition-colors focus:border-[var(--forest)]" /></div>
}