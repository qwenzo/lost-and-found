import React,{Component} from 'react'

class Image extends Component {
    state = {showPreviewImage:false,show:true}

    render(){
       const {source,onClick,height,width,onDelete,isDeleteable} = this.props;
       let comp = this.state.show ?   <div id={`image${source}`} ref='Image' onClickCapture={(e)=>{
      {e.target.nodeName!=='IMG'? this.setState({showPreviewImage:false}):''}

      }}className=" d-flex flex-column ">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
         {this.state.showPreviewImage ? <div className="justify-self-center align-items-center justify-content-center align-self-center d-flex shadow " style={styles.previewImageContainer}>
         <style>{'body { background-color: #F8F9F9}'}</style>
           <div  className=" d-flex">
           <button onClick={this.onImageClose}  style={styles.closeImage} className="m-2 d-flex align-self-start">EXIT</button>
            <img  style={styles.previewImage}
                  className=" align-self-center " src={source}
                   alt="Trulli"  /> 
           </div>
      </div>:'' }
      <div className="d-flex flex-row-reverse">
         {isDeleteable?<div className=" p-2 d-flex align-self-start" style={styles.closeSmallImage}><i onClickCapture={(e) =>{this.setState({show:false});onDelete(source)}}
          style={styles.closeImageIcon} className=" shadow-sm fa fa-times"></i> </div>:null} 
      <img  onClickCapture={this.omImageClick} style={styles.imageStyle} onClick={this.props.onClick}  className="m-1" height={height} width={width} src ={source}  />
      </div>
      </div> : null
       return (
        <div>  {comp} </div>
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
        margin:'0 auto',
        //width: '50%',
       // marginLeft:'100%',
      // height:'50%',
       flex:'1'
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