
import './App.css';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';

function App() {
  return (
    <main className='bg-bgDark  w-full '>
      <section className='container  mx-auto h-full '>
        <Navbar />
        <Landing/>
      </section>

    </main>
  );
}

export default App;
