import React from'react';

const Contact = ({image,text}) =>{
    const {textStyle} = styles;
    return(
        <div className="d-flex flex-row justify-items-center">
            <img height='40'width='40' src={image} />
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

export default Contact;