import { useState } from 'react'
import { CircleUserRound, Menu, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [['Home', '/'], ['Products', '/products'], ['About', '/about']]

export default function SiteHeader({ cartCount }) {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <div className="bg-[var(--forest)] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[.16em] text-[#f6f4ee] sm:text-[11px]">Considered things, made to last. Complimentary shipping over $100.</div>
      <header className="relative z-20 border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button className="inline-flex size-10 items-center justify-center md:hidden" aria-label={mobileMenu ? 'Close menu' : 'Open menu'} onClick={() => setMobileMenu((open) => !open)}>{mobileMenu ? <X size={20} /> : <Menu size={20} />}</button>
          <nav className="hidden items-center gap-8 text-[12px] font-medium md:flex" aria-label="Main navigation">{navItems.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} className={({ isActive }) => `transition-colors hover:text-[#8c674e] ${isActive ? 'text-[var(--forest)]' : 'text-[#777a70]'}`}>{label}</NavLink>)}</nav>
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-center" aria-label="Form and Field home"><span className="serif block text-[22px] leading-none sm:text-[25px]">form & field</span><span className="mt-1 block text-[8px] uppercase tracking-[.23em] text-[#777a70]">Useful by nature</span></Link>
          <div className="flex items-center gap-1 sm:gap-3"><Link to="/login" className="hidden items-center gap-2 px-2 py-2 text-[12px] text-[#62675f] transition-colors hover:text-[var(--forest)] sm:flex"><CircleUserRound size={17} strokeWidth={1.5} /> Account</Link><button aria-label={`Shopping bag, ${cartCount} items`} className="relative inline-flex size-10 items-center justify-center" onClick={() => window.alert(cartCount ? `${cartCount} item${cartCount === 1 ? '' : 's'} in your bag.` : 'Your bag is waiting for something lovely.')}><ShoppingBag size={19} strokeWidth={1.5} /><span className="absolute right-0 top-0 flex size-[17px] items-center justify-center rounded-full bg-[var(--forest)] text-[9px] text-white">{cartCount}</span></button></div>
        </div>
        {mobileMenu && <nav className="grid border-t border-[var(--line)] px-5 py-2 md:hidden" aria-label="Mobile navigation">{[...navItems, ['Account', '/login']].map(([label, path]) => <NavLink key={path} to={path} onClick={() => setMobileMenu(false)} className="border-b border-[var(--line)] py-3 text-sm text-[#555b53] last:border-0">{label}</NavLink>)}</nav>}
      </header>
    </>
  )
}