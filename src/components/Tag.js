import React from 'react';

const Tag = (props) =>{
    return(
        <div style={styles.TagStyle} className = " shadow p-1 mb-5 bg-white rounded "> {props.text} </div>
    );
}

const styles = {
    TagStyle :{
        marginLeft:'2px'
    }
}

export default Tag;