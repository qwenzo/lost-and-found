import React , {Component} from 'react';
import SideBar from './SideBar';
import CurrentSection from './CurrentSection';

class Dashboard extends Component {

    state={currSectionIndex:0}

    render(){
        return(
            <div style={styles.containerStyle} className='container  d-flex flex-row'>
                 <SideBar onChangeIndex = {(index)=>{this.handleChangeSection(index)}}/> 
                <CurrentSection currSectionIndex={this.state.currSectionIndex} />
            </div>
        )
    }

    handleChangeSection = (index)=>{
        console.log(index);
        this.setState({currSectionIndex:index});
    }

}

const styles ={
    containerStyle:{
        marginTop:'50px',
        maxWidth:'1500px'
    }
}

export default Dashboard;