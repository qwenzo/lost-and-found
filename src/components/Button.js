import React from 'react';

const Button = ({text,img,borderRadius,color,fontColor}) =>{
      {/* <font color={fontColor}>{text}</font> */}
    return(
        <div  style={styles.containerStyle} className=' align-self-start d-flex'>
          <div onMouseDownCapture={
              (e)=>{
                e.currentTarget.className='p-2';
                styles.btnStyle={... styles.btnStyle,backgroundColor:'#641E16'}
              }   
          }
          onMouseUpCapture={
            (e)=>{
              e.currentTarget.className='p-2 shadow-sm';
              {styles.btnStyle={... styles.btnStyle,backgroundColor:'red'}}
            }   
          }
          style={styles.btnStyle={... styles.btnStyle,backgroundColor:color,fontColor:fontColor}} className='p-2 shadow-sm'>
          {text?<font color={fontColor}>{text}</font>:img?img:''}
          </div>
           
        </div>
    )
}

const styles = {
    btnStyle:{
        border: '1px solid #eee ',
        cursor:'pointer',
        borderRadius:'4px 4px 4px 4px',
        fontColor:'blue',
        userSelect: 'none',
        backgroundColor:''

    },
    containerStyle:{
        width:'0px'
    }
}

export default Button;