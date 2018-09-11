import axios from 'axios';
import {AUTH_USER,
    AUTH_PASSWORD_ERR,
    AUTH_EMAIL_ERR,LOADING_REQ,
     FINISHING_REQ,
    AUTH_OTHER_ERR,
    REG_COMPELE,
    REG_EMAIL_ERR,
    REG_MOBILE_ERR,
    REG_USERNAME_ERR,
    REG_PASSWORD_ERR
} from './types';

import {REGISTER_TYPE} from './types';
import {browserHistory} from 'react-router';


const BASE_URL = 'https://mylostfound.herokuapp.com/api';
const token = localStorage.getItem('token');



export function LogInUser(data){
    const URL = BASE_URL+'/auth/login';
    const req = axios.post(URL,data);
    return (dispatch) =>{
        dispatch({type:LOADING_REQ})
        req.then(
            (res)=>{
                localStorage.setItem('token', res.data.access_token);
                browserHistory.push('/');
                 dispatch({type:AUTH_USER});

            }
        ).catch((res)=>{
           let  errors = res.response.data.errors;
           if(errors){
                console.log(res.response.data);
                if(errors.email){
                    dispatch({type:AUTH_OTHER_ERR,payload:''})
                    dispatch({type:AUTH_EMAIL_ERR,payload:errors.email})
                }
                if(errors.password){
                    dispatch({type:AUTH_OTHER_ERR,payload:''})
                    dispatch({type:AUTH_PASSWORD_ERR,payload:errors.password})
                }
           }
            else{
                dispatch({type:AUTH_PASSWORD_ERR,payload:''})
                dispatch({type:AUTH_EMAIL_ERR,payload:''})
                dispatch({type:AUTH_OTHER_ERR,payload:res.response.data.error})
            }
        }).then(()=>{
            dispatch({type:FINISHING_REQ})
        })
    }
}

export function Register(data){
    const URL = BASE_URL+'/auth/register';
    const req = axios.post(URL,data);
    console.log(data);

    return (dispatch) =>{
        dispatch({type:LOADING_REQ})
        req.then( 
            (res)=>{
                dispatch({type:REG_COMPELE,payload:res.data});
              }
      
      ).catch(
              (e)=>{
                  if(e.response.data.errors){
                      if (e.response.data.errors.email) {
                          this.setState({type:REG_EMAIL_ERR,emailErrorMsg:e.response.data.errors.email[0]})
                         }
                          if (e.response.data.errors.password) {
                           this.setState({type:REG_EMAIL_ERR,passwordErrorMsg:e.response.data.errors.password[0]})
                         }
                          if(e.response.data.errors.username){
                          this.setState({utype:REG_USERNAME_ERR,usernameErrorMsg:e.response.data.errors.username[0]})
                         }
                          if(e.response.data.errors.mob){
                          this.setState({type:REG_MOBILE_ERR,mobileErrorMsg:e.response.data.errors.mob[0]})
                         }
                     }
                     else{
                      console.log(e.response);
                      this.setState({emailError:false,passwordError:false,usernameError:false,mobileError:false});
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
          ()=>{
              this.setState({loading:false,submitisClickable:true});
          }
          ) 
        }
  
   
    return{
        type:REGISTER_TYPE,
        payload:req
    }
}