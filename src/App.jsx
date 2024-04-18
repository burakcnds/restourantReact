
import Headerx from "./Components/Headerx"
import Menux from "./Components/Menux"
import Sliderx from "./Components/Sliderx"
import './index.css'
import {Routes,Route,Link,NavLink} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Footerx from "./Components/Footerx"
import Rezerv from "./pages/Rezerv"

function App() {
 

  return (
    <>
    <Headerx/>
  
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/iletisim" element={<Contact/>} />
      <Route path="/hakkimizda" element={<About/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/rezervasyon" element={<Rezerv/>} />
     </Routes>
     <Footerx/>
    </>
  )
}

export default App
