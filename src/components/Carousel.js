import React,{Component} from 'react';
import leftArrow from '../../src/assets/leftArrw.png';
import rightArrow from '../../src/assets/rightArrw.png';

class Carousel extends Component{
  state = {children:[],currIndex:0}
    componentDidMount(){
         let childNodes = Array.from(this.refs.viewPort.childNodes);
        this.setState({children:childNodes});
        console.log(childNodes);
    }
    
    render(){
        const {width,className,style} = this.props;
        return (
        <div style={style} className={`d-flex flex-row ${className}`}>
             <div  className="d-flex justify-content-start align-items-center">
                <img alt='' src={leftArrow}  style={{marginRight:'-2.1rem',zIndex:'1'}} onClickCapture={this.handleLeft}  />
            </div>
            <div style={{...styles.containerStyle,width:width+'px'}} className="align-items-center d-flex flex-row" ref='viewPort' >
                {this.props.children}
            </div>
            <div className="d-flex justify-content-end align-items-center">
                <img alt='' src={rightArrow}  style={{marginLeft:'-2.1rem',zIndex:'1'}} onClickCapture={this.handleRight}  />
            </div> 
        </div>
        )
    
    }

    handleRight = (e) =>{
     this.setState({currIndex:this.state.currIndex+=1});
     if(this.state.currIndex>=this.state.children.length-1){
        this.setState({currIndex:0});
      }
      
      this.state.children[this.state.currIndex].scrollIntoView({
        behavior: 'smooth' 
      });
     
     }
     handleLeft = (e) =>{
        if( this.state.currIndex>0){
            this.setState({currIndex:this.state.currIndex-=1});
         }
       this.state.children[this.state.currIndex].scrollIntoView({
        behavior: 'smooth' 
      });
     }

    
}


const styles={
    containerStyle:{
        padding:0,
        whiteSpace:'nowrap',
        overflowY:'hidden',
        overflowX:'hidden',
        width:"650px",
        float:"left"
    },
    arrowStyle:{
        fontSize:"48px",
    },
    buttonsContainer:{
        zIndex:1,
        position:'absolute',
    }
    
}


export default Carousel;