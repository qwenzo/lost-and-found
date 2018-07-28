import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form'

class ItemForm extends Component{
    render(){
        console.log(this.props);
        const {handleSubmit} = this.props;
        const {containerStyle} =styles;
        return(
        <div className=" d-flex flex-column ">
            <div>TST</div>
            <div style={containerStyle} className="shadow-sm d-flex flex-column ">
            <form className="p-5">
            <div className="align-items-center d-flex flex-row justify-content-center">
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
            />{' '}
            <Field
              name="sex"
              component={renderChecker}
              type="radio"
              value="lost"
            />{' '} 
                <div className=" shadow-sm p-2 m-1" style={styles.lostOrFound} >I want to register an item</div>
            </div>    
                <div className="form-group " >
                    <Field className="" label="Name" name="testy" component={renderInputField}/>
                </div>
                <div className="form-group " >
                    <Field className="" label="lol" name="testy1" component={renderInputField}/>
                </div>
             </form>
            </div>
        </div>
        );
    }

}

const renderInputField = ({input,label,meta:{touched,error}}) =>{
       return <div > 
            <label>{label}</label>
            <div >
            <input type="text"  className=" form-control  " {...input} placeholder={label}  />
            {touched && error ?  <span>{error}</span>:''}
            </div>
        </div>
};

const renderChecker = () =>{
    return (
        <div className="shadow-sm p-2 m-1" style={styles.lostOrFound}>I've lost an item</div>
    );
}

const styles={
    containerStyle:{
        border: '1px solid #eee',
        marginLeft:'25%',
        marginRight:'25%',
        marginTop:'3%'
    },
    inputStyle:{
        flex:1
    },
    lostOrFound:{
        border: '1px solid #eee',
    }
}

export default reduxForm({form:'itemForm'})(ItemForm);