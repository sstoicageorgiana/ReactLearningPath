

import React, { useState, useEffect, Component} from 'react';
import CartItem from './CartItem';
import CartProduct from './CartProduct';


class Cart extends Component { //cc

    state = {
        products :[
            {id:1,
            name : "iphone 13", 
            imgURL : "https://th.bing.com/th/id/R.3b21a23bd075f6709f648b8525c58825?rik=VRJablr5uQGp1w&pid=ImgRaw&r=0"},
            {id:2,
            name : "Motorola V3",
            imgURL : "https://th.bing.com/th/id/R.3b21a23bd075f6709f648b8525c58825?rik=VRJablr5uQGp1w&pid=ImgRaw&r=0"},
            {id:3,
            name : "Siemens A50",
            imgURL : "https://th.bing.com/th/id/R.3b21a23bd075f6709f648b8525c58825?rik=VRJablr5uQGp1w&pid=ImgRaw&r=0"},
            {id:4,
            name : "Nokia 3310", 
            imgURL : "https://th.bing.com/th/id/R.3b21a23bd075f6709f648b8525c58825?rik=VRJablr5uQGp1w&pid=ImgRaw&r=0" },
        ]

    }
    // products =[
    //     {id:1,
    //     name : "iphone 13", 
    //     imgURL : "https://th.bing.com/th/id/R.3b21a23bd075f6709f648b8525c58825?rik=VRJablr5uQGp1w&pid=ImgRaw&r=0"},
    //     {id:2,
    //     name : "Motorola V3",
    //     imgURL : "https://th.bing.com/th/id/R.3b21a23bd075f6709f648b8525c58825?rik=VRJablr5uQGp1w&pid=ImgRaw&r=0"},
    //     {id:3,
    //     name : "Siemens A50",
    //     imgURL : "https://th.bing.com/th/id/R.3b21a23bd075f6709f648b8525c58825?rik=VRJablr5uQGp1w&pid=ImgRaw&r=0"},
    //     {id:4,
    //     name : "Nokia 3310", 
    //     imgURL : "https://th.bing.com/th/id/R.3b21a23bd075f6709f648b8525c58825?rik=VRJablr5uQGp1w&pid=ImgRaw&r=0" },
    // ]
    handleDelete = (productId) =>{
        console.log("handleDelete");
     console.log("productId:", productId);
     //filter
     const filteredProducts = this.state.products.filter(product=> productId != product.id);
    //  this.products =  [...filteredProducts];
    // this.setState(this.state.products , [...filteredProducts]);
    this.setState({products:filteredProducts});

    }

    render() { 
        return (
            <div> 

                {this.state.products.map((product) => 
                                  <CartItem key={product.id} onDelete={ ()=> this.handleDelete(product.id)}>
                                        <CartProduct name={product.name} imgURL={product.imgURL}/>
                                  </CartItem>)
                }
                
                {/* 2 */}
                {/* {
                    this.products.map((product) => <CartItem  key={product.id} productName ={product.name}/> )
                }

                <CartItem>
                    <CartProduct name={this.products[0].name} imgURL={this.products[0].imgURL}/>
                </CartItem> */}
                

                {/* 1 */}
                {/* <CartItem productName = {"iphone 13"}/> */}
                {/* <CartItem productName = {"Motorola V3"}/>
                <CartItem productName = {"Siemens A50"}/>
                <CartItem productName = {"Nokia 3310"}/> */}
            </div>
        );
    }
}

// cand am=> list cu map => in spate are un algoritm prin care updateaza doar ce s-a modificat
//                       => recat face optimizari si update pe baza "key" unic, daca scot key={product.id} din map o sa dea eroare
 
export default Cart;