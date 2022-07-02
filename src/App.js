
import './App.css';
import LoginForm from './components/LoginForm';
import { NavBar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div>
        <LoginForm />
      </div>
      
    </div>
  )
}

export default App;
