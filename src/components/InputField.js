import React , {Component} from 'react';

class InputField extends Component{
    state = {isInvalidViewText:false}

    render(){
        const {value,onTextChange,input,placeholder,isInvalidCond, height,row,element,className,style,invalidText,width} = this.props;
        const heightCond = height? {height:height} : {height:'30px'}
        const isInvalidProps  = isInvalidCond ? {border:'1px solid #dc3545'} : {border:''}
        return(
            <div /* className="d-flex flex-wrap" */   style={{width:"100%"}}    >
                    <div style={styles.inputContainerStyle={...styles.inputContainerStyle,...isInvalidProps,...style}} className={`d-flex ${row} ${className} `}>
                        <input  onFocusCapture={()=> console.log('work')} {...input||''} placeholder={placeholder||''} value={value}  
                        onChangeCapture={ onTextChange} 
                        onPointerCancel={()=>{console.log('test')}}  
                        autoSave={'false'} autoComplete={'false'} type="text" style={styles.inputStyle={...styles.inputStyle,...heightCond}} className={`  `} />
                        {element }
                        {/* <div>lolol</div> */}
                    </div>
          {isInvalidCond && invalidText ? <span style={styles.invalidTextStyle}>{invalidText}</span>:''}
          {isInvalidCond ? <span style={styles.invalidTextStyle}>{isInvalidCond}</span>:''}
            </div>
        )
    }

   
}

const styles = {
    inputStyle:{
        outline:'none',
        borderStyle:'none',
      /*   borderLeft: '1px solid #ddd',
        borderTop: '1px solid #ddd',
        borderBottom: '1px solid #ddd', */
       // borderRadius:'4px 4px 4px 4px',
        textIndent:'',
        height:'30px',
        paddingLeft:'5px',
        width:'100%'
    },
    invalidTextStyle:{
        fontSize: '80%',
        color: '#dc3545'
    },
    inputContainerStyle:{

    }
}

export default InputField;

