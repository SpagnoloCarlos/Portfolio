import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Home from './Pages/Home/Home';
import MyWorks from './Pages/MyWorks/MyWorks';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/my-works' element={<MyWorks />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
