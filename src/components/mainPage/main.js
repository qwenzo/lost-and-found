import React , {Component} from 'react';
import NewestItems from './newestItems';
class Main extends Component {
  

    constructor(props){
     super(props)
     this.state = {clientHeighth:document.documentElement.clientHeight,searchText:''};
    }


    componentDidMount() {
      //  window.addEventListener('resize', this.resizeScreen.bind(this));
        if(this.state.clientHeighth>900) {
            document.getElementById("searchBox").classList+="w-50";
        }
        else{
            document.getElementById("searchBox").classList+="w-75";
        }
        
      
    }

    onSearchTextChange(event){
      this.setState({searchText:event.target.value});
    }

    render (){
        return (<div >
           
            <div style={styles.containerStyle} className = " d-flex justify-content-center align-items-center flex-column bd-highlight ">
        <div className="m-2">
        <h1> lost your shit ? </h1>
         <h3> you may find it here </h3>
         </div>
         
         <div id="searchBox" style={styles.searchBoxStyle} className="input-group ">
         <input onChangeCapture={this.onSearchTextChange.bind(this)} value={this.state.searchText} type="text" className="form-control" placeholder="Search a lost item"  />
         <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Search</button>
        </div>
          </div>
        </div >
       
      <NewestItems /> 
        </div>)
    }

}


const styles = {
    containerStyle: {
        height:'450px'
    },
    searchBoxStyle: {
    },
    briefResultsStyle:{
      zIndex:'1'
    }
  }

export default Main;