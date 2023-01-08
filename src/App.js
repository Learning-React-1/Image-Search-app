import './App.css';
import {useEffect, useState} from 'react';

import {Routes,Route,Link} from 'react-router-dom';
import Results from './components/Results';
import Search from './components/Search'
function App() {
  const UNSPLASHAPI="qxtX9lAh4UpJzXlQ1COi3536v6ok0LA70YU_hTHscsc"
 
  const [searchterm,SetSearchTerm]=useState('')
  const [currsearchresults,SetCurrSearchResults]=useState([])
 
  const updatesearchterm=(currsearchterm)=>{
    SetSearchTerm(currsearchterm)
  }
  useEffect(()=>{
   
    const getimagesfromapi=async()=>{
      let updatingphotos=[]
      
      try{
      const res=await fetch(`/search/photos?page=1&per_page=24&query=${searchterm}&client_id=${UNSPLASHAPI}`,{method:'GET'})
      const photos=await res.json();
      updatingphotos=photos.results.map((photo)=>{
        return photo
      })
      }
      catch(err){
        alert('something has gone wrong with server thank you for your patience')
      }
  
      SetCurrSearchResults(updatingphotos)
    
    }
    getimagesfromapi()
  },[searchterm])
  
  function Main(){
    return(
      <div className='App'>
          <div className='logo'>
              <Link to='/'>Topothetic Search</Link>
          </div>
          <Search updatesearchterm={updatesearchterm} setvalue={searchterm}></Search>
         
      </div>
    )
  }
  return (
    <div >
      <Routes>
        <Route exact path='/results' element={<Results updatesearchterm={updatesearchterm} currsearchresults={currsearchresults} setvalue={searchterm}/>}>
        </Route>
        <Route exact path='' element={<Main/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
