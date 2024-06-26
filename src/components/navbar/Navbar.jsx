'use client'

import style from './navbarstyle.css';
import Links from "./links/Links";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar =({ isVisible,Accueil,Acolore}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
    if (!isVisible) {
      return null; // Si isVisible est faux, ne pas rendre le header
    }
    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const navbarStyle = {
      backgroundColor: scrollPosition > 100 ? 'white' : 'transparent', // Changez la couleur et la position de défilement comme nécessaire
      transition: 'background-color 0.3s ease',
    };
   if (Accueil){
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top  p-2 text-dark bg-opacity-10" style={navbarStyle}>
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between mb-2 pb-1">
              <i className="fas fa-cubes fa-2x me-4"></i>
              <span className="h2 fw-bold mb-0 text-white">
                <Image
                  src={`${scrollPosition?"/logo_2.png":"/logo_2_blanc.png"}`}
                  width={200}
                  height={50}
                />
              </span>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className='nav-res bg-white-1'>
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className={`nav-link active ${scrollPosition?'text-orange' : 'text-white'}   fw-bold`} aria-current="page" href="/">Accueil</a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link active ${scrollPosition?'text-orange' : 'text-white'} fw-bold`} aria-current="page" href="/about">A propos</a>
                        </li>
                      <li className="nav-item">
                          <a className={`nav-link active ${scrollPosition?'text-orange' : 'text-white'} fw-bold`} href="/service">Service</a>
                      </li>
                      <li className="nav-item">
                          <a className={`nav-link active ${scrollPosition?'text-orange' : 'text-white'} fw-bold`} href="/contact">Contact</a>
                      </li>
                      {/* <li className="nav-item">
                          <a  href="/contact" className="btn btn-dark" role="button">Rejoin nous</a>
                      </li>  */}
                  </ul>
                  <a  href="/contact" className="btn btn-orange" role="button">Obtenir un device</a>
              </div>
              </div>
          </div>
      </nav>
      )
   }else{
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top  p-2 text-dark bg-opacity-10" style={navbarStyle}>
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between mb-2 pb-1">
              <i className="fas fa-cubes fa-2x me-4"></i>
              <span className="h2 fw-bold mb-0 text-white">
                <Image
                  src="/logo_2.png"
                  width={200}
                  height={50}
                />
              </span>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className='nav-res bg-white-1'>
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className={`nav-link active text-orange  fw-bold`} aria-current="page" href="/">Accueil</a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link active text-orange fw-bold`} aria-current="page" href="/about">A propos</a>
                        </li>
                      <li className="nav-item">
                          <a className={`nav-link active text-orange fw-bold`} href="/service">Service</a>
                      </li>
                      <li className="nav-item">
                          <a className={`nav-link active text-orange fw-bold`} href="/contact">Contact</a>
                      </li>
                      {/* <li className="nav-item">
                          <a  href="/contact" className="btn btn-dark" role="button">Rejoin nous</a>
                      </li>  */}
                  </ul>
                  <a  href="/contact" className="btn btn-orange" role="button">Obtenir un device</a>
              </div>
              </div>
          </div>
      </nav>
      )
   }
}
export default Navbar;