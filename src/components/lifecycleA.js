import React from 'react';

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={qty:0}
    }
    updateQty =()=>{
        this.setState({qty:this.state.qty+1})
    }
    componentDidMount(){
        console.log('Excuted after render')
    }
    componentDidUpdate(prevProps, prevState){
        console.log('component updated')
    }
   render(){
       return(
          <div>
              <p>CartItems{this.state.qty}</p>
              <button onClick={this.updateQty}>updateQty</button>
          </div> 
       )
   }
}
export default Product;