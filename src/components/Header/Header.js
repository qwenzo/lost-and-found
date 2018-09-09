import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import Button from '../common/button/Button';
import InputField from '../InputField';
import searchIcon from '../../assets/Orion_search.png'
import sideBarArrow from '../../assets/Orion_angle-down.png'
import {connect} from 'react-redux';
import './Header.style.css'

class Header extends Component {
    state = {loggedin:false,sideBarOpen:false};
    static contextTypes ={
      router:PropTypes.object
    }
    // console.log(this.context.router.location.pathname);

    componentWillMount(){
      this.props.auth.authnticated ?  this.setState({loggedin:true}):this.setState({loggedin:false})
    }
    componentDidMount() {
        //  window.addEventListener('resize', this.resizeScreen.bind(this));
          if(document.documentElement.clientHeight>900) {
           // document.getElementById("searchBoxHeader").classList+="w-25";
          }
          else{
            //  document.getElementById("searchBoxHeader").classList+="w-100";
          }
          
        
      }


    renderSearchBox(){
     return(
        <InputField  width="400px" minWidth="100px"   /* style={styles.searchBoxStyle} */   inputContainerClassName='searchBox shadow-sm' element={
          <Button hasborder={true} clickable={true}
          img={<div className=" align-items-center justify-content-center d-flex shadow-sm" style={{borderRadius: '50%',width:'30px',height:'30px'}}>
           <img width="24px" height="24px" style={{}} src={searchIcon} /></div>}/>
      } row='flex-row' height='40px'  type="text" placeholder="Search a lost item"  />    
     );
    }

    redirectLogin = () =>{
      this.context.router.push('/login');
    }

    redirectSignup = () =>{
      this.context.router.push('/signup');
    }

  render() {
     const {router:{location:{pathname}}}=this.context;
    return (
      <div className="d-flex flex-column">
       
      <nav /* style = {styles.headerStyle} */ className="header align-items-center  d-flex flex-row">
          <Button onClick={this.openSideBar} img={<div className=" align-items-center justify-content-center d-flex shadow-sm" style={{borderRadius: '50%',width:'30px',height:'30px'}}>
           <img width="24px" height="24px" style={{}} src={sideBarArrow} /></div>}  clickable={true} hasborder={true} style={styles.buttonsStyle} className={this.state.sideBarOpen?'sidebarButton':''} text='LOGIN'/>
        {pathname=="/" ? '' : this.renderSearchBox()}  
          {!this.props.auth.authnticated? 
           <div  style={styles.buttonsBoxContainer}  className='buttonsBoxContainer d-flex flex-row-reverse col-sm'>
            <Button onClick={this.redirectLogin}  clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGIN'/>
            <Button onClick={this.redirectSignup} clickable={true} hasborder={true} style={styles.buttonsStyle} className=''  text='SIGNUP'/>
          </div> :
           <div /* style={styles.buttonsBoxContainer} */ className='buttonsBoxContainer d-flex flex-row-reverse col-sm'>
          <Button onClick={this.logout} clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGOUT'/></div> }  
    </nav>
    <div  className={`${this.state.sideBarOpen?'headerMobile':'headerMobileHidden'} align-items-center d-flex flex-row`}>
          {!this.props.auth.authnticated?
          <div style={styles.buttonsBoxContainer} className='d-flex flex-row-reverse col-sm'>
            <Button onClick={this.redirectLogin}  clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGIN'/>
            <Button onClick={this.redirectSignup} clickable={true} hasborder={true} style={styles.buttonsStyle} className=''  text='SIGNUP'/>
          </div>:
           <div style={styles.buttonsBoxContainer} className='d-flex flex-row-reverse col-sm'>
          <Button onClick={this.logout} clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGOUT'/></div> }  
    </div>
    </div>
    );
  }

  logout = () =>{
    localStorage.clear();
    this.setState({loggedin:false});
  }

  openSideBar = (e) =>{

     this.setState({sideBarOpen:!this.state.sideBarOpen})
    }
}



const styles = {
    headerStyle: {
      border: '1px solid #eee',
      backgroundColor:'#FFFF',
      paddingTop:'0.5%',
      paddingBottom:'0.5%',
    
    },
    searchBoxStyle:{
      marginLeft:'5%',
      border: '1px solid #ddd',
       borderBottomRightRadius:'50px' ,
        borderTopRightRadius:'50px' ,
        overflow:'hidden'
    },
    buttonsBoxContainer:{
      marginRight:'1%',
    
    },
 
}

/*
   <div>
           { this.renderSearchBox()}
        <div class="float-right">Float right on all viewport sizes</div>
      </div>
      */
function mapStateToProps(state){
  return {auth:state.auth}
}

export default connect(mapStateToProps)(Header);
