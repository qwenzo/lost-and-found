import React , {Component} from 'react';
import NewestItems from './newestItems';
import InputField from '../InputField';
import Button from '../Button';
class Main extends Component {
  

    constructor(props){
     super(props)
     this.state = {clientHeighth:document.documentElement.clientHeight,searchText:''};
    }

    componentWillMount(){
        console.log(localStorage);
    }


    componentDidMount() {
       // window.addEventListener('resize', this.resizeScreen.bind(this));
        if(this.state.clientHeighth>900) {
       //  document.getElementById("searchBox").classList+="w-50";
        }
        else{
          //  document.getElementById("searchBox").classList+="w-75";
        }
        
      
    }

    onSearchTextChange(event){
      this.setState({searchText:event.target.value});
    }

    render (){
        return (
        <div >
            <div style={styles.containerStyle} className = " d-flex align-items-center justify-content-center  flex-column  ">
                <div className="align-self-center m-2">
                    <h1> lost your shit ? </h1>
                    <h3> you may find it here </h3>
                </div>
            <InputField className=" shadow-sm"  style={styles.inutFieldStyle} element=
            {<Button text='Search'/>} row='flex-row' height='40px' onTextChange={this.onSearchTextChange.bind(this)} value={this.state.searchText} type="text"  placeholder="Search a lost item"  />    
        </div >
       
     {/*  <NewestItems />  */}
        </div>)
    }

}


const styles = {
    containerStyle: {
        height:'450px',
    },
    searchBoxStyle: {
    },
    briefResultsStyle:{
      zIndex:'1'
    },
    inutFieldStyle:{
        border: '1px solid #ddd',
         width:'100%',
         minWidth:'250px', 
        borderRadius:'5px',
        overflow:'hidden',
     

    }
  }

export default Main;