import './App.css';
import Home from "./pages/home";
import ItemInfo from "./pages/itemInfo";
import { Header } from "./components/header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<ItemInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
