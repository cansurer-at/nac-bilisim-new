import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="w-full px-2 py-10 text-white bg-NACBlack ">
        <div className="container mx-auto mt-3 lg:mt-0">
          <div className="grid grid-cols-12 lg:gap-10 lg:mx-0 md:mx-[1rem]">
            <div className="col-span-12 mt-3 lg:col-span-3 lg:mt-0">
            <h3 class="text-white font-semibold text-mb mb-5">Hakkımızda</h3>
              <p className="text-xs">
                NAC Bilişim, müşteri memnuniyeti odaklı hizmet vermeyi öncelikli
                hedefi olarak belirlemiştir. Hizmet verdiğimiz müşterilerimizin
                bilişim ihtiyaçlarını analiz ederek, en güncel ve verimli
                çözümleri sunmak amacı ile çalışmaktayız.
              </p>
              <img className="mt-5" src="/Logo.svg"></img>
            </div>
            <div className="col-span-12 mt-3 lg:col-span-4 lg:mt-0">
            <h3 class="text-white font-semibold text-mb mb-5">Çözümlerimiz</h3>
              <h4 className="mb-2 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Yangın Algılama Sistemleri
                </a>
              </h4>
              <h4 className="mb-2 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  CCTV sistemleri
                </a>
              </h4>
              <h4 className="mb-2 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Seslendirme ve Acil Anons Sistemleri
                </a>
              </h4>
              <h4 className="mb-2 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Kartlı Geçiş Sistemleri
                </a>
              </h4>
              <h4 className="mb-2 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Telefon Santral Sistemleri
                </a>
              </h4>
              <h4 className="mb-2 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Yapısal Kablolama
                </a>
              </h4>
              <h4 className="mb-2 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Network Çözümleri
                </a>
              </h4>
              <h4 className="mb-2 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Ortam İzleme
                </a>
              </h4>
              <h4 className="mb-2 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Sözleşmeli Bakım ve Servis
                </a>
              </h4>
              <h4 className="mb-2 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Kurulum ve Entegrasyon
                </a>
              </h4>
            </div>
            <div className="col-span-12 mt-3 lg:col-span-2 lg:mt-0">
            <h3 class="text-white font-semibold text-mb mb-5 ">Hızlı Menü</h3>
              <h4 className="mt-3 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Anasayfa
                </a>
              </h4>
              <h4 className="mt-3 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Hakkımızda
                </a>
              </h4>
              <h4 className="mt-3 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Çözümler
                </a>
              </h4>
              <h4 className="mt-3 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  İş Ortakları
                </a>
              </h4>
              <h4 className="mt-3 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  Referanslar
                </a>
              </h4>
              <h4 className="mt-3 text-xs text-white transition-all duration-300 hover:text-NACRed">
                <a rel="noreferrer" target="_blank" href="/">
                  İletişim
                </a>
              </h4>
            </div>
            <div class="col-span-12 lg:col-span-3 mt-3  lg:mt-0">
              <h3 class="text-white font-bold text-md text-semibold mb-5">Bize Ulaşın</h3>
              <a
                class="flex items-center justify-start group"
                href="http://maps.google.com/?q=1200 Piyale Paşa Bulvarı No:77 Famas Plaza B Blok Kat 6 Daire:76 Şişli/İSTANBUL"
                target="_blank"
              >
                <i class="ri-map-pin-fill text-white text-2xl mr-4 transition-all duration-300 group-hover:text-NACRed"></i>
                <p class="text-white transition-all duration-300 group-hover:text-NACRed text-xs">
                  Piyale Paşa Bulvarı No:77 Famas Plaza B Blok Kat 6 Daire:76
                  Şişli/İSTANBUL
                </p>
              </a>
              <a
                class="flex items-center justify-start mt-3 group text-xs"
                href="tel:0850 225 29 30"
                target="_blank"
              >
                <i class="ri-phone-fill text-white text-2xl mr-4 transition-all duration-300 group-hover:text-NACRed"></i>
                <p class="text-white transition-all duration-300 group-hover:text-NACRed">
                  0850 225 29 30
                </p>
              </a>
              <a
                class="flex items-center justify-start mt-3 group"
                href="mailto:info@nacbilisim.com"
                target="_blank"
              >
                <i class="ri-mail-unread-fill text-white text-2xl mr-4 transition-all duration-300 group-hover:text-NACRed"></i>
                <p class="text-white transition-all duration-300 group-hover:text-NACRed text-xs">
                  info@nacbilisim.com
                </p>
              </a>
              <h3 class="text-white font-semibold text-md mt-8 ">Sosyal Medya</h3>
              <div class="flex items-center mt-3 space-x-5">
                <a
                  title="Facebook"
                  class=" flex items-center justify-center px-2 py-1 rounded-full bg-[#1E203A] hover:bg-NACRed transition-all duration-300 cursor-pointer"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="ri-facebook-circle-fill text-white  text-2xl "></i>
                </a>
                <a
                  title="Twitter"
                  class="flex items-center justify-center px-2 py-1 rounded-full bg-[#1E203A] hover:bg-NACRed transition-all duration-300 cursor-pointer"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i class="ri-twitter-fill text-white  text-2xl "></i>
                </a>
                <a
                  title="İnstagram"
                  class="flex items-center justify-center px-2 py-1 rounded-full bg-[#1E203A] hover:bg-NACRed transition-all duration-300 cursor-pointer"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i class="ri-instagram-fill text-white  text-2xl "></i>
                </a>
                <a
                  title="Youtube"
                  class="flex items-center justify-center px-2 py-1 rounded-full bg-[#1E203A] hover:bg-NACRed transition-all duration-300 cursor-pointer"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i class="ri-youtube-fill text-white  text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-xs flex text-white  w-100% bg-[#1E203A] justify-between items-center mx-auto w-full flex-col lg:flex-row md:flex-col lg:px-[29rem] md:px-[1rem] py-2">
        <h6 className="md:mb-4 lg:mb-0  text-[0.6rem] text-center px-[3rem] lg:px-0 mb:px-0 lg:text-mb  ">Copyright © Nac Bilişim {year} Tüm Hakları Saklıdır.</h6>
        <h6 className="md:mb-1 lg:mb-0 pt-[1rem] pb-[0.5rem]   lg:py-0 md:py-0">
          Yazılım ve Tasarım{" "}
          <span className="text-NACRed ">
            <a rel="noreferrer" target="_blank" href="http://www.webinu.com/">
              Webinu
            </a>
          </span>{" "}
          - Hosting{" "}
          <span className="text-NACRed">
            <a rel="noreferrer" target="_blank" href="http://www.makdos.com/">
              Makdos
            </a>
          </span>
        </h6>
      </div>
    </>
  );
}
