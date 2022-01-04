import './default.scss'
import Header from './cmponents/Header'
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
        <Header/>
      <div className='main'>
         <Homepage/>
     </div>
    
     
    </div>
  );
}

export default App;
