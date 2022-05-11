import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setFade(open);
    }, 100);
}, [open]); 
 
  

  
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
      {open && (
        <div
          className={(fade?"transition-opacity duration-1000 opacity-100":"opacity-0")+" absolute z-50 w-screen h-screen bg-NACBlack "}
        >
          <div className="flex mt-4 end">
            <img className="pl-10 -pt-8" src="/Logo.svg"></img>
            <i
              class="ri-close-line text-4xl text-white mt-2 ml-40"
              onClick={() => {
                setOpen(false)
              }}
            ></i>
          </div>
          <div className="flex flex-col items-start pl-8 mt-8 " >
          <button className="pb-10 text-sm text-white">
            <Link href="/">
           Anasayfa
            </Link>
          </button>
          <button className="pb-10 text-sm text-white">
            <Link href="/">
            Hakkımızda
            </Link>
          </button>
          <button className="pb-10 text-sm text-white">
            <Link href="/">
           Çözümler
            </Link>
          </button>
          <button className="pb-10 text-sm text-white">
            <Link href="/">
            İş Ortakları
            </Link>
          </button>
          <button className="pb-10 text-sm text-white">
            <Link href="/">
            Referanslar
            </Link>
          </button>
          <button className="pb-10 text-sm text-white">
            <Link href="/">
            İletişim
            </Link>
          </button>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between py-4 pl-10 pr-4 -mb-1 end sm:hidden bg-NACBlack ">
        <img className="w-40% h-20%" src="/Logo.svg"></img>
        <i
          class="ri-menu-line text-white text-3xl pr-4  "
          onClick={() => setOpen(true)}
        ></i>
      </div>
    </>
  );
}

export default Navbar;
