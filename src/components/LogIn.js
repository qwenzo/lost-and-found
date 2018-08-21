import React , {Component} from 'react';
import InputField from './InputField';
import Button from './Button';
import {LogInUser} from '../actions/index'
import {connect} from 'react-redux';
import isAuth from '../index';
import _ from 'lodash';
import ProbTypes from 'prop-types';

class LogIn extends Component{
    state={email:'',password:'',emailError:false,emailErrorMsg:'',passwordError:false,passwordErrorMsg:false,loading:false,submitisClickable:true}

    static contextTypes={
        router:ProbTypes.object
    }

    componentWillMount(){
    }
    render() {
        const {containerStyle,usernameNoteStyle,usernameContainerStyle,passwordContainerStyle,submitBtnStyle} = style;
        return(
            <form style={containerStyle} className="">
                <InputField style={usernameContainerStyle} className="shadow-sm" isInvalidCond={this.state.emailError} invalidText={this.state.emailErrorMsg} onTextChange={this.onEmailTextChange.bind(this)}  element={ <Button style={usernameNoteStyle}   text='@student.guc.edu.eg'/>
         } row='flex-row' height='40px'  type="text" value={this.state.email} placeholder="Username"  /> 
                <InputField 
                style={passwordContainerStyle }
                onTextChange={this.onPasswordTextChange.bind(this)} 
                value={this.state.password} height='40px' type="text" className="shadow-sm" placeholder="Password"
                isInvalidCond={this.state.passwordError} invalidText={this.state.passwordErrorMsg}
                /> 
                <div style={submitBtnStyle}>
             {   <Button isLoading={this.state.loading} className="shadow-sm" onClick={this.onClickHandle}  hasborder={true} onClickDownColor='#0b51c1' clickable={this.state.submitisClickable}  color='#4286f4' fontColor='#FFFFF'   className=" d-flex d-flex align-self-start " text='LOGIN'/>  }
               </div>
            </form>
        )
    }

    onClickHandle = () =>{
     // console.log(this.props.LogInUser({email:this.state.username,password:this.state.password}));  
     this.setState({loading:true,submitisClickable:false});
      const promise = this.props.LogInUser({email:this.state.email,password:this.state.password}).payload;
      promise.then( (e)=>{console.log(e);
        localStorage.setItem('token', e.data.access_token);
        _.delay(
            ()=>{
                this.context.router.push('/')
            },1000
        )
    }
    
    ).catch(
            (e)=>{
               if(e.response.data.errors){
                if (e.response.data.errors.email) {
                    this.setState({emailError:true})
                    this.setState({emailErrorMsg:e.response.data.errors.email[0]})
                   }
                   else if (e.response.data.errors.password) {
                     this.setState({passwordError:true})
                     this.setState({passwordErrorMsg:e.response.data.errors.password[0]})
                   }
               }
                
                  else{
                    console.log(e.response);
                  }
            }
        )
        .then(
            (e)=>{
                this.setState({loading:false,submitisClickable:true});
            }
        ) 
    }
    

    onEmailTextChange(event){
        this.setState({email:event.target.value});
      }

      onPasswordTextChange(event){
        this.setState({password:event.target.value});
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





export default connect(null,{LogInUser})(LogIn);
