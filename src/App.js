
import './App.css';
import Reviews from './components/reviews';



function App() {
return (
    <div className="App">
    <section className='container'>
      <div className='title'>
        <h2 className='h2-title'>Our reviews</h2>
      </div>

      <Reviews/>
    </section>
    </div>
  );
}

export default App;
