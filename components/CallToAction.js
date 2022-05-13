import React from "react";

export default function CallToAction() {
  return (
    <div className="bg-NACRed">
    <div className="container mx-auto py-28 ">
      <h1 className="text-4xl font-semibold text-center text-white first-letter:my-5 lg:text-6xl">
        Projenizde Birlikte Çalışalım
      </h1>
      <p className="mt-10 text-center text-white">
        Tecrübeli ekibimiz ile birlikte sizlere hizmet sunmak için bekliyoruz
      </p>
      <div className="flex justify-center text-bold">
        <button className="flex px-8 py-2 mt-8 text-white border-2 rounded-full bg-NACRed">
        <i class="ri-phone-fill mr-3 text-white  "></i> 0850 225 29 30

        </button>
      </div>
    </div>
    </div>
  );
}
