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
        console.log(this.props.width);
       
        const {viewPort} = this.refs;
        console.log(viewPort);
        console.log(this.props.paddingWidth);
       var newPos= viewPort.scrollLeft+ this.props.width+(+this.props.paddingWidth);
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
        var newPos = viewPort.scrollLeft- this.props.width+(-this.props.paddingWidth);
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

export default Carousel;