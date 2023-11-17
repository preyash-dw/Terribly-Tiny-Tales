
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/Post';
import Profile from "./components/Profile/Profile"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <Post/>
    </div>
  );
}

export default App;
