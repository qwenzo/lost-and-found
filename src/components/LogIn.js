import React , {Component} from 'react';
import InputField from './InputField';
import Button from './Button';

class LogIn extends Component{
    state={username:'',password:''}
    render() {
        const {containerStyle,emailNoteStyle} = style;
        return(
            <div style={containerStyle} className=" shadow-sm">
                <div className="shadow-sm">
                <InputField row={'row-reverse'} element={ <Button style={emailNoteStyle} className='d-flex'  text='@student.guc.edu.eg'/>
         } row='flex-row-reverse' height='40px'  type="text" className="d-flex " placeholder="Email"  /> 
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
        marginLeft:'40%',
        marginRight:'40%',
        borderRadius:'5px 5px 5px 5px',
        padding:'1%'
    },
    emailNoteStyle:{
        borderLeft: '1px solid #ddd',
    }
}

export default LogIn;
