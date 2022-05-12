import React from "react";

export default function Solutions() {
  return (
    <div className=" bg-NACBlack">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6 py-20 ">
            <h6 className="pt-8 font-bold lg:pt-0 text-NACRed md:text-lg">
              ÇÖZÜMLERİMİZ
            </h6>
            <h1 className="my-10 text-4xl font-bold text-white lg:text-5xl ">
              Tüm İhtiyaçlar <br></br>{" "}
              <span className="font-bold mt-3text-4xl lg:text-5xl">
                Tek Yerde
              </span>
            </h1>
            <p className="mt-5 text-xs text-white text-textColor lg:mt-10 lg:pr-5">
              Sektörde uzun yıllardır kazanılan deneyimler sonrası kurulan NAC
              Bilişim Teknoloji Sistemleri uzmanlaşmış kadrosu ile çözümlerin ve
              saha uygulamasının yapılması ile ticaret hayatına başlamıştır.
            </p>
            <div className="mb-24 lg:mb-10 lg:pt-10">
              <button className="flex px-8 py-2 text-white bg-NACRed rounded-2xl md:mt-12">
                Çözümlerimiz<i class="ri-arrow-right-line ml-1  "></i>
              </button>
            </div>
          </div>
          <div className="justify-center col-span-6 py-20 pl-16 font-semibold text-white bg-cover bg-homepageBackgroundRed ">
            <div className="flex flex-row mb-5 ">
              <i class="ri-blaze-line  mr-4 "></i>
              <h6>Yangın Algılama Sistemleri</h6>
            </div>
            <div className="flex flex-row mb-5">
              <i class="ri-vidicon-line  mr-4 "></i>
              <h6>CCTV Sistemleri</h6>
            </div>
            <div className="flex flex-row mb-5">
              <i class="ri-volume-up-line  mr-4 "></i>
              <h6>Seslendirme ve Acil Anons Sistemleri</h6>
            </div>
            <div className="flex flex-row mb-5">
              <i class="ri-bank-card-line  mr-4 "></i>
              <h6>Kartlı Geçiş Sistemleri</h6>
            </div>
            <div className="flex flex-row mb-5">
              <i class="ri-headphone-line  mr-4 "></i>
              <h6>Telefon Santral Sistemleri</h6>
            </div>
            <div className="flex flex-row mb-5">
              <i class="ri-table-fill  mr-4 "></i>
              <h6>Yapısal Kablolama</h6>
            </div>
            <div className="flex flex-row mb-5">
              <i class="ri-global-line  mr-4 "></i>
              <h6>Network Çözümleri</h6>
            </div>
            <div className="flex flex-row mb-5">
              <i class="ri-eye-line  mr-4 "></i>
              <h6>Ortam İzleme</h6>
            </div>
            <div className="flex flex-row mb-5 ">
              <i class="ri-tools-line  mr-4 "></i>
              <h6>Sözleşmeli Bakım ve Servis</h6>
            </div>
            <div className="flex flex-row mb-5">
              <i class="ri-settings-2-line  mr-4 "></i>
              <h6>Kurulum ve Entegrasyon</h6>
            </div>
          </div>
        </div>

        <div className="col-span-12"></div>
      </div>
    </div>
  );
}
