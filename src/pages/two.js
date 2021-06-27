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


class Two extends React.Component{
  useEffect = (e) => {
    let element = e.target;
    console.log(element.scrollHeight, element.scrollTop);
  };

  detectScroll = (e) =>{
    var elmnt = document.getElementById("scroll_log");
    console.log(elmnt);
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
    document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
  };

  render() {
    return (
      // <div style= {height: "150vh"}>
      //     <div style= {height: "50vh", width: "100px", overflow: "auto"}>
      //         <div id="scroll_log" onScroll={this.useEffect} style="height: \"200vh\", backgroundColor: \"green\"">
      //         </div>
      //     </div>
      // </div>
      <div>
        <div style={{height: "150vh"}}>
            <div style={{height: "50vh", width: "100px", overflow: "auto"}}>
                <div id="scroll_log" onScroll={this.detectScroll} style={{height: "200vh", backgroundColor: "green"}}>
                </div>
            </div>
        </div>
        <p id="demo"></p>
      </div>
    )
  }
}

export default Two;