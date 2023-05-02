import './App.css';
import Company from './components/Company';
import Folio from './components/Folio';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Navbar from './components/Navbar';
// import Porto from './components/Porto';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Company />
    {/* <Porto /> */}
    <Folio />
    <Form />
    <Footer />
  
    </>
  );
}

export default App;
