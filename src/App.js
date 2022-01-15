import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';


function App() {
  return (
    < >

<Navbar title="Nagesh" contactlink="contact us"/>
<div className="container my-3" >
<About/>

{/* <Textform heading="Enter your text here"/> */}
</div>
    </>
    
  );
}

export default App;
