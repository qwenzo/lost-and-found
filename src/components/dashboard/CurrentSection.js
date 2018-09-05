import React , {Component} from'react';
import './currentsection.style.css'
import NewItem from './NewItem';

class CurrentSection extends Component {

    render(){
        return(
            <div className=" flex-column currContainer" style={styles.containerStyle}>
               <NewItem />
               <NewItem />
               <NewItem />
               <NewItem />
               <NewItem />
               <NewItem />

            </div>
        )
    }
}

const styles={
}


export default CurrentSection;
