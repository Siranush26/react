import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div className="slide">
         {this.props.products.map((item,index)=>{
            return (
            
            <div className="design">
            <h2 className="h2_center">{item.name}</h2>
            <img src={item.img} alt="new"/>
            <h3 style={{textAlign:"center"}}>{item.price}</h3>
            </div>
            );
         })}
      </div>
    )
  }
}
