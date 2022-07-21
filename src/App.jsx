
import { Footer } from "./components/Footer";
import { Home } from "./Routes"
import { Header } from "./components/Header"
import { Routes, Route} from "react-router-dom";
import { Searchproduct } from './Routes'
import { Pageproduct } from './components/Produto/Pageproduct'

import './styles/App.css'

function App() {

  

    return(
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path="/find/:produto" element={<Searchproduct />} />
            <Route path="/produto/:id" element={<Pageproduct />} />
            
            
            

          </Routes>
          
          <Footer />
            
        </>
        
        

    )
 
}

export default App;
