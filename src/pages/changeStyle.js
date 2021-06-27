import React, { Component } from 'react';
class SwitchBtn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          degree: degree
      };
    }
    switchBorder1(){
      this.setState({border1:!this.state.border1});
      console.log(this.state);
    }
    switchBorder2(){
      this.setState({border2:!this.state.border2});
      console.log(this.state);
    }
    render() {
      var divStyle = {
        height: "5rem", width: "5rem", backgroundColor:"green", transform: {yPos}
      };
      const btnStyle1 = {
        fontSize:'30px',width: '50%',textAlign:'center',float: 'left',
        borderBottom:this.state.border1?'':'2px solid red'
      };
      const btnStyle2 = {
        fontSize:'30px',width: '50%',textAlign:'center',float: 'left',
        borderBottom:this.state.border2?'':'2px solid red'
      };
      return (            
              <div style={divStyle}>
                  <div id="LoginBtn" style={btnStyle1}  onMouseOver={this.switchBorder1.bind(this)} onMouseOut={this.switchBorder1.bind(this)}>
                      <p>登录</p>
                  </div>
                  <div id="RegisterBtn" style={btnStyle2}  onMouseOver={this.switchBorder2.bind(this)} onMouseOut={this.switchBorder2.bind(this)}>
                      <p>注册</p>
                  </div>
             </div>
      );
    }
  }
  
  export default SwitchBtn;