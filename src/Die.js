import React, { Component } from "react";
import "./Die.css";
 
const values = ['one', 'two', 'three', 'four', 'five', 'six'];
class Die extends Component {
  
  
  render() {
    const {locked, val,idx, handleClick, rolling} =this.props;
    let cnames = `fas fa-5x fa-dice-${values[val-1]}`
    if (locked){cnames += " Die-locked"}
    else if (rolling){cnames += ' Die-rolling'}
    return (
      <button
        className={"Die"}
        onClick={() => handleClick(idx)}
      >
        <i className= {cnames} />
      </button>
    );
  }
}

export default Die;
