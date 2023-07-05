import './App.css';
import ElemId from './../src/components/ElemId';
import JsIcon from './../src/assets/java-script.png'

function App() {
  return (
    <div className="App">
      <img className='js-icon' src={JsIcon} />
      <h1>JavaScript Playground</h1>
      <div className='main-container'>
        
        <ElemId />

      </div>
    </div>
  );
}

export default App;
