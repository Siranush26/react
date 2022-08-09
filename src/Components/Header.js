import Nav from '/home/siranush/lesson-react/src/Components/Nav';
import Search from '/home/siranush/lesson-react/src/Components/Search';



export default function Header(props){
    return(
        <div className="header">
        <img src={props.icon} alt="magazine" className="logo"></img>
   
        <Nav/>
        <Search place={"Search for brands and more Sir jan"}/>
        <img src={props.profi} alt="abc" className="profile"></img>
        
        </div>
    );
}

