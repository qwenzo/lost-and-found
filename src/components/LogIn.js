import React , {Component} from 'react';

class LogIn extends Component{
    render() {
        const {containerStyle} = style;
        return(
            <div style={containerStyle} className="align-self-center d-flex shadow-sm">
                hi
            </div>
        )
    }
      
    
}

const style={
    containerStyle:{
        border: '1px solid #ddd',
        marginTop:'3%',
        marginBottom:'3%',
        marginLeft:'30%',
        marginRight:'30%',
        borderRadius:'5px 5px 5px 5px',
        padding:'1%'
    }
}

export default LogIn;
