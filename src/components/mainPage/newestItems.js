import React,{Component} from 'react';
import ItemCard from './itemCard';

class NewestItems extends Component {
    componentDidMount() {
        //  window.addEventListener('resize', this.resizeScreen.bind(this));
       const clientHeighth=document.documentElement.clientHeight;
          if(clientHeighth<900) {
          //  document.getElementById("itemsContainer").classList-="flex-column";
            //  document.getElementById("itemsContainer").classList+="flex-row";
          }
          else{
            // document.getElementById("itemsContainer").classList+="flex-column";
          }
          
        
      }
     render(){
         return(
             <div className = "d-flex justify-content-center">
             <div  style={styles.containerStyle} className = " shadow-lg bg-white rounded ">
             <h5 className = "d-flex justify-content-center"> last 5 items </h5>
             <div id="itemsContainer" className=" d-flex"> <ItemCard />
             <ItemCard /> <ItemCard /> <ItemCard /> <ItemCard />
             </div>
             </div>
             </div>
         )
     }
}

const styles = {
    containerStyle :{
       
    },
}


export default NewestItems;