import React from "react";

function Contact() {
  return (
    <div className="bg-NACBlack ">
      {" "}
      <div className="container mx-auto ">
        <div className="grid items-center grid-cols-12 px-8 sm:px-0">
          <div className="flex flex-col col-span-12 space-y-3 lg:col-span-6">
            <h6 className="font-bold text-red-700">TEKNOLOJİDE ÖNCÜ</h6>
            <h1 className="hidden text-5xl font-bold leading-snug text-white ">
              Network <br></br> Altyapınızı <br></br>Güçlendirelim
            </h1>
            <h6 className="text-white">
              NAC bilişim olarak kurulduğumuz günden bu güne kadar bir çok kurum
              ve şirketin alt yapı projesini başarı ile tamamladık.
            </h6>
            <div className="">
              <button className="flex px-8 py-2 mt-8 text-white bg-NACRed rounded-2xl">
                İletişime Geçin <i class="ri-arrow-right-line ml-1 "></i>
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <img src="/homepageWoman.png" className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
