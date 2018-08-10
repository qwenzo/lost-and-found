import React , {Component} from 'react';

class InputField extends Component{
    state = {isInvalidViewText:false}

    render(){
        const {value,onTextChange,input,placeholder,isInvalidCond} = this.props;
        console.log(this.props.isInvalidCond);
        {(isInvalidCond) ? styles.inputStyle = {...styles.inputStyle,border:'1px solid #dc3545'}:styles.inputStyle = {...styles.inputStyle,border:'1px solid #ddd'}}
        return(
            <div className="d-flex flex-column" > 
            <input {...input||''} placeholder={placeholder||''} value={value} onChangeCapture={this.isInvalid && onTextChange}  onClickCapture={(e)=>{
                e.target.className = 'w-100 p-1'
            }} autoSave={'false'} autoComplete={'false'} type="text" style={styles.inputStyle} className={` w-100 p-1 shadow-sm  ` }    />
          {this.state.isInvalidViewText ? <span style={styles.invalidTextStyle}>testy</span>:''}
          {isInvalidCond ? <span style={styles.invalidTextStyle}>{isInvalidCond}</span>:''}
            </div>
        )
    }

    isInvalid = () =>{
        console.log('heeey');
        if(this.props.isInvalidCond){
            
        }
    }
}

const styles = {
    inputStyle:{
        outline:'none',
        borderStyle:'none',
        border: '1px solid #ddd',
        borderRadius:'4px 4px 4px 4px',
        paddingLeft:'5%',
        textIndent:'',
    },
    invalidTextStyle:{
        fontSize: '80%',
        color: '#dc3545'
    }
}

export default InputField;

