import React , {Component} from 'react';
import './newitem.style.css'
import Image from '../Image';
import Carousel from '../Carousel';

class NewItem extends Component{
    render(){
        return(
            <div className="d-flex flex-row itemContainer">
             <Carousel className="carouselStyle"  width={250} >
                <Image width="250px"
                   className="" source="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"
                    alt="Trulli" />
                   
                <Image width="250px"
                   className="" source="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"
                    alt="Trulli"  />
                   
            </Carousel> 
            <span className="name">LENOVO </span>
            </div>
        )
    }
}

export default NewItem;

