import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:space-x-32 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-2xl font-bold">About Us</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quas quis ex voluptate, voluptas nesciunt aliquid dicta facilis
            tempore reprehenderit omnis, animi consequatur eligendi a deserunt
            libero nemo alias velit provident quos.
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-2xl font-bold">Links</h1>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-2xl font-bold">Contact</h1>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twiter</Link>
          <Link href="/">Github</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
