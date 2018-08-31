import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import leftArrow from '../../src/assets/leftArrw.png';
import rightArrow from '../../src/assets/rightArrw.png';

class Carousel extends Component{
  state = {children:[],currIndex:1}
    componentDidMount(){
         let childNodes = Array.from(this.refs.viewPort.childNodes);
        this.setState({children:childNodes});
    }
    
    render(){
        const {width,className,style} = this.props;
        return (<div style={style} className={className}>
            <div style={{...styles.containerStyle,width:width+'px'}} className="align-items-center d-flex flex-row" ref='viewPort' >
            <div className="d-flex justify-content-between" style={{...styles.buttonsContainer,width:width+'px'}}>
                <img src={leftArrow} style={styles.arrowStyle} onClickCapture={this.handleLeft} />
                <img src={rightArrow} style={styles.arrowStyle} onClickCapture={this.handleRight}/>
            </div>
            {this.props.children}
            </div>
             </div>
        )
    
    }

    handleRight = (e) =>{
     this.setState({currIndex:this.state.currIndex+=1});
     if(this.state.currIndex>=this.state.children.length-1){
        this.setState({currIndex:1});
      }
      
      this.state.children[this.state.currIndex].scrollIntoView({
        behavior: 'smooth' 
      });
     
     }
     handleLeft = (e) =>{
        if( this.state.currIndex>1){
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
    },
    arrowStyle:{
        fontSize:"48px",
        color:"black",
    },
    buttonsContainer:{
        zIndex:1,
        position:'absolute',
    }
    
}


export default Carousel;