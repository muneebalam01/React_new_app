// import Header from './Header.jsx'
// import Footer from './Footer.jsx';
// import Food from './Food.jsx';
import Card from "./Card";
import UserGreeting from "./UserGreeting";
function App() {
  return (
    <div className="App">
      <div className='row'>
      <div className='container'>
      {/* <Header/>
      <Food />
      <Footer/> */}

      <UserGreeting IsloggedIN = {true} name = "Muneeb"/>
      <Card name ="Muneeb Alam" details = "I am React Js developer"/>
      <Card name ="Test Name" details = "I am Vue Js developer"/>
      <Card name ="Muneeb" details = "I am PHP Js developer"/>
      <Card name ="Alam" details = "I am Node Js developer"/>
      
    </div>
    </div>
    </div>
  );
}

export default App;
