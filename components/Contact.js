import React from "react";

function Contact() {
  return (
    <div className="relative">

    <img className="absolute w-24 h-40 overflow-hidden lg:left-16 lg:top-20 left-12 top-16 " src="./Rectangle.png "></img>

    <img className="absolute w-10 h-16 left-2/4 bottom-2/4 lg:left-2/4 lg:top-2/4 " src="./Rectangle.png"></img>
   
    
    <img className="absolute hidden sm:block w-22 h-28 left-12 -bottom-12 lg:w-8 lg:h-12 lg:left-60 lg:bottom-1/4 " src="./Rectangle.png"></img>
   

    <img className="absolute hidden w-16 h-30 sm:block lg:left-3/4 lg:ml-52"  src="./Rectangle.png"></img>


    
    <div className=" bg-NACBlack" >
      {" "}
      <div className="container mx-auto ">
      <div className="grid items-center grid-cols-12 lg:pt-8 lg:pt-24 sm:p-0 ">
      
      <div className="relative z-40 flex flex-col col-span-12 ml-6 space-y-3 md:ml-0 lg:col-span-6">
        <h6 className="mt-12 font-bold lg:m-0 text-NACRed">TEKNOLOJİDE ÖNCÜ</h6>
        <h1 className="text-4xl font-bold leading-relaxed text-white lg:leading-relaxed lg:text-5xl ">
          Network <br></br> Altyapınızı <br></br>Güçlendirelim
        </h1>
        <h6 className="text-sm text-white ">
          NAC bilişim olarak kurulduğumuz günden bu güne kadar bir çok kurum ve
          şirketin alt yapı projesini başarı ile tamamladık.
        </h6>
        <div className="lg:pt-4 sm:p-0 sm:m-0" >
        <button className="flex px-8 py-2 mt-8 text-white bg-NACRed rounded-2xl">İletişime Geçin <i  class="ri-arrow-right-line ml-1  " ></i></button>
        </div>
        </div>
        
        <div className="col-span-12 lg:col-span-6 ">
               <img src="/homepageWoman.png" className="mt-20 lg:-mb-14"></img>

        </div>

      </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
