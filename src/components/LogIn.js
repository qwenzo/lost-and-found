import React , {Component} from 'react';
import InputField from './InputField';
import Button from './Button';

class LogIn extends Component{
    state={username:'',password:''}
    render() {
        const {containerStyle} = style;
        return(
            <div style={containerStyle} className=" shadow-sm">
                <div className="shadow-sm">
                <InputField row={'row-reverse'} element={ <Button className='d-flex' style={{marginRight:'0.5rem '}} text='@student.guc.edu.eg'/>
         } row='flex-row-reverse' height='40px'  type="text" className="d-flex " placeholder="Search a lost item"  /> 
                </div>
            </div>
        )
    }
      
    
}

const style={
    containerStyle:{
        border: '1px solid #ddd',
        marginTop:'3%',
        marginBottom:'3%',
        marginLeft:'30%',
        marginRight:'30%',
        borderRadius:'5px 5px 5px 5px',
        padding:'1%'
    }
}

export default LogIn;
