import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="hidden bg-NACBlack lg:block">
        <div class="flex container mx-auto space-x-16 items-center">
          <Link href="/">
          <img src="/Logo.svg"></img>
          </Link>
          <button className="h-10 font-bold text-white text-red-700 hover:text-red-700 hover:border-b-2 ">
            <Link href="/">
            <a href="/">Anasayfa</a>
            </Link>
          </button>
          <button className="font-bold text-white hover:text-red-700 ">
            <a href="/">Hakkımızda</a>
          </button>
          <button className="font-bold text-white hover:text-red-700 ">
            <a href="/">Çözümler</a>
          </button>
          <button className="font-bold text-white hover:text-red-700 ">
            <a href="/">İş Ortakları</a>
          </button>
          <button className="font-bold text-white hover:text-red-700 ">
            <a href="/">Referanslar</a>
          </button>
          <button className="p-4 m-4 font-bold text-white border border-white hover:text-red-700 rounded-3xl ">
            <a href="/">Tanışalım 👋</a>
          </button>
          

        </div>
        </div>
  )
}

export default Navbar