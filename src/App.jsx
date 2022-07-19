
import { Footer } from "./components/Footer";
import { Home } from "./Routes"
import { Header } from "./components/Header"
import { Routes, Route} from "react-router-dom";
import { Voyager } from './Routes'
import { Searchproduct } from './Routes'

import './styles/App.css'

function App() {

  

    return(
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Voyager />} />
            <Route path="/find" element={<Searchproduct />} />
            
            
            

          </Routes>
          
          <Footer />
            
        </>
        
        

    )
 
}

export default App;
