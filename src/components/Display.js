import IndDisplay from "./IndDisplay";
import './Display.css'
function Display({currsearchresults}){
   
return(
<div className="display">
{
currsearchresults.map((photo,key)=>{
    return <IndDisplay key={key} photo={photo}></IndDisplay>
})}
</div>)
}
export default Display;