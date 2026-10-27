  import {Routes, Route} from "react-router-dom";

  import Category from "./pages/Category";
  import TambahCategory from "./pages/TambahCategory";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import Beranda from "./pages/Beranda";




  function App() {
    return (
      <>
        <Navbar/>
        <main>
          <Routes>
          <Route path="/" element={<Beranda/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/category/tambah" element={<TambahCategory/>}/>
          </Routes>
        </main>
      
        <Footer/>
      </>
    )
  
  }

  export default App;