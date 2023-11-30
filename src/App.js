import "./App.css";

function App() {
  return (
    <div className="App flex flex-col">
      <header className="header">
        <div className="header__logo bg-green-300 py-3">
          <p>logo</p>
        </div>
      </header>
      <main className="main flex">
        <div className="main__sidebar bg-green-100">sidebar</div>
        <div className="w-full">content</div>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
