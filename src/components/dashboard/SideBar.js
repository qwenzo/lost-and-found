import React , {Component} from'react';
import './sidebar.style.css'

class SideBar extends Component {

    state = {currIndex:null}

    handleClick0 = (e) =>{
        this.setState({currIndex:0} , ()=>{
            this.props.onChangeIndex(this.state.currIndex);
        });
    }

    handleClick1 = (e) =>{
        this.setState({currIndex:1} , ()=>{
            this.props.onChangeIndex(this.state.currIndex);
        })
    }
    handleClick2 = (e) =>{
        this.setState({currIndex:2}, ()=>{
            this.props.onChangeIndex(this.state.currIndex);
        })
    }
    handleClick3 = (e) =>{
        this.setState({currIndex:3}, ()=>{
            this.props.onChangeIndex(this.state.currIndex);
        })
    }
    handleClick4 = (e) =>{
        this.setState({currIndex:4}, ()=>{
            this.props.onChangeIndex(this.state.currIndex);
        })
    }




    render(){
        return(
            <div>
                <div style={styles.containerStyle} className="">
                    <div onClickCapture={()=>{this.handleClick0()}} className={` ${this.state.currIndex==0?'activeItem':'item'}`}  >NEW ITEMS</div>
                    <div onClickCapture={()=>this.handleClick1()} className={` ${this.state.currIndex==1?'activeItem':'item'}`} >USERS</div>
                    <div onClickCapture={()=>this.handleClick2()} className={` ${this.state.currIndex==2?'activeItem':'item'}`}  >TAGS</div>
                    <div onClickCapture={()=>this.handleClick3()} className={` ${this.state.currIndex==3?'activeItem':'item'}`}  >xyz</div>
                    <div onClickCapture={()=>this.handleClick4()} className={` ${this.state.currIndex==4?'activeItem':'item'}`}  >zyk</div>
                </div>
            </div>
        )
    }
}


const styles={
    containerStyle:{
        //width:'100%',
        minHeight:'100%',
        minWidth:'250px',
        //border: '1px solid #ddd',
        borderRadius:'10px',
        padding:'5%',
        paddingTop:'15%',
        boxShadow:'0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'
    },
}

export default SideBar;
