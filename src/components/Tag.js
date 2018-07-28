import React from 'react';

const Tag = (props) =>{
    return(
        <div style={styles.TagStyle} className = "m-1 shadow-sm p-1 mb-5 bg-white  "> {props.text} </div>
    );
}

const styles = {
    TagStyle :{
        marginLeft:'2px',
        border: '1px solid #eee'
    }
}

export default Tag;