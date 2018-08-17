import React , {Component} from 'react';
import InputField from './InputField';
import Button from './Button';

class LogIn extends Component{
    state={username:'',password:''}
    render() {
        const {containerStyle,emailNoteStyle,emailContainerStyle,passwordContainerStyle} = style;
        return(
            <div style={containerStyle} className=" shadow-sm">
                <div style={emailContainerStyle}  className="shadow-sm">
                <InputField row={'row-reverse'} element={ <Button style={emailNoteStyle} className='d-flex'  text='@student.guc.edu.eg'/>
         } row='flex-row-reverse' height='40px'  type="text" className="d-flex " placeholder="Email"  /> 
         
                </div>
                <div style={passwordContainerStyle} className="shadow-sm">
                <InputField height='40px'  type="text" className="d-flex " placeholder="Password"  /> 
         
                </div>
            </div>
        )
    }
      
    
}

const style={
    containerStyle:{
        border: '1px solid #ddd',
        marginTop:'10%',
        marginBottom:'3%',
        marginLeft:'35%',
        marginRight:'35%',
        borderRadius:'5px 5px 5px 5px',
        padding:'2%'
    },
    emailNoteStyle:{
        borderLeft: '1px solid #ddd',
    },
    emailContainerStyle:{
      //  marginTop:'10%'
    },
    passwordContainerStyle:{
        marginTop:'8%'

    }
}

export default LogIn;
