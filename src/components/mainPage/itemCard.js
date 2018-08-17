import React,{Component} from 'react'
import Tag from '../Tag'
import Image from '../Image'
import { Carousel } from 'react-responsive-carousel';
class ItemCard extends Component {
     render(){
         return(
             <div style ={styles.containerStyle} className = "shadow-sm  ">
                  <Carousel width={'250px'} height={'200px'} showArrows={true} showThumbs={false}>
                <div>
                <Image style={styles.imageStyle}
                   className="" source="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"
                    alt="Trulli" width="250" height="200" />
                   
                </div>
                <div>
                <Image style={styles.imageStyle}
                   className="" source="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"
                    alt="Trulli" width="250" height="200" />
                   
                </div>
            </Carousel> 
                <div>
                    <h6>Name:Laptop Lenevo</h6>
                    <h6>Last Seen At:B1</h6>
                    
                </div>
                <div style={styles.TagContainerStyle} className="d-flex  flex-wrap flex-row"> 
                  <Tag text="B1" />
                  <Tag text="Lenvo" />
                  <Tag text="Laptop" />  
                      
                 </div>
                 <div className="d-flex flex-row align-items-end  bg-white  justify-content-center">
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
        border: '1px solid #ddd'
      
       
    },
    TagContainerStyle :{
       marginRigh:'5px'
    }
}


export default ItemCard;