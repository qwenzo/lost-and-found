import React,{Component} from 'react';

class Carousel extends Component{
    
    render(){
        const {width,paddingWidth,className,style} = this.props;
        return (<div style={style} className={className}>
            <div style={{...styles.containerStyle,width:width+'px'}} className="d-flex flex-row" ref='viewPort' >
            {this.props.children}
            </div>
            <button onClickCapture={this.handleLeft}>lefty</button>
             <button onClickCapture={this.handleRight}>right</button>
             </div>
        )
    
    }

    handleRight = (e) =>{
        const {viewPort} = this.refs;
       var newPos= viewPort.scrollLeft+ this.props.width+(+this.props.paddingWidth?this.props.paddingWidth:0);
      // viewPort.scrollLeft = newPos;
      /*  scrollTo(viewPort,newPos,200); */
      viewPort.scroll({
        top: 0, 
        left: newPos,
        behavior: 'smooth' 
      });
     }
     handleLeft = (e) =>{
        const {viewPort} = this.refs;
        var newPos = viewPort.scrollLeft- this.props.width+(-this.props.paddingWidth?this.props.paddingWidth:0);
       // scrollTo(viewPort,newPos,200);

       viewPort.scroll({
        top: 0, 
        left: newPos,
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