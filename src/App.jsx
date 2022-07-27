
import { Footer } from "./components/Footer";
import { Home } from "./Routes"
import { Header } from "./components/Header"
import { Routes, Route} from "react-router-dom";
import { Searchproduct } from './Routes'
import { Productpage } from './components/Produto/Productpage'
import './styles/App.css'


function App() {

  

    return(
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path="/search/:produto" element={<Searchproduct />} />
            <Route path="/produto/:id" element={<Productpage />} />
            
            
            

          </Routes>
          
          <Footer />
            
        </>
        
        

    )
 
}

export default App;
