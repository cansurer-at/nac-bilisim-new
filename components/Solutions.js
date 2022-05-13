import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Solutions() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute cursor-pointer -right-16 bottom-10 md:-right-15 ">
        <i onClick={onClick} class="ri-arrow-right-s-line text-5xl "></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute z-50 cursor-pointer lg:-left-24 bottom-10 -left-16">
      <i onClick={onClick} className="text-5xl ri-arrow-left-s-line"></i>
    </div>
    );
  }

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        dots: false,
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        dots: false,
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        dots: false,
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" bg-NACBlack">
      <div className="">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 ">
          <div className="flex flex-col lg:pl-[23rem] lg:pr-[5rem] pr-10 pt-10 md:pt-0 pl-10 md:pr-0 md:pl-0   ">
            <div className="col-span-1 lg:py-20 md:pl-14 lg:pl-0 md:pt-12 md:pb-16 ">
              <h6 className="pt-8 font-semibold lg:pt-0 text-NACRed md:text-xl ">
                ÇÖZÜMLERİMİZ
              </h6>
              <h1 className="my-10 text-4xl font-bold text-white lg:text-5xl ">
                Tüm İhtiyaçlar <br></br>{" "}
                <span className="font-bold mt-3text-4xl lg:text-5xl">
                  Tek Yerde
                </span>
              </h1>
              <p className="mt-5 text-xs text-white text-textColor md:text-md lg:mt-10 lg:pr-5">
                Sektörde uzun yıllardır kazanılan deneyimler sonrası kurulan NAC
                Bilişim Teknoloji Sistemleri uzmanlaşmış kadrosu ile çözümlerin
                ve saha uygulamasının yapılması ile ticaret hayatına
                başlamıştır.
              </p>
              <div className="mt-12 mb-24 lg:mt-0 lg:pt-10 md:mb-0 lg:mb-0">
                <button className="flex px-8 py-2 text-white bg-NACRed rounded-2xl md:mt-12">
                  Çözümlerimiz<i class="ri-arrow-right-line ml-1  "></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 py-20 pl-16 font-semibold text-white bg-cover bg-homepageBackgroundRed">
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

        <div className="py-20 bg-white">
          <h6 className="font-semibold text-center lg:pt-0 text-NACRed md:text-xl lg:text-md">
            BİRLİKTE ÇALIŞTIĞIMIZ
          </h6>
          <h1 className="my-5 text-4xl font-semibold text-center text-black lg:text-6xl ">
            İş Ortakları
          </h1>
          <div className="mx-2 border-b-2 md:mx-10 lg:mx-0 md:border-b-4 md:border-none lg:border-none">
          <div className="container pb-10 pl-20 pr-20 mx-auto ">
            <Slider {...settings}>
              
              <div>
                <img src="/marka-logo1.png"></img>
              </div>
              <div>
                <img src="/marka-logo2.png"></img>
              </div>
              <div>
                <img src="/marka-logo3.png"></img>
              </div>
              <div>
                <img src="/marka-logo4.png"></img>
              </div>
              <div>
                <img src="/marka-logo5.png"></img>
              </div>
              <div>
                <img src="/marka-logo6.png"></img>
              </div>
              <div>
                <img src="/marka-logo7.png"></img>
              </div>
              <div>
                <img src="/marka-logo8.png"></img>
              </div>
              <div>
                <img src="/marka-logo9.png"></img>
              </div>
            </Slider>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
