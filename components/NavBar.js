/* eslint-disable @next/next/no-html-link-for-pages */
//import { Navbar } from "bootstrap5";
import Image from "next/image";
import Link from "next/link";
export default function NavBar (){
    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><Image src="/JELogoIcon.png" width="30" height="30" alt="Jacovetti Entertainment"/></a>
          <div className="navbar-nav me-auto"><a className="navlink text-white px-10 pb-2 disabled" href="/">Jacovetti Entertainment</a></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div className="navbar-nav ms-auto align-items-end">
              <a className="nav-link text-white" href="/">Home</a>
              <a className="nav-link text-white" href="/games">Games</a>
              <a className="nav-link text-white" href="/about">Our Story</a>
              <a className="nav-link text-white" href="/jobs">Careers</a>
              <a className="nav-link text-white" href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    )
}