import React , {Component} from 'react';

class InputField extends Component{
    state = {isInvalidViewText:false}

    render(){
        const {value,onTextChange,input,placeholder,isInvalidCond, height,row,element,className,style} = this.props;
        {(height) ? styles.inputStyle = {...styles.inputStyle,height:height}:styles.inputStyle = {...styles.inputStyle,height:'30px'}}
        {(isInvalidCond) ? styles.inputStyle = {...styles.inputStyle,border:'1px solid #dc3545'}:''/* styles.inputStyle = {...styles.inputStyle,border:'1px solid #ddd'} */}
        return(
            <div style={style} className={`d-flex flex-column ${className}`} > 
            <div  className={`d-flex ${row} `}>
            <input {...input||''} placeholder={placeholder||''} value={value} onChangeCapture={ onTextChange} onPointerCancel={()=>{console.log('test')}}  /* onClickCapture={(e)=>{
                e.target.className = 'w-100 p-1'
            }} */ autoSave={'false'} autoComplete={'false'} type="text" style={styles.inputStyle} className={`align-self-stretch w-100 d-flex  `}    />
            <div style={{/* zIndex:'5',position:'absolute', */}} className="d-flex ">{element}</div>
            </div>
          {this.state.isInvalidViewText ? <span style={styles.invalidTextStyle}>testy</span>:''}
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
        paddingLeft:'5px'
    },
    invalidTextStyle:{
        fontSize: '80%',
        color: '#dc3545'
    }
}

export default InputField;

