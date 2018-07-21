import React,{Component} from 'react'
import Tag from '../Tag'
class ItemCard extends Component {
     render(){
         return(
             <div style ={styles.containerStyle} className = " shadow bg-white ">
                <img src="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg" alt="Trulli" width="250" height="200" />
                <div>
                    <h6>Name:Laptop Lenevo</h6>
                    <h6>Last Seen At:B1</h6>
                    
                </div>
                <div style={styles.TagContainerStyle} className="d-flex "> 
                  <Tag text="B1" />
                  <Tag text="Lenvo" />
                  <Tag text="Laptop" />  
                      
                 </div>
                 <div className="d-flex flex-row align-items-end shadow-lg bg-white  justify-content-center">
                    <div className="  p-2 ">More Details</div>
                    <div ></div>
                     <div className="  p-2 " >REPORT</div>
            </div>
             </div>
             
         )
     }
}

const styles = {
    containerStyle :{
        margin:'20px',
      
       
    },
    TagContainerStyle :{
        width: 'calc(100% * (1/4) - 10px - 1px)'
    }
}


export default ItemCard;