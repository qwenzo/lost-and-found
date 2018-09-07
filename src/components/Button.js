import React from 'react';
import Loading from '../assets/Rolling-1s-200px.svg'



const Button = ({text,img,borderRadius,color,fontColor,onClick,className,hasborder,style,clickable,onClickDownColor,isLoading}) =>{
/*   {hasborder? styles.btnStyle={... styles.btnStyle,border: '1px solid #eee ',borderRadius:'5px 5px 5px 5px'}:styles.btnStyle={... styles.btnStyle,border: '',borderRadius:''} }  */
  {clickable ? styles.btnStyle={... styles.btnStyle,cursor:'pointer'}:styles.btnStyle={... styles.btnStyle,cursor:' '}}
  let  colorStyle = color ? color : '';
    return(

            <div
            onClickCapture={onClick} 
            onTouchStart = {
              (e)=>{
              if(hasborder && clickable){
                e.currentTarget.className=`${className}`;
                /* styles.btnStyle={... styles.btnStyle,backgroundColor:'#CACFD2'} */
                e.currentTarget.style.backgroundColor=onClickDownColor; 
              }
                }   
            }
            onTouchEnd = {
              
              (e)=>{
                if(hasborder && clickable){
                // e.currentTarget.className=' shadow-sm';
                  e.currentTarget.style.backgroundColor=colorStyle;
                }   
              }
            } 
            onMouseDownCapture={
                (e)=>{
                  if(hasborder&& clickable){
                  e.currentTarget.className=`${className}`;
                  e.currentTarget.style.backgroundColor=onClickDownColor;
                  }
                }   
            }
            onMouseUpCapture={
              (e)=>{
                if(hasborder&& clickable){
              // e.currentTarget.className=' shadow-sm';
            
                {styles.btnStyle={... styles.btnStyle,backgroundColor:colorStyle}} 
                e.currentTarget.style.backgroundColor=colorStyle;

              }   
            }
            }
        
            style={{... styles.btnStyle,backgroundColor:color,fontColor:fontColor,...style}} className={`${className} d-flex justify-content-center`}>
            
            {isLoading ? <img style={{width:'24px',height:'24px',fill:'#FFFF'}} src={Loading} /> : 
            img ?img:
            <font face={'Lato, Calibri, Arial, sans-serif'} size='3' color={fontColor}>{text}</font>}
          </div>
    )
}

const styles = {
    btnStyle:{
      //  border: '1px solid #eee ',
        cursor:'pointer',
        userSelect: 'none',
        paddingTop: '0.5rem ',
        paddingRight: '0.7rem ',
        paddingBottom: '0.5rem ',
        paddingLeft: '0.7rem ',
        fontWeight: '700',
        fontSize:'18'
       

    },
    containerStyle:{
      float:'left',
     // overflow:'hidden'
      
    }
}

export default Button;