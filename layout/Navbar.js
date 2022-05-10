import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>

      {/* //---------------Large devices--------------------------------------------------------------------//// */}

      <div className="hidden bg-NACBlack md:block">
        <div class="flex container mx-auto space-x-16 items-center -mb-4 py-8">
          <Link href="/">
            <img src="/Logo.svg"></img>
          </Link>
          <button className="h-8 text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <Link href="/">
              <a href="/">Anasayfa</a>
            </Link>
          </button>
          <button className="text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <a href="/">Hakkımızda</a>
          </button>
          <button className="text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <a href="/">Çözümler</a>
          </button>
          <button className="text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <a href="/">İş Ortakları</a>
          </button>
          <button className="h-8 text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <a href="/">Referanslar</a>
          </button>
          <button className="flex items-center h-8 px-4 py-2 font-bold text-white border border-white rounded-full hover:border-NACRed hover:text-NACRed ">
            <a href="/">Tanışalım 👋</a>
          </button>


        </div>
      </div>


      {/* //---------------Small devices--------------------------------------------------------------------//// */}

      <div className='flex items-center justify-between px-8 py-8 -mb-1 sm:hidden bg-NACBlack '>

        <img className="w-40% h-20%" src="/Logo.svg"></img>
        <i class="ri-menu-line text-white text-3xl "></i>
      </div>

    </>
  )
}

export default Navbar