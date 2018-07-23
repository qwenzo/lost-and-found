import React,{Component} from 'react';

class SingleItem extends Component {
    componentDidMount() {
    
          
        
      }
     render(){
         return(
             <div style={styles.containerStyle} className=" justify-content-center align-items-center ">
             <div style={styles.itemBoxStyle} className ="d-flex shadow-lg rounded">
                  <img className="m-2" src="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg" alt="Trulli" width="650" height="500" />
                  <div className="d-flex flex-column m-5" >
                  <div className ="d-flex shadow-sm rounded flex-column m-4 mx-auto" >
                    <div className ="d-flex  mx-auto">DESCRIPTION</div>
                    <div className ="d-flex flex-wrap m-1">There worse by an of miles civil. Manner before lively wholly am mr indeed expect. Among every merry his yet has her. You mistress get dashwood children off. Met whose marry under the merit. In it do continual consulted no listening. Devonshire sir sex motionless travelling six themselves. So colonel as greatly shewing herself observe ashamed. Demands minutes regular ye to detract is. 

                                Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy. 
                    </div>
                  </div>
            <div className="d-flex flex-row m-3">
                  <div className ="d-flex shadow-sm rounded flex-column m-3 ">
                  <div  className ="d-flex mx-auto p-2">CONTACTS</div>
                  <div >
                      123456789
                  </div>
                  <div >
                      123456789
                  </div>
                  <div >
                      123456789
                  </div>
                  <div >
                      123456789
                  </div>
                  </div>

                   <div className ="d-flex shadow-sm rounded flex-column m-3 ">
                  <div  className ="d-flex mx-auto p-2">Details</div>
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
         )
     }
}

const styles = {
    containerStyle :{
       backgroundColor:"#F2F3F4"
    },
    itemBoxStyle:{
        backgroundColor:"#FFFFFF",
        marginTop:"8%",
        marginLeft:"5%",
        marginRight:"5%"
    },
    contactsStyle:{
        paddingLeft:"5%",
        paddingRight:"5%"
    }
}


export default SingleItem;