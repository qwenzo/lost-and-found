import React,{Component} from 'react';
import Tag from './Tag';
class SingleItem extends Component {
    componentDidMount() {
    
          
        
      }
     render(){
         return(
             <div style={styles.containerStyle} className=" justify-content-center align-items-center ">
             <div style={styles.itemBoxStyle} className ="d-flex shadow-sm rounded">
                  <img style={styles.imageStyle} className="m-2 d-flex align-self-center" src="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg" alt="Trulli" width="650" height="500" />
                 
                  <div className="d-flex flex-column " >
                        <div style={styles.TagContainerStyle} className=" d-flex flex-wrap flex-row-reverse"> 
                            <Tag text="B1" />
                            <Tag text="Lenvo" />
                            <Tag text="Laptop" />  
                      
                        </div>
                  <div style={styles.descStyle} className ="d-flex shadow-sm rounded flex-column " >
                    <div  style={styles.BoxHeadersStyle} className ="d-flex mx-auto">DESCRIPTION</div>
                    <div className ="d-flex flex-wrap m-1 p-1">There worse by an of miles civil. Manner before lively wholly am mr indeed expect. Among every merry his yet has her. You mistress get dashwood children off. Met whose marry under the merit. In it do continual consulted no listening. Devonshire sir sex motionless travelling six themselves. So colonel as greatly shewing herself observe ashamed. Demands minutes regular ye to detract is. 

                                Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy. 
                    </div>
                  </div>
            <div className="d-flex row m-3">
                  <div style={styles.contactsStyle} className ="d-flex shadow-sm rounded flex-column m-3 col">
                  <div style={styles.BoxHeadersStyle}  className ="d-flex mx-auto p-2 align-self-center">CONTACTS</div>
                  <div className="d-flex flex-column m-2">  
                        <div >
                            FACEBOOK:/test
                        </div>
                        <div >
                            PHONE:+20011597878
                        </div>
                        <div >
                            WHATSAPP:768678678
                        </div>
                        <div >
                            123456789
                        </div>
                </div>  
                  </div>

                   <div style ={styles.detailsStyle} className ="d-flex shadow-sm rounded flex-column m-3 col">
                  <div  style={styles.BoxHeadersStyle}  className ="d-flex mx-auto p-2">Details</div>
                  <div className="d-flex flex-column m-2">
                  <div >
                     NAME:LENOVO LAPTPOP
                  </div>
                  <div >
                     LAST SEEN AT: B1
                  </div>
                  <div >
                     testy
                  </div>
                  <div >
                      z y x : lol
                  </div>
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
    }
}


export default SingleItem;