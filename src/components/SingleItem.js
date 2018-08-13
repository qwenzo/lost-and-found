import React,{Component} from 'react';
import Tag from './Tag';
import facebookLogo from '../assets/download-icon-vector-eps-ai-seeklogo-facebook-icon-vector.png';
import whatsAppLogo from '../assets/WAlogo.png';
import imagesIcon from '../assets/photos2-512.png';
import Contact from './Contact';
import Details from './Details';
import { Carousel } from 'react-responsive-carousel';
import  'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from './Image';



class SingleItem extends Component {
    componentDidMount() {
    
          
        
      }
     render(){
         return(
             
             <div style={styles.containerStyle} className=" justify-content-center align-items-center ">
             <div style={styles.itemBoxStyle} className ="d-flex shadow-sm rounded ">
                <div className="m-2 d-flex flex-row-reverse">
                {//<div className="d-flex align-self-end rounded flex-wrap" style ={styles.NumberOfImagesStyle}> 3 
                 // <img src={imagesIcon} height="24" width="24" />
                // </div>
            }
           { /*  <Image  width={'650px'} images={["http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg","http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"]} />  */}
               {/*  <Carousel width={650}  showArrows={true} showThumbs={false}>
                <div>
                <img style={styles.imageStyle}
                   className="" src="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"
                    alt="Trulli" width="650" height="500" />
                   
                </div>
                <div>
                <img style={styles.imageStyle}
                   className="" src="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"
                    alt="Trulli" width="650" height="500" />
                   
                </div>
            </Carousel> */}
             {  <Carousel width={650}  showArrows={true} showThumbs={false}>
                <div>
                <Image style={styles.imageStyle}
                   className="" source="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"
                    alt="Trulli" width="650" height="500" />
                   
                </div>
                <div>
                <Image style={styles.imageStyle}
                   className="" source="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"
                    alt="Trulli" width="650" height="500" />
                   
                </div>
            </Carousel> }

                  
                  </div>
                  <div className="d-flex flex-column " >
                        <div style={styles.TagContainerStyle} className=" d-flex flex-wrap flex-row-reverse"> 
                            <Tag text="B1" />
                            <Tag text="Lenvo" />
                            <Tag text="Laptop" />  
                      
                        </div>
                  <div style={styles.descStyle} className ="d-flex shadow-sm rounded flex-column " >
                    <div  style={styles.BoxHeadersStyle} className ="d-flex mx-auto p-2">DESCRIPTION</div>
                    <div className ="d-flex flex-wrap m-1 p-1">There worse by an of miles civil. Manner before lively wholly am mr indeed expect. Among every merry his yet has her. You mistress get dashwood children off. Met whose marry under the merit. In it do continual consulted no listening. Devonshire sir sex motionless travelling six themselves. So colonel as greatly shewing herself observe ashamed. Demands minutes regular ye to detract is. 

                                Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy. 
                    </div>
                  </div>
            <div className="d-flex row m-3">
                  <div style={styles.contactsStyle} className ="d-flex shadow-sm rounded flex-column m-3 col">
                  <div style={styles.BoxHeadersStyle}  className ="d-flex mx-auto p-2 align-self-center">CONTACTS</div>
                  <div className="d-flex flex-column m-2">  
                        <Contact image={facebookLogo} text="/test" />
                        <Contact image={whatsAppLogo} text="+200157567567" />
                        <Contact  text="+200157567567" />
                </div>  
                  </div>

                   <div style ={styles.detailsStyle} className ="d-flex shadow-sm rounded flex-column m-3 col">
                  <div  style={styles.BoxHeadersStyle}  className ="d-flex mx-auto p-2">Details</div>
                  <div className="d-flex flex-column m-2">
                 <Details text="Lenovo Laptop" label="Name" />
                 <Details text="B1" label="Last Seen At" />
                 <Details text="test" label="xyz" />
                  </div>
                  </div>
                  </div>
            </div>
             </div>
             </div>
         )
     }
}

const styles = {
    containerStyle :{
     //  backgroundColor:"#F2F3F4",
       
    },
    imageStyle:{
        flex:'1'
    },
    itemBoxStyle:{
        backgroundColor:"#FFFFFF",
        marginTop:"8%",
        marginLeft:"5%",
        marginRight:"5%",
        border: '2px solid #eee'
    },
    contactsStyle:{
        border: '1px solid #eee'
    },
    detailsStyle:{
        border: '1px solid #eee'  
    },
    TagsContainerStyle:{
      margin:'50px'
    },
    BoxHeadersStyle:{
     fontWeight:'600'
    },
    descStyle:{
        marginLeft:'5%',
        marginRight:'5%',
        border: '1px solid #eee'
    },
    NumberOfImagesStyle :{
        position: 'absolute',
        zIndex:'1000 ',
        backgroundColor:"#FFFFFF",
        border: '1px solid #eee',
        marginBottom:'5%'
      
    }
}


export default SingleItem;