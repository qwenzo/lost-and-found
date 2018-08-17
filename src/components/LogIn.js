import React , {Component} from 'react';
import InputField from './InputField';
import Button from './Button';

class LogIn extends Component{
    state={username:'',password:''}
    render() {
        const {containerStyle,emailNoteStyle,emailContainerStyle,passwordContainerStyle,submitBtnStyle} = style;
        return(
            <form style={containerStyle} className=" shadow-sm">
                <div style={emailContainerStyle}  className="shadow-sm">
                <InputField row={'row-reverse'} element={ <Button style={emailNoteStyle} className='d-flex'  text='@student.guc.edu.eg'/>
         } row='flex-row-reverse' height='40px'  type="text" className="d-flex " placeholder="Email"  /> 
         
                </div>
                <div style={passwordContainerStyle} className="shadow-sm">
                <InputField height='40px'  type="text" className="d-flex " placeholder="Password"  /> 
         
                </div>
                <div  >
               <Button style={submitBtnStyle} hasborder={true}  /* color='#4286f4' fontColor='#FFFFF' */  className=" d-flex d-flex align-self-start " text='Submit'/> 
               </div>
            </form>
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

    },
    submitBtnStyle:{
        marginTop:'5%'
      },
}

export default LogIn;
