import React from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={style.main}>
    <div className={style.box1}></div>
    <div className={style.box2}>
      
    <div className={style.bttn}><Link className={style.link} href="/"><h3>Home</h3></Link></div>
    <div className={style.bttn}><Link className={style.link} href="/about"><h3>About</h3></Link></div>
    <div className={style.bttn}><Link className={style.link} href="/services"><h3>Services</h3></Link></div>
    <div className={style.bttn}><Link className={style.link} href="/contact"><h3>Contact</h3></Link></div>
    </div>
    <div className={style.box3}>
      <div className={style.box3div}><h1>Login</h1><div><h1>X</h1></div></div>
    </div>
    </div>
  )
}

export default Navbar;