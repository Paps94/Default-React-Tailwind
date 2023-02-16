import { useContext } from "react";
import { StylingContext } from "../contexts/StylingContext";


const Main = (props) => {
   const {click} = useContext(StylingContext);

   return (
      <div className={click ? "fixed left-[380px] right-8 top-8 bottom-8 rounded-md shadow-main transition-all duration-500 bg-gradient-to-r from-[#FFAFBD] to-[#FFC3A0] dark:bg-gradient-to-r dark:from-[#414141] dark:to-[#121212]" : "fixed left-8 right-8 top-8 bottom-8 rounded-md shadow-main transition-all duration-500 bg-gradient-to-r from-[#FFAFBD] to-[#FFC3A0] dark:bg-gradient-to-r dark:from-[#414141] dark:to-[#121212]"}>
         {props.children}
      </div>
   )
}

export default Main;