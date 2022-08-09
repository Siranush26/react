export default function Search(props){
    return(
  <div>
 <form>
  <label>
    
    <input type="text"  className="first" name="Search" placeholder={props.place}/>
  </label>
 
</form>

  </div>
    );
    
    
}