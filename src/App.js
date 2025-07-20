import './App.css';
import Home from "./pages/home";
import { Header } from "./components/header";

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
