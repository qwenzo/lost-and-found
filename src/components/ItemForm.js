import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form'
class ItemForm extends Component{
    render(){
        const {handleSubmit} = this.props;
        return(
            <div>
                <form>
                    <Field label="test" name="testy" component={renderInputField}/>
                    </form>
            </div>
        );
    }

}

const renderInputField = ({input,label,meta:{touched,error}}) =>{
       return <div>
            <label>{label}</label>
            <div>
            <input {...input} placeholder={label}  />
            {touched && error ?  <span>{error}</span>:''}
            </div>
        </div>
};

const styles={
    containerStyle:{

    }
}

export default reduxForm({form:'itemForm'})(ItemForm);