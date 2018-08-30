import React from 'react';

const Tag = (props) =>{
    //add margin mb-5
    return(
        <div style={styles.TagStyle} className = "m-1 shadow-sm p-1  bg-white  "> {props.text} </div>
    );
}

const styles = {
    TagStyle :{
        marginLeft:'2px',
        border: '1px solid #eee',
        borderRadius:'3px',
        fontFamily: 'Lato, Calibri, Arial, sans-serif',
        userSelect: 'none',
        fontWeight:'500'

    }
}

export default Tag;