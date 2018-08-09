import React , {Component} from 'react';

class InputField extends Component{

    render(){
        return(
            <div className="d-flex flex-row" > 
            <input  autoSave={'false'} autoComplete={'false'} type="text" style={styles.inputStyle} className={` w-100 p-1 shadow-sm  ` }    />
           
            </div>
        )
    }
}

const styles = {
    inputStyle:{
        outline:'none',
        borderStyle:'none',
        border: '1px solid #ddd',
        borderRadius:'5px 5px 5px 5px',
        paddingLeft:'5%',
        textIndent:'',
    }
}

export default InputField;

