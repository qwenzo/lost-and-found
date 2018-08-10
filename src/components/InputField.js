import React , {Component} from 'react';

class InputField extends Component{

    render(){
        const {value,onTextChange,input,placeholder} = this.props;
        return(
            <div className="d-flex flex-row" > 
            <input {...input||''} placeholder={placeholder||''} value={value} onChangeCapture={onTextChange} onClickCapture={(e)=>{
                e.target.className = 'w-100 p-1'
            }} autoSave={'false'} autoComplete={'false'} type="text" style={styles.inputStyle} className={` w-100 p-1 shadow-sm  ` }    />
           
            </div>
        )
    }
}

const styles = {
    inputStyle:{
        outline:'none',
        borderStyle:'none',
        border: '1px solid #ddd',
        borderRadius:'2px 2px 2px 2px',
        paddingLeft:'5%',
        textIndent:'',
    }
}

export default InputField;

