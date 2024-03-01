import './App.scss';
import '../styles/home.scss';
import TopBar from './home/top-bar'
import Sample from './home/sample';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Sample></Sample>
    </div>
  );
}

export default App;
