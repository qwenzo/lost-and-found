import React from 'react';

const Button = ({text,img,borderRadius,color,fontColor,onClick,className,hasborder}) =>{
    {hasborder? styles.btnStyle={... styles.btnStyle,border: '1px solid #eee '}:'' }
    return(
        <div className={className}>
        <div onClickCapture={onClick}  style={styles.containerStyle} className={` align-self-start d-flex flex-wrap`}>
          <div
          onTouchStart = {
            (e)=>{
                e.currentTarget.className='';
                styles.btnStyle={... styles.btnStyle,backgroundColor:'#CACFD2'}
                e.currentTarget.style.backgroundColor='#CACFD2';}   
          }
          onTouchEnd = {
            (e)=>{
               // e.currentTarget.className=' shadow-sm';
                {styles.btnStyle={... styles.btnStyle,backgroundColor:'red'}}
                e.currentTarget.style.backgroundColor='';
              }   
          }
           onMouseDownCapture={
              (e)=>{
                e.currentTarget.className='';
                styles.btnStyle={... styles.btnStyle,backgroundColor:'#CACFD2'}
                e.currentTarget.style.backgroundColor='#CACFD2';}   
          }
          onMouseUpCapture={
            (e)=>{
             // e.currentTarget.className=' shadow-sm';
              {styles.btnStyle={... styles.btnStyle,backgroundColor:'red'}}
              e.currentTarget.style.backgroundColor='';
            }   
          }
         
          style={styles.btnStyle={... styles.btnStyle,backgroundColor:color,fontColor:fontColor}} className=' '>
          {text?<font face={'Lato, Calibri, Arial, sans-serif'} size='3' color={fontColor}>{text}</font>:img?img:''}
          </div>
           
        </div>
        </div>
    )
}

const styles = {
    btnStyle:{
      //  border: '1px solid #eee ',
        cursor:'pointer',
        borderRadius:'5px 5px 5px 5px',
        fontColor:'blue',
        userSelect: 'none',
        backgroundColor:'',
        paddingTop: '0.5rem ',
        paddingRight: '0.7rem ',
        paddingBottom: '0.5rem ',
        paddingLeft: '0.7rem ',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize:'18'
       

    },
    containerStyle:{
      float:'left',
     // overflow:'hidden'
      
    }
}

export default Button;