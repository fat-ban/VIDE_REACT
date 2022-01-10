import {Switch,Route} from "react-router-dom"

import './default.scss'
//Layouts
import HomepageLayout from "./cmponents/layouts/HomepageLayout";

//Pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registartion';
import MainLayout from "./cmponents/layouts/MainLayout";

function App() {
  return (
    <div className="App">
       
         <Switch>
         <Route exact path="/" render={()=>(
           <HomepageLayout>
                <Homepage/>
           </HomepageLayout>
         )
        }/>
         <Route path="/registration" render={()=>(
           <MainLayout>
             <Registration/>
           </MainLayout>
         )
        } />
         </Switch>
         
    
    
     
    </div>
  );
}

export default App;
