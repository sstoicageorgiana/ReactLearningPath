import React, { Component } from 'react';

class CartItem extends Component {
    state ={ count :0 };

    styles ={ 
        fontSize:18,
    };

    handleIncrement = () => {
        this.setState({count : this.state.count + 1});
    };

    handleDecrement = () => {
        if (this.state.count>0) 
            this.setState({count : this.state.count - 1 });
        };

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render() { 
        return (
            <div>
            
             {/* <span>{this.props.productName}</span>
             <span>{this.props.imgURL}</span> */}
            {this.props.children}
             <br/>
             <span> test 13</span>
             <button onClick={this.handleDecrement} className="btn btn-dark btn-sm"> - </button>
             <span className={this.getCounterClass()}> {this.state.count}</span>
             <button onClick={this.handleIncrement} className="btn btn-dark btn-sm">  +  </button>
             <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">  Raising Event - Delete  </button>
            </div>
        );
    }
    getCounterClass() {
        let classes = 'badge m-2 bg-';
        const { count } = this.state;
        classes += count === 0 ? 'warning' : 'info';
        return classes;
    }
        
}
 
export default CartItem;