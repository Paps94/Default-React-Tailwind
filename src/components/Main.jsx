import { useContext } from "react";
import { StylingContext } from "../context/StylingContext";

const Main = (props) => {
   const { navbar } = useContext(StylingContext);

   let left = 'left-[24rem]';
   if (!navbar) {
      left = 'left-[9rem]';
   }

   return (
      <div className={
         navbar 
         ? " fixed " + left + " right-[9rem] top-8 bottom-8 rounded-md shadow-main transition-all duration-500 bg-gradient-to-r from-[#FFAFBD] to-[#FFC3A0] dark:bg-gradient-to-r dark:from-[#414141] dark:to-[#121212]" 
         : " fixed " + left + " right-[9rem] top-8 bottom-8 rounded-md shadow-main transition-all duration-500 bg-gradient-to-r from-[#FFAFBD] to-[#FFC3A0] dark:bg-gradient-to-r dark:from-[#414141] dark:to-[#121212]"
      }>
         {props.children}
      </div>
   )
}

export default Main;