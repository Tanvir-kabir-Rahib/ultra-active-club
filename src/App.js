import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Exercises from './components/Exercises/Exercises';

function App() {
  return (
    <div className="App page-griding">
      <div className=''>
        <Header></Header>
        <Exercises></Exercises>
      </div>
      <div>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
