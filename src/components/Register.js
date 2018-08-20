import React , {Component} from 'react';
import InputField from './InputField';
import Button from './Button';
import {Register} from '../actions/index'
import {connect} from 'react-redux';
import isAuth from '../index';
import ProbTypes from 'prop-types';

class RegisterComp extends Component{
    state={username:'',password:'',email:'',mobile:''}

    static contextTypes={
        router:ProbTypes.object
    }

    componentWillMount(){
    }
    render() {
        const {containerStyle,usernameNoteStyle,usernameContainerStyle,passwordContainerStyle,submitBtnStyle} = style;
        return(
            <form style={containerStyle} className="">
                <div style={usernameContainerStyle}  className="shadow-sm">
                    <InputField onTextChange={this.onEmailTextChange.bind(this)}  element={ <Button style={usernameNoteStyle} className='d-flex'  text='@student.guc.edu.eg'/>
                } row='flex-row' height='40px'  type="text" className="d-flex " value={this.state.email} placeholder="Email"  /> 
         
                </div>
                <div style={passwordContainerStyle} className="shadow-sm">
                    <InputField onTextChange={this.onUsernameTextChange.bind(this)} value={this.state.username} height='40px'  type="text" className="d-flex " placeholder="Username"  /> 
         
                </div>
                <div style={passwordContainerStyle} className="shadow-sm">
                 <InputField onTextChange={this.onPasswordTextChange.bind(this)} value={this.state.password} height='40px'  type="text" className="d-flex " placeholder="Password"  /> 
         
                </div>
                <div style={passwordContainerStyle} className="shadow-sm">
                 <InputField onTextChange={this.onMobileTextChange.bind(this)} value={this.state.mobile} height='40px'  type="text" className="d-flex " placeholder="Mobile"  /> 
         
                </div>
              
                <div style={submitBtnStyle}>
             {   <Button className="shadow-sm" onClick={this.onClickHandle}  hasborder={true} onClickDownColor='#0b51c1' clickable={true}  color='#4286f4' fontColor='#FFFFF'   className=" d-flex d-flex align-self-start " text='LOGIN'/>  }
               </div>
            </form>
        )
    }

    onClickHandle = () =>{
     // console.log(this.props.LogInUser({email:this.state.username,password:this.state.password}));  
      const promise = this.props.Register({username:this.state.username,password:this.state.password,email:this.state.email,mob:this.state.mobile}).payload;
      promise.then( (e)=>{console.log(e);
    }
    
    ).catch(
            (e)=>{
                if (e.response) {
                    console.log(e.response.data);
                  }
            }
        ) 
    }
    

    onUsernameTextChange(event){
        this.setState({username:event.target.value});
      }

      onPasswordTextChange(event){
        this.setState({password:event.target.value});
      }

      onEmailTextChange(event){
        this.setState({email:event.target.value});
      }

      onMobileTextChange(event){
        this.setState({mobile:event.target.value});
      }
      
    
}

const style={
    containerStyle:{
         marginTop:'10%',
        marginBottom:'3%',
        marginLeft:'35%',
        marginRight:'35%', 
        padding:'2%',
        boxShadow:'0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'
    },
    usernameNoteStyle:{
        borderLeft: '1px solid #ddd',
    },
    usernameContainerStyle:{
      //  marginTop:'10%',
      border: '1px solid #ddd',
    },
    passwordContainerStyle:{
        marginTop:'8%',
        border: '1px solid #ddd',
        

    },
    submitBtnStyle:{
       marginTop:'5%'
        
      },
}





export default connect(null,{Register})(RegisterComp);
