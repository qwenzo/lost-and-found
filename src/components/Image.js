import React,{Component} from 'react'

class Image extends Component {
    state = {file:this.props.file,image:null}

    render(){
       return (<img key={data} className="m-1" height='200' width='200' src ={image}  />)
    }

    renderImage= 
        (event) => {
            const files = event.target.files;
            for(var i=0; i<files.length;i++){
           
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                this.setState({
                    images: [...this.state.images,reader.result]
                })
              }.bind(this),false)
            reader.readAsDataURL(files[i]);
    
        }
    
        this.setState({image:true});
        
          }
}