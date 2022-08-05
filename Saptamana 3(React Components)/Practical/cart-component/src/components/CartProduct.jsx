
import React, { Component } from 'react';


class CartProduct extends Component {
 
    render() { 
        return (
            
            <>
            
            <span>{this.props.name}</span>
            <img src={this.props.imgURL} style={{width:50, height:50}}/>
          
            </>
        );
    }
}
 
export default CartProduct;