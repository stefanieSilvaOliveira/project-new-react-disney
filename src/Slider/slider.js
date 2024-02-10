import React from "react";
import {Swiper,SwiperSlide,} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import princesaBela from '../assets/bela-fera.png'
import princesaCinderela from '../assets/cinderela-loira.png'
import princesaWish from '../assets/film-wish.png'
import princesaSereia from '../assets/sereia-ruiva-peixe.png'
import princesaNuther from '../assets/princesaCuriosa.png'
import princesaBrilha from '../assets/princesaBrilha.png'
import princesaMagic from '../assets/princesaMagic.png'
import princesaLoira from '../assets/princessLoira.png'
import styled from 'styled-components'
import breakpoints from "../breakpoints";


function Slider() {
    return(
   
   <CarroselConteiner> 
    <Swiper
    spaceBetween={1}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
    <img  className="princesasEdit" src={princesaBela} alt="" />
    </SwiperSlide>
    
    <SwiperSlide>
    <img className="princesasEdit" src={princesaCinderela} alt="" />
    </SwiperSlide>
    
    <SwiperSlide>
    <img  className="princesasEdit" src={princesaSereia} alt="" />
    </SwiperSlide>
    
    <SwiperSlide>
    <img  className="princesasEdit"src={princesaWish} alt="" />
    </SwiperSlide>
    
    <SwiperSlide>
    <img  className="princesasEdit"src={princesaNuther} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img  className="princesasEdit"src={princesaBrilha} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img  className="princesasEdit"src={princesaMagic} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img  className="princesasEdit"src={princesaLoira} alt="" />
    </SwiperSlide>
    
    </Swiper>
    </CarroselConteiner>
)

}

const CarroselConteiner = styled.div`
          display: flex;
          position: absolute;
          top: 30%;
          right: 40%;
          left: 30%;
          justify-content: center;
          align-items: center;
          margin-left: 220px;
          margin-top: 50px;
          background: rgba(0,0,0,0.2);
          box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          min-width: 650px;
          cursor: pointer;

          @media ${breakpoints.sm}{
            left: 5%;
            right: 5%;
            margin-top: 230px;
            margin-left: 20px;
            margin-right: 20px;
            min-width: 100px; 
      
            }        

.princesasEdit{
    height: 200px;
    width: 150px;
    border-radius: 5px;
    object-fit: cover;
    object-position: center;

    @media ${breakpoints.sm}{
            height: 150px;
            width: 90px;
            margin-top: 20px;
            padding: 0 5px 0 5px;
             
          }      
}        

`   
    
export default Slider;  



