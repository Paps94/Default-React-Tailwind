import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Title</h1>
         <p className="text-3xl md:text-4xl mb-3 font-medium">Subtitle</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            Description here
         </p>
      </div>
   )
}

export default Intro;