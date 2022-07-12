
import { Footer } from "./components/Footer";
import { Home } from "./Routes"
import { Header } from "./components/Header"
import { Routes, Route} from "react-router-dom";

import './styles/App.css'

function App() {

  

    return(
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            
            
            

          </Routes>
          
          <Footer />
            
        </>
        
        

    )
 
}

export default App;
