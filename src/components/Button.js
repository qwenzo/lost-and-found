import React from 'react';

const Button = ({text,img}) =>{
    return(
        <div style={styles.containerStyle} className=' align-self-start d-flex'>
          <div style={styles.btnStyle} className='p-2 shadow-sm'>
          {text?text:img?img:''}
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