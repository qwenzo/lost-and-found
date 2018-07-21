import React,{Component} from 'react'

class ItemCard extends Component {
     render(){
         return(
             <div style ={styles.containerStyle} className = " shadow bg-white ">
                <img src="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg" alt="Trulli" width="200" height="150" />
                <div>
                    <h6>Name:Laptop Lenevo</h6>
                    <h6>Last Seen At:B1</h6>
                </div>
                <div className="d-flex align-items-end "> 
                <div style={styles.TagStyle} className = " shadow p-1 mb-5 bg-white  " >   B1   </div>
                <div style={styles.TagStyle}  className = " shadow p-1 mb-5 bg-white  " >   Laptop   </div>
                 </div>
             </div>
             
         )
     }
}

const styles = {
    containerStyle :{
        margin:'20px',
        height:'300px',
        width:'200px'
       
    },
    TagStyle :{
        marginLeft:'2px'
    }
}


export default ItemCard;