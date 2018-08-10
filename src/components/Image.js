import React,{Component} from 'react'

class Image extends Component {
    state = {showPreviewImage:false}

    render(){
       const {source,onClick,height,width} = this.props;
       return (
           
       <div className=" d-flex flex-column ">
         <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          {this.state.showPreviewImage ? <div className="justify-self-center align-self-center d-flex shadow " style={styles.previewImageContainer}>
            
            <div onClickCapture={this.onImageClose} className="align-items-center d-flex">
            <button onClick={this.onImageClose}  style={styles.closeImage} className="m-2 d-flex align-self-start">EXIT</button>
             <img  style={styles.previewImage}
                   className="d-flex justify-self-center align-self-center" src={source}
                    alt="Trulli"  /> 
            </div>
       </div>:'' }
       <div className="d-flex flex-row-reverse">
           <div className=" p-2 d-flex align-self-start" style={styles.closeSmallImage}><i style={styles.closeImageIcon} className=" shadow-sm fa fa-times"></i> </div>
       <img onClickCapture={this.omImageClick} style={styles.imageStyle} onClick={this.props.onClick}  className="m-1" height={height} width={width} src ={source}  />
       </div>
       </div>
    
    )
    }

    omImageClick= () => {
        this.setState({showPreviewImage:true});
    }
    onImageClose= () =>{
        this.setState({showPreviewImage:false});
    }
}

const styles = {
    imageStyle:{
        cursor:'pointer',
        border: '1px solid #ddd'
    },
    previewImageContainer :{
        position: 'absolute',
        zIndex:'999 ',
        backgroundColor:"#FFFFFF",
        border: '1px solid #eee',
       // marginBottom:'5%',
         margin:"0 auto",
        bottom:0,
        top:0,
        left:0,
        right:0 ,
        backgroundColor:'rgba(0,0,0,.8)'
        //marginTop:"5%",
        //marginLeft:"15%",
        //marginRight:"15%"
      
    },
    previewImage:{
       // margin:"0 auto",
        width: '100%',
        height: 'auto'
        //width:"400px"
    },
    closeImage:{
        position: 'absolute',
        zIndex:'1000 ',
    },
    closeSmallImage:{
        position: 'absolute',
        zIndex:'1 ', 
       
    },
    closeImageIcon:{
        color:'#616A6B',
        //border: '1px solid #ddd',
    }
}

export default Image;