import './App.css';
import StringCalculator from './Components/StringCalculator';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
      <div className="app-wrapper">
        <Header/>
      <main className="main-content mt-2">
        <StringCalculator />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
