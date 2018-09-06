import React , {Component} from 'react';
import InputField from './InputField';
import Button from './Button';
import {LogInUser} from '../actions/index'
import {connect} from 'react-redux';
import isAuth from '../index';
import _ from 'lodash';
import ProbTypes from 'prop-types';

class LogIn extends Component{
    state={email:'',password:'',passwordError:false,emailError:true,submitisClickable:true,otherErrors:false}

    static contextTypes={
        router:ProbTypes.object
    }

    componentWillMount(){
    }
    render() {
        const {containerStyle,usernameNoteStyle,usernameContainerStyle,passwordContainerStyle,submitBtnStyle,errorStyle} = style;
        const props = this.props;
        console.log(this.props.auth);
        return(
            <form style={containerStyle} className="justify-self-center container">
                <InputField style={usernameContainerStyle} className="shadow-sm" isInvalidCond={this.props.auth.emailError ? this.props.auth.emailError[0] : ''  }  onTextChange={this.onEmailTextChange.bind(this)}  element={ <Button style={usernameNoteStyle}   text='@student.guc.edu.eg'/>
         } row='flex-row' height='40px'  type="text" value={this.state.email} placeholder="Username"  /> 
                <InputField 
                style={passwordContainerStyle }
                onTextChange={this.onPasswordTextChange.bind(this)} 
                value={this.state.password} height='40px' type="text" className="shadow-sm" placeholder="Password"
                isInvalidCond={this.props.auth.passwordError ? this.props.auth.passwordError[0] : '' }
                /> 
                 { this.state.otherErrors  ?  <span className="align-self-center" style={errorStyle}>{this.state.otherErrorsMsg}</span>:null}
                <div style={submitBtnStyle}>
             {   <Button isLoading={this.props.auth.loading}
              className=" d-flex d-flex align-self-start " 
              onClick={this.onClickHandle}  
              hasborder={true} onClickDownColor='#0b51c1' 
              clickable={!this.props.auth.loading}  
              color='#4286f4' fontColor='#FFFFF'  text='LOGIN'/>  }
               </div>
            </form>
        )
    }

    onClickHandle = () =>{
       this.props.LogInUser({email:this.state.email,password:this.state.password});
    /*   promise.then( (e)=>{console.log(e);
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
                this.setState({otherErrors:false});
                if (e.response.data.errors.email) {
                    this.setState({emailError:true,emailErrorMsg:e.response.data.errors.email[0]})
                   }
                    if (e.response.data.errors.password) {
                     this.setState({passwordError:true,passwordErrorMsg:e.response.data.errors.password[0]})
                   }
               }
                
                  else{
                      if(e.response.data.error){
                        this.setState({emailError:false,passwordError:false,otherErrors:true,otherErrorsMsg:e.response.data.error});
                      }
                      else{
                        this.setState({emailError:false,passwordError:false,otherErrors:true,otherErrorsMsg:e.response.data});
                      }
                  
                  }
            }
        )
        .then(
            (e)=>{

                this.setState({loading:false,submitisClickable:true});
            }
        )  */
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
        padding:'2%',
        boxShadow:'0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)',
        maxWidth:'30%',
        minWidth:'300px'
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
      errorStyle:{
        color: '#dc3545',
        fontFamily:'Lato, Calibri, Arial, sans-serif'
      }
}


function mapStateToProps(state){
    return {auth:state.auth}
}


export default connect(mapStateToProps,{LogInUser})(LogIn);
