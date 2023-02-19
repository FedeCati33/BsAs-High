import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Home></Home>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
