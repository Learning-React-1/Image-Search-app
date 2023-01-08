import {Link} from 'react-router-dom'
import './Results.css'
import Search from './Search'
import Display from './Display'
function Results({updatesearchterm,currsearchresults,setvalue}){
    
return(
    <div>
        <div className='results'>
            <Link to='/' className='header'>Topothetic Search</Link>
            <Search updatesearchterm={updatesearchterm} setvalue={setvalue}></Search>
        </div>
        <Display currsearchresults={currsearchresults}></Display>
    </div>
    
)
}
export default Results;