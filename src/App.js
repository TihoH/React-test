import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App flex flex-col">
      <header className="header">
        <Header />
      </header>
      <main className="main flex">
        <Sidebar />
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
