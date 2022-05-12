import React from "react";

export default function AboutUs() {
  return (
    <div className="container mx-auto bg-white">
      <div className="grid grid-cols-1 py-20 md:py-20 md:mx-10 lg:ml-0 lg:py-16 lg:grid-cols-2 md:gap-15 ">
        <div className="grid grid-cols-2 gap-4 px-1 lg:px-0 lg:h-100% ">
          <img className="h-full" src="/card.png" alt="card-photo"></img>
          <div className="grid gap-4">
            <img className="h-full" src="/cable.png" alt="cable-photo"></img>
            <img className="h-full" src="/phone.png" alt="phone-photo"></img>
          </div>
        </div>

       
          <div className="grid grid-cols-1 gap-6 pl-1 md:gap-2 lg:gap-4 lg:pl-12">
            <h6 className="pt-8 font-bold lg:pt-0 text-NACRed md:text-lg">HAKKIMIZDA</h6>
            <h1 className="mt-5 text-4xl font-bold lg:text-7xl text-NacBlack ">Teknolojinin <br></br> <span className="font-bold mt-3text-4xl lg:text-7xl">Ötesine Geçin</span></h1>
            <p className="text[#555663] text-textColor mt-5  lg:mt-10 lg:pr-5 text-xs">Sektörde uzun yıllardır kazanılan deneyimler sonrası kurulan NAC Bilişim Teknoloji Sistemleri uzmanlaşmış kadrosu ile çözümlerin ve saha uygulamasının yapılması ile ticaret hayatına başlamıştır. Bundan sonraki dönemde felsefe olarak daima yeniliği ve prensiplerinden ödün vermeden kendini diğer Zayıf Akım Sistemleri konusunda da geliştirmeyi hedef almıştır. Bu alanda müşterilerine çözüm odaklı hedefler sunmayı planlamaktadır. NAC BİLİŞİM uzman kadrosu ürün satışı yaptığı tüm üreticilerin vermiş olduğu teknik sertifikaları almaya başlamıştır.</p>
            <div className="mb-24 lg:mb-10 lg:pt-10"><button className="flex px-8 py-2 text-white bg-NACRed rounded-2xl md:mt-12">Hakkımızda<i  class="ri-arrow-right-line ml-1  " ></i></button></div>
          </div>
        </div>
      </div>

  );
}
