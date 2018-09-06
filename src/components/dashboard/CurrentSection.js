import React , {Component} from'react';
import './currentsection.style.css'
import NewItem from './NewItem';

class CurrentSection extends Component {

    render(){
      
        return(
            <div className="flex-column currContainer" style={styles.containerStyle}>
            {this.props.currSectionIndex==0 ?
            <div>
               <NewItem />
               <NewItem />
               <NewItem />
               <NewItem />
               <NewItem />
               <NewItem />
            </div>:null}

            </div>
        )
    }

      
}

const styles={
}


export default CurrentSection;
