import React , {Component} from 'react';
import SideBar from './SideBar';
import CurrentSection from './CurrentSection';

class Dashboard extends Component {

    render(){
        return(
            <div style={styles.containerStyle} className='container  d-flex flex-row'>
                <SideBar/>
                <CurrentSection/>
            </div>
        )
    }

}

const styles ={
    containerStyle:{
        marginTop:'50px',
        maxWidth:'1500px'
    }
}

export default Dashboard;