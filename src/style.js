
import styled from 'styled-components';
import 'swiper/css';
import breakpoints from './breakpoints';

export const Container = styled.div `
         height: 100vh;
         
         @media ${breakpoints.sm}{
            
            min-height: 100vh;
            overflow: hidden;
          }
       
`
export const Header = styled.header`
         display: flex;
         justify-content: space-evenly;
         height: 60px;
         background-color: #000;
         cursor: pointer;

         @media ${breakpoints.sm}{
            
            justify-content: center;
            height: 50px;
          }
         
         li{
          margin: 20px 20px 20px 60px;
            color: #fff;
            text-decoration: none;

            @media ${breakpoints.sm}{
            
              margin: 10px 20px 0 15px;
              text-align: center;
            
              &:nth-child(4){
                display: none;
              }

              &:nth-child(5){
                display: none;
              }

              &:nth-child(3){
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
            
            text-align: center;
            font-size: 12px;
          }
         }


         i{
          display: flex;
          align-items: center;
          justify-content: space-around;

          @media ${breakpoints.sm}{
            margin-top: 5px;
            text-align: right;
            justify-content: center;
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
            margin-top: 10px;
            flex-direction: column;
        
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
            width: 14%;
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
            margin-left: 60px;
            margin-top: -220px;
            font-size: 10px;
            text-align: center;
        
          }

`  

