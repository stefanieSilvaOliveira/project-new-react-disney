
import styled from 'styled-components';
import 'swiper/css';
import breakpoints from './breakpoints';

export const Container = styled.div `
         height: 100vh;
         overflow: hidden;
         
         
         @media ${breakpoints.sm}{
           
          }
       
`
export const Header = styled.header`
         display: flex;
         justify-content: space-evenly;
         height: 60px;
         background-color: #000;
         cursor: pointer;

         @media ${breakpoints.sm}{
            
           justify-content: space-around;
             width: 100%;
             height: 10%;
          }
         
         li{
  
            margin: 20px 50px 20px 20px;
            color: #fff;
            text-decoration: none;

            @media ${breakpoints.sm}{
            
              margin: 10px 40px 0 10px;

              
            
              &:nth-child(4){
                display: none;
              }

              &:nth-child(5){
                display: none;
              }


            }
  
         }
         
         ul{
      
            font-size: 15px;
            display: flex;
            list-style: none;
            color: #fff;

            @media ${breakpoints.sm}{
            right: 5%;
            left: 5%;
            
            font-size: 12px;
          }
         }


         i{
          display: flex;
          align-items: center;
          justify-content: space-around;

          @media ${breakpoints.sm}{
            margin-top: 10px;
            font-size: 10px;
          }
         }
    
 
        `
       export const Logo = styled.img`
       max-width: 100px; 
      margin-left: -50px;

      @media ${breakpoints.sm}{
            width: 40px;
            height: 30px;
            margin-top: 15px;
            margin-right: -90px;
        
          }
`

export const ImageContainer = styled.div`
           position: relative;
           overflow: hidden;

           @media ${breakpoints.sm}{
            height: 100vh;
            width: 100vh;
          }
` 

export const Image = styled.img`
 display: flex;
 justify-content: space-between;
 background-size: cover;
 background-position: center;
 min-height: 100vh;
 width: 100%;
 overflow: hidden;
 transition: 0.5s;
 background: rgba(0, 0, 0, 0.5);

 @media ${breakpoints.sm}{
         
        width: 100%;
        height: 100%;  
          }

`
export const Overlay = styled.div`
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`;
export const ContainerItens = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  position: absolute;
  top: 50%;
  right: 70%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  @media ${breakpoints.sm}{
            width: 10%;
            height: 20%;
            margin-top: -100px;
          }

`

export const Button = styled.button`
   
  height: 40px;
  width: 180px;
  border-radius: 2px;
  border: none;
  display: flex;
  align-items:center;
  justify-content: center;
  position: absolute;
  top: 70%;
  right: 70%;
  left: 25%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  text-align: center;

  @media ${breakpoints.sm}{
            display: none;       }

  i{
   margin-right: 10px;
  }

  &:hover{
   opacity: 0.8;
  }

  &:active{
   opacity: 0.5;
  }

`

export const P = styled.p`
         height: 40px;
         width: 400px;
         display: flex;
         align-items:center;
         justify-content: center;
         position: absolute;
         top: 90%;
         right: 70%;
         left: 25%;
         transform: translate(-50%, -50%);
         cursor: pointer;
         font-size: 15px;
         font-weight: 300;
         color: #D1D1D1;
         text-align: center;

         @media ${breakpoints.sm}{
            width: 200px;
            margin-left: 80px;
            margin-top: -220px;
            font-size: 10px;
            text-align: center;
        
          }

`  

