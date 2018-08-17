import React , {Component} from 'react';
import InputField from './InputField';
import Button from './Button';

class LogIn extends Component{
    state={username:'',password:''}
    render() {
        const {containerStyle,usernameNoteStyle,usernameContainerStyle,passwordContainerStyle,submitBtnStyle} = style;
        return(
            <form style={containerStyle} className=" shadow-sm">
                <div style={usernameContainerStyle}  className="shadow-sm">
                <InputField onTextChange={this.onUsernameTextChange.bind(this)} row={'row-reverse'} element={ <Button style={usernameNoteStyle} className='d-flex'  text='@student.guc.edu.eg'/>
         } row='flex-row-reverse' height='40px'  type="text" className="d-flex " value={this.state.username} placeholder="Username"  /> 
         
                </div>
                <div style={passwordContainerStyle} className="shadow-sm">
                <InputField onTextChange={this.onPasswordTextChange.bind(this)} value={this.state.password} height='40px'  type="text" className="d-flex " placeholder="Password"  /> 
         
                </div>
                <div  >
               <Button style={submitBtnStyle} hasborder={true}  /* color='#4286f4' fontColor='#FFFFF' */  className=" d-flex d-flex align-self-start " text='Submit'/> 
               </div>
            </form>
        )
    }

    onUsernameTextChange(event){
        this.setState({username:event.target.value});
      }

      onPasswordTextChange(event){
        this.setState({password:event.target.value});
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
    usernameNoteStyle:{
        borderLeft: '1px solid #ddd',
    },
    usernameContainerStyle:{
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
