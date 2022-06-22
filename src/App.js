import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';

function App() {
  return (
    <>
      <Navbar/>
      <div class="container mx-auto">
        <Hero/>
        <Content/>
      </div>
    
    </>
  );
}

export default App;

