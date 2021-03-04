import './App.scss';

function App() {
  return (
    <div className="App">
        <main className="main">

          <img className="wheel" src="img/wheel.svg" alt=""/>
          <h2 className="hello">Ciao</h2>
          <p className="text">I am Emmanuel Badu Sarpong, and welcome to my website. My website is currently under construction. Check here in a few days. Goodbye.</p>
          <div className="mail">
            <span>click below to send me a mail</span>
            <a className="maillink" href="mailto:hello@iambadu.com?subject=Hello Sarpong">hello@iambadu.com</a>
          </div>
        </main>
    </div>
  );
}

export default App;
