import './App.css';
import logo from './img/logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <div className='navbar'>
          <img className='logo' src= {logo}/>
          <img className='logo' src= {logo}/>
        </div>
      </header>
      <body>
        <div className='title'>
          <div className='title_content'>
            <h1>A joke a day keeps  the doctor away</h1>
            <h5>If you joke wrong way, your teeth have to pay. (Serious)</h5>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
