import React, { Component } from 'react';


export default class TestBtn extends Component {
  clickedBtn() {
    alert('The Button was clicked!');
  }
  render(){
    return(
      <button onClick={this.clickedBtn}>Our First Test</button>
    )
  }
}