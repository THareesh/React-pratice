import React from 'react'


export default class HelloWorld extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message:this.props.message
        }
    }
    render(){
        return (
             <div>
                 <h1>{this.state.message}</h1>
                 <input type = "text" value="Hello"/>
                
         </div>
        )
    }
}


HelloWorld.defaultProps ={
    message:"welcome to Hyderabad"
}
