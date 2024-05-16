import React from 'react';
import { Footer } from "flowbite-react";
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import logoImg from "../assets/logo.png";

export function FooterComponent() {
  return (
    <Footer container className='border border-t-8'>
      <div className='container mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
          {/* Important Links */}
          <div className="md:col-span-1">
            <Footer.Title title='Important Links'/>
            <ul className="list-disc list-inside mt-2">
              <li className="mb-2 list-none"><Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Portfolio</Footer.Link></li>
              <li className="mb-2 list-none"><Footer.Link href='#' target='_blank' rel='noopener noreferrer'>How To Join</Footer.Link></li>
              <li className="mb-2 list-none"><Footer.Link href='#' target='_blank' rel='noopener noreferrer'>How to use </Footer.Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="md:col-span-1">
            <Footer.Title title='Policies'/>
            <ul className="list-disc list-inside mt-2">
              <li className="mb-2 list-none"><Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Privacy Policy</Footer.Link></li>
              <li className="mb-2 list-none"><Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Terms of Service</Footer.Link></li>
              <li className="mb-2 list-none"><Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Cookie Policy</Footer.Link></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className='md:col-span-1'>
            <Footer.Title title='Follow Us'/>
            <ul className="flex justify-center md:justify-end items-center list-none">
              <li className="mr-4"><a href="#" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a></li>
              <li className="mr-4"><a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a></li>
            </ul>
          </div>
        </div>

        {/* Navbar */}
        <nav className="mt-6 ">
          <ul className="flex justify-center md:justify-end items-center list-none mt-2">
            <li className="mr-6"><a href="/">Home</a></li>
            <li className="mr-6"><a href="/about">About</a></li>
            <li className="mr-6"><a href="/events">events</a></li>
            <li className="mr-6"><a href="/blogs">blogs</a></li>
          </ul>
        </nav>
      </div>
    </Footer>
  );
}

export default FooterComponent;
