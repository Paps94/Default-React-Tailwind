import { useContext } from "react";
import { StylingContext } from "../context/StylingContext";

const Main = (props) => {
   const { navbar } = useContext(StylingContext);

   return (
      <div className={
         navbar 
         ? " fixed left-[24rem] right-[9rem] top-8 bottom-8 p-10 rounded-md shadow-main transition-all duration-500 bg-gradient-to-r from-[#FFAFBD] to-[#FFC3A0] dark:bg-gradient-to-r dark:from-[#414141] dark:to-[#121212]" 
         : " fixed left-[9rem] right-[9rem] top-8 bottom-8 p-10 rounded-md shadow-main transition-all duration-500 bg-gradient-to-r from-[#FFAFBD] to-[#FFC3A0] dark:bg-gradient-to-r dark:from-[#414141] dark:to-[#121212]"
      }>
         {props.children}
      </div>
   )
}

export default Main;