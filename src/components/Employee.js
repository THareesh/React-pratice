import React from 'react'

class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            obj:[
                {
                   name: 'Harish',
                   age: "25"
                },
                {
                   name: 'yuva...',
                   age:"24"
                },
                {
                   name: 'gopi...',
                   age: "23"
                }
             ]
          }
        }
    
     render(){
         return(
            <div>
                {
                   this.state.obj.map((item,i)=>{
                       return (<div key ={i}>
                           <div>
                             <span>name:{item.name}</span>
                             </div>
                             <div>
                             <span>age:{item.age}</span>
                                 </div>
                       </div>)
                   }) 
                }
            </div>
         )
     }
}
export default Employee