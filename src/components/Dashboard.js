import React,{Component} from 'react'
import Button from './common/button/Button';
import Image from './Image';
import Carousel from './Carousel';
class Dashboard extends Component{

    render(){
        return(
            <div className="flex-row d-flex " style={styles.containerStyle}>
               <div className="p-5 shadow-sm"><Button text="TEEEEEEST"/>
               <Button text="TEEEEEEST"/>
               <Button text="TEEEEEEST"/>
               <Button text="TEEEEEEST"/>
               </div>
               <div style={styles.sectionViewStyle} className="flex-column d-flex shadow-sm">
                    <div className='shadow-sm' style={styles.itemCard}>
                    <div>
                    <Carousel width={250} paddingWidth={7.5}>
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
                </div>
                    </div>
                    <div  className='shadow-sm' style={styles.itemCard}>
                        TESTING
                    </div>
                    <div  className='shadow-sm' style={styles.itemCard}>
                        TESTING
                    </div>
               </div>
            </div>
        );
    }
}

const styles={
    containerStyle:{
        marginTop:'10%',
        marginBottom:'3%',
        marginLeft:'5%',
        marginRight:'5%', 
       
    },
    itemCard:{
        marginTop:'10%',
        marginBottom:'3%',
        marginLeft:'5%',
        marginRight:'5%', 
    },
    sectionViewStyle:{
      
    }
   

}

export default Dashboard;