import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'

/**
 * 
 * Question Two
 * 
 * I've included a useEffect hook which monitors the current scroll position of the window and prints it out
 * 
 * Please modify the code so rather than logging the current scroll position of the window, it logs the scroll position of the div with id "scroll_log"
 * 
 */


 const Two = () => {

  useEffect(() => {
      const onScroll = (e) => {
        const yPos = window.pageYOffset;
        console.log(yPos)
      };

      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);;
    }, []);

return (
  <div style={{height: "150vh"}}>
      <div style={{height: "50vh", width: "100px", overflow: "auto"}}>
          <div id="scroll_log" style={{height: "200vh", backgroundColor: "green"}}>
          </div>
      </div>
  </div>
);
}

export default Two;