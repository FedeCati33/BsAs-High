import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <LoginForm/>
        <ProductList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
