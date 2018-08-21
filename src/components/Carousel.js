import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Carousel extends Component{
  state = {children:[],currIndex:0}
    componentDidMount(){
         let myArray = Array.from(this.refs.viewPort.childNodes)
        this.setState({children:myArray});
        

       
    }
    
    render(){
        const {width,className,style} = this.props;
        return (<div style={style} className={className}>
            <div style={{...styles.containerStyle,width:width+'px'}} className="d-flex flex-row" ref='viewPort' >
            {this.props.children}
            </div>
            <button  onClickCapture={this.handleLeft}>lefty</button>
             <button onClickCapture={this.handleRight}>right</button>
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
       const childrenLength = this.state.children.length-1;
       const index = this.state.currIndex-1;
        if(index>0){
            this.setState({currIndex:this.state.currIndex-=1});
         }
        /*  else{
           
         } */
       
       this.state.children[this.state.currIndex].scrollIntoView({
        behavior: 'smooth' 
      });
     }

      test = () =>{
        React.Children.map(this.props.children, (element, idx) => {
            console.log( this.refs);
            return React.cloneElement(element, { ref: idx });
          })
      
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
    leftArrowStyle:{
        zIndex:1,
        position:'abs'
    }
    
}

function scrollTo (element, to, duration)   {
    var start = element.scrollLeft,
        change = to - start,
        increment = 20;

    var animateScroll = function(elapsedTime) {        
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);                        
        element.scrollLeft = position; 
        if (elapsedTime < duration) {
            setTimeout(function() {
                animateScroll(elapsedTime);
            }, increment);
        }
    };

    animateScroll(0);
}

function easeInOut (currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}




export default Carousel;