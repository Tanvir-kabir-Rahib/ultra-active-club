import './App.css';
import Header from './components/Header/Header';
import Exercises from './components/Exercises/Exercises';
import Blogs from './components/Blogs/Blogs';
import {toast} from "react-toastify"

toast.configure()
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Exercises></Exercises>
        <Blogs></Blogs>
    </div>
  );
}

export default App;
