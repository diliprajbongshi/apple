import './App.css';
import Hello from './mycomponent/Hello';
import Welcome from './mycomponent/Welcome';
// import New from './mycomponent/New';
// import Four from './mycomponent/Four';
// import Five from './mycomponent/Four';

function App() {
  return (
    <div className="App">
        <Hello name="dilip"  age="30"></Hello>
      
      <Welcome name="class one" ></Welcome>
      <Welcome name="class one" ></Welcome>

   

    </div>
  );
}

export default App;
