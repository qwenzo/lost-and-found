import React from 'react';
import ItemCard from '../mainPage/itemCard';
import './search.style.css';

const SearchView = (props) =>{
    return(
        <div>
             <style>{'body { background-color: #F8F9F9}'}</style>
        <div className="itemsBox">
          {/* <div  style={styles.SearchView}  className="align-items-center justify-content-center w-50 h-50 shadow white" >lol</div> */}
            <ItemCard />
             <ItemCard /> <ItemCard /> <ItemCard /> <ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard />
        </div>
        </div>
    );
}

const styles = {
    SnackStyle :{
        position: 'absolute',
        zIndex:'1000 ',
        backgroundColor:"#FDFEFE "
      
    },
    SearchBoxView:{
       marginLeft:"1%",
      
    },
}

export default SearchView;