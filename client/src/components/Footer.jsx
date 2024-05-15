import React from 'react'
import { Footer } from "flowbite-react";
import logoImg from "../assets/logo.png";

export function FooterComponent() {
  return (
    <Footer container className='border border-t-8 '>
        <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:grid-cols-1'>
            <div className='logo'>
            <img
          src={logoImg}
          alt="logo"
          className="h-16 w-16"
          style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))" }}
        />
            </div>
            <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                <div className=''>
                    <Footer.Title title='About'/>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>GitHub</Footer.Link>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>GitHub</Footer.Link>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>GitHub</Footer.Link>
                </div>
                <div>
                    <Footer.Title title='About'/>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>GitHub</Footer.Link>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>GitHub</Footer.Link>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>GitHub</Footer.Link>
                </div>
                <div>
                    <Footer.Title title='About'/>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>GitHub</Footer.Link>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>GitHub</Footer.Link>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>GitHub</Footer.Link>
                </div>
            </div>
            <Footer.Divider/>
            <div className='icons'></div>
            
        </div>
        </div>
      
    </Footer>
  );
}
export default FooterComponent;