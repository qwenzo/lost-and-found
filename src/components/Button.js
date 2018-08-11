import React from 'react';

const Button = ({text,img,borderRadius,color,fontColor,onClick,className}) =>{
    return(
        <div className={className}>
        <div onClickCapture={onClick}  style={styles.containerStyle} className={` align-self-start d-flex`}>
          <div onMouseDownCapture={
              (e)=>{
                e.currentTarget.className='';
                styles.btnStyle={... styles.btnStyle,backgroundColor:'#CACFD2'}
                e.currentTarget.style.backgroundColor='#CACFD2';}   
          }
          onMouseUpCapture={
            (e)=>{
              e.currentTarget.className=' shadow-sm';
              {styles.btnStyle={... styles.btnStyle,backgroundColor:'red'}}
              e.currentTarget.style.backgroundColor='';
            }   
          }
          style={styles.btnStyle={... styles.btnStyle,backgroundColor:color,fontColor:fontColor}} className=' shadow-sm'>
          {text?<font color={fontColor}>{text}</font>:img?img:''}
          </div>
           
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
        backgroundColor:'',
        paddingTop: '0.5rem ',
        paddingRight: '0.7rem ',
        paddingBottom: '0.5rem ',
        paddingLeft: '0.7rem '

    },
    containerStyle:{
        width:'0px'
    }
}

export default Button;