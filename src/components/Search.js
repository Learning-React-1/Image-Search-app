import { useState } from 'react';
import {Link} from 'react-router-dom'
import searchimage from './images/search.png';
function Search({updatesearchterm,setvalue}){
    const [currsearchterm,setCurrSearchTerm]=useState(setvalue);
return(
    <div className='search-form' >
        <input type='text' className='search-bar' value={currsearchterm} onChange={(e)=>{setCurrSearchTerm(e.target.value)}} placeholder="enter name of a city,state or country"></input>
        <Link to='/results' className='search-button'><img src={searchimage} className='search-image' onClick={()=>{updatesearchterm(currsearchterm)}}></img></Link>
    </div>
)
}

export default Search;
