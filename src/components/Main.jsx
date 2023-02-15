import React from 'react';

const Main = (props) => {
   return (
      <div className='fixed left-[380px] right-8 top-8 bottom-8 rounded-md shadow-main bg-gradient-to-r from-[#FFAFBD] to-[#FFC3A0] dark:bg-gradient-to-r dark:from-[#414141] dark:to-[#121212]'>
         {props.children}
      </div>
   )
}

export default Main;