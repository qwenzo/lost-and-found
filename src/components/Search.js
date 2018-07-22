import React from 'react';
import ItemCard from './mainPage/itemCard';
const SearchView = (props) =>{
    return(
        <div style={styles.SearchView} className="d-flex flex-row m-5 flex-wrap ">
            <ItemCard />
             <ItemCard /> <ItemCard /> <ItemCard /> <ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard />
        </div>
    );
}

const styles = {
    SearchView :{
       
    }
}

export default SearchView;