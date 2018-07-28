import React from'react';

const Details = ({label,text}) =>{
    const {textStyle} = styles;
    return(
        <div className="d-flex flex-row justify-items-center p-1">
        <div style={textStyle} className="d-flex align-self-center" >{label+":"}</div >
            <div style={textStyle} className="d-flex align-self-center" >{text}</div >
        </div>
    )
}

const styles={
    textStyle: {
        fontWeight:'550'
    }
}
    ;

export default Details;