import React from "react";
import './App.scss';
import Header from './Components/Header';
import Logo from './images/shopping.png';
import Profile from './images/profile.png';
import Main from "./Components/Main";
import Cart1 from "./images/bershka.jpg";
import Cart2 from "./images/3.jpg";
import Cart3 from "./images/3.webp";


class App extends React.Component{
  state={
    product:[
      {name:"Bershka", img:Cart1, price:"50$"},
      {name:"Zara",img:Cart2,price:"25$"},
      {name:"Pull and Bear",img:Cart3,price:"40$"}

      
    ],
  }
  render(){
   
  return(
  <>
  
   <Header icon={Logo} profi={Profile} />
   <Main products={this.state.product}/>
 
   
  
   
   </>
  )
  }
}

export default App;
//import companyLogo from '/home/siranush/lesson-react/src/Doryy.png';
//import logoNemo from '/home/siranush/lesson-react/src/Nemo.png';
//import myVideo from '/home/siranush/lesson-react/src/finding.mp4';
/*
function Sir(props){
  let surname=props.surname;
  let name="Siranush";
  let age=props.age;
  return(
    
    <div>
    <h1> Hi {name} {surname} {age+2} </h1>
    <h1> Everything will be ok !!! </h1>
    </div>
    
  )
}

const listStyles={
  listStyle:"none",
  textAlign:"center",
  width:"300px",
  margin:"auto",
  marginBottom:"80px",

}

let listStylesli={
  border:"2px solid purple",
  fontSize:"30px",
}
function List(){
  let arrList=["Angular","VueJS","ReactJS"]
  return(
    <ul style={listStyles}>
      <li style={listStylesli}>{arrList[2]}</li>
      <li style={listStylesli}>{arrList[1]}</li>
      <li style={listStylesli}>{arrList[0]}</li>
    </ul>
  )
}


function Table(){
  return(
    <table>
      <thead>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  </tbody>
</table>

  )
}

const nemoDory={
  display:"flex",
  marginLeft:"200px"
  

}

let doryStyles={
  width:"400px",
  height:"400px"
}

let nemoStyles={
  width:"400px",
  height:"400px"
}
function Image(){
  return (
    <div style={nemoDory}>
      <img src={companyLogo}  alt="Dory" style={doryStyles}/>
      <img src={logoNemo} alt="Nemo" style={nemoStyles}/>
    </div>
  );
}
const videoStyles={
  display:"flex",
  justifyContent:"center"
}
function Video(){
  return(
    <div style={videoStyles}>
        <video src={myVideo} width="750" height="500" controls style={{backgroundColor:"#3399ff", borderRadius:"13px",marginTop:"100px"}} >
      </video>
    </div>
  )
}

function App(){
console.log(useId())
return (
  <div className="App" >
    <h1>Hello ReactJS</h1>
    <div className="inp">
    <input type="text" className="text" placeholder="Search"/>
    </div>
  <Sir surname="Tsaturyan" age={26}/>
  <List />
  <Table/>
  <Image/>
  <Video/>
  </div>

)
}
*/
