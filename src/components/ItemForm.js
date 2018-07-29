import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';

class ItemForm extends Component{

    handleSubmitting(data){
        console.log(data);
    }
    render(){
        console.log(this.props);
        const {handleSubmit} = this.props;
        const {containerStyle} =styles;
        return(
        <div className=" d-flex flex-column ">
            <div>TST</div>
            <div style={containerStyle} className="shadow-sm d-flex flex-column ">
            <form onSubmit={handleSubmit(this.handleSubmitting)} className="p-5">
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
                    <Field onChange={console.log("value")} type="text" className="" label="Name" name="name" component={renderInputField}/>
                </div>
                <div className="form-group " >
                    <Field type="email" className="" label="lol" name="lol" component={renderInputField}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
             </form>
            </div>
        </div>
        );
    }

}

const renderInputField = ({input,label,meta:{touched,error,warn}}) =>{
    console.log(input);
       return <div > 
            <label>{label}</label>
            <div >
            <input {...input} type="text"  className=" form-control" placeholder={label}   />
            {touched && error ?  <span>{error}</span>:''}
            </div>
        </div>
};

const renderChecker = ({input,label,meta:{touched,error,warn}}) =>{
    console.log(input);
    return (
        <div className="shadow-sm p-2 m-1" style={styles.lostOrFound} {...input} >I've lost an item</div>
    );
}

const validate = (values) =>{
   const errors = {};
    if(!values.Name){
        errors.Name="test";
    }

    return errors;
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

 ItemForm = connect (null,null) (ItemForm)

export default reduxForm({form:'itemForm',
validate
})(ItemForm);