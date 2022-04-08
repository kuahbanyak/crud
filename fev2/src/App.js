import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Register from "./components/Register"; 
import Login from "./components/Login";
import Navbarbaru from "./components/Navbarbaru";
import Home from "./page/Home";
import ProductList from "./CRUDProduct/ProductList";
import Productadd from "./CRUDProduct/Productadd";
import ProductEdit from "./CRUDProduct/ProductEdit";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<Productadd />} />
        <Route path="/edit/:id" element={<ProductEdit  />} />
        
        {/* <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
