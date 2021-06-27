import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

/**
 * 
 * Question Three
 * 
 * We have the same useEffect as the last question expect now I'd like you to rotate the square (div with id square) based on the window scroll. 
 * 
 * As you scroll down the window, the div should rotate
 * 
 */

// For transformation
function Transform(){
  const yPos = window.pageYOffset;
  const Element = (
    <div id="square" style={{height: "5rem", width: "5rem", backgroundColor:"green", transform: {yPos}}} />
  );
  ReactDOM.render(Element, document.getElementById('square'));
  console.log("Transformed!");
}

const Three = () => {
    useEffect(() => {
        const onScroll = (e) => {
          const yPos = window.pageYOffset;
          console.log(yPos)
          Transform();
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);;
      }, []);

  return (
    <div style={{height: "200vh"}}>
      <div style={{height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div id="square" style={{height: "5rem", width: "5rem", backgroundColor: "green", transform: "rotate(0deg)"}} />
      </div>
    </div>
  );
}

export default Three;