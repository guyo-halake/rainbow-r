import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const menu = [
  {label: 'Home', href: '/home'},
  {label: 'Accommodation', href: '/accommodation'},
  {label: 'Restaurants & Bars', href: '/restaurants-bars'},
  {label: 'Meetings & Events', href: '/meetings-events'},
  {label: 'Health & Fitness', href: '/health_and_fitness'},
  {label: 'Offers', href: '/offers'},
  {label: 'Virtual Tour', href: '/vt'},
  {label: 'Contact Us', href: '/contact-us'},
]

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="logo"> 
        <a href="/home"><img src="https://www.rainbowruiruresort.com/assets/images/rainbow-logo.png" alt="Rainbow Ruiru Resort" /></a>
      </div>
      <nav className="main-nav">
        <ul>
          {menu.map(m=> (
            <li key={m.href}><a href={m.href}>{m.label}</a></li>
          ))}
        </ul>
      </nav>
      <div className="cta"><a className="btn" href="/reservations">Book Now</a></div>

      <button className="mobile-toggle" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>
        <span className={`hamburger ${open ? 'open' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.aside
            className="mobile-menu"
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:50}}
            transition={{type:'spring', stiffness:300}}
          >
            <ul>
              {menu.map(m=> (
                <li key={m.href}><a onClick={()=>setOpen(false)} href={m.href}>{m.label}</a></li>
              ))}
            </ul>
            <a className="btn block" href="/reservations">Book Now</a>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}
