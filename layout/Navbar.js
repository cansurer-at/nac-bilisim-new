import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>

        {/* //---------------Large devices--------------------------------------------------------------------//// */}
    
    <div className="hidden bg-NACBlack md:block">
        <div class="flex container mx-auto space-x-16 items-center">
          <Link href="/">
          <img src="/Logo.svg"></img>
          </Link>
          <button className="h-8 text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <Link href="/">
            <a href="/">Anasayfa</a>
            </Link>
          </button>
          <button className="text-white text-red-700 fh-8 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <a href="/">Hakkımızda</a>
          </button>
          <button className="text-white text-red-700 fh-8 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <a href="/">Çözümler</a>
          </button>
          <button className="text-white text-red-700 fh-8 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <a href="/">İş Ortakları</a>
          </button>
          <button className="h-8 text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <a href="/">Referanslar</a>
          </button>
          <button className="p-4 m-4 font-bold text-white border border-white hover:border-NACRed hover:text-NACRed rounded-3xl ">
            <a href="/">Tanışalım 👋</a>
          </button>
          

        </div>
        </div>
        

    {/* //---------------Small devices--------------------------------------------------------------------//// */}

    <div className='flex sm:hidden'>
      <button className="h-8 text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed">
            <Link href="/">
            <a href="/">Anasayfa</a>
            </Link>
          </button>
          <button className="h-8 text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <Link href="/">
            <a href="/">Anasayfa</a>
            </Link>
          </button>
          <button className="h-8 text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <Link href="/">
            <a href="/">Anasayfa</a>
            </Link>
          </button>
          <button className="h-8 text-white text-red-700 font-md text-md hover:text-NACRed hover:border-b-2 hover:border-NACRed ">
            <Link href="/">
            <a href="/">Anasayfa</a>
            </Link>
          </button>
    </div>

</>
  )
}

export default Navbar