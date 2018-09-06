import React,{Component} from 'react';
import closeBtn from '../assets/Orion_close.png'

class Tag extends Component {
    state={view:true}
    render(){
        return(
           this.state.view ? <div style={styles.TagStyle} className = "m-1 shadow-sm p-1  bg-white  "> {this.props.text} 
            {this.props.deletable ? <img onClickCapture={()=>{this.setState({view:false})}} width='16px' height='16px' src={closeBtn}></img>:''} </div>:null
        );
    }
}

const styles = {
    TagStyle :{
        marginLeft:'2px',
        border: '1px solid #eee',
        borderRadius:'10px',
        fontFamily: 'Lato, Calibri, Arial, sans-serif',
        userSelect: 'none',
        fontWeight:'600',
        height:'32px',

    }
}

export default Tag;