import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form'
class ItemForm extends Component{
    render(){
        const {handleSubmit} = this.props;
        const {containerStyle} =styles;
        return(
            <div style={containerStyle} className="align-items-center shadow-sm d-flex flex-column ">
                <form className="p-1">
                <div className="form-group d-flex">
                    <Field label="Name" name="testy" component={renderInputField}/>
                </div>
                    </form>
            </div>
        );
    }

}

const renderInputField = ({input,label,meta:{touched,error}}) =>{
       return <div>
            <label>{label}</label>
            <div>
            <input className="form-control input-lg" {...input} placeholder={label}  />
            {touched && error ?  <span>{error}</span>:''}
            </div>
        </div>
};

const styles={
    containerStyle:{
        border: '1px solid #eee',
        marginLeft:'25%',
        marginRight:'25%',
        marginTop:'3%'
    }
}

export default reduxForm({form:'itemForm'})(ItemForm);