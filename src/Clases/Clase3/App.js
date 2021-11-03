import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {

  const objStyle= {backgroundColor: 'red'}
  //NavBar()
  return (
      <div className="App" style={ objStyle } onclick={ () => alert('hola soy imagen') } >
          <NavBar />
        
          <img src={logo} className="App-logo" alt="logo"  />
          
      </div>
  );
}

export default App;
