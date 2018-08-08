import React from 'react';

const Button = ({text}) =>{
    return(
        <div style={styles.containerStyle} className=' align-self-start d-flex'>
          <div style={styles.btnStyle} className='p-2 shadow-sm'>
          {text}
          </div>
           
        </div>
    )
}

const styles = {
    btnStyle:{
        border: '1px solid #eee ',
        cursor:'pointer'

    },
    containerStyle:{
        width:'0px'
    }
}

export default Button;