import React,{Component} from 'react'

class Image extends Component {
    state = {file:this.props.file,image:null}

    render(){
       return (<img  key={data} className="m-1" height='200' width='200' src ={image}  />)
    }
}