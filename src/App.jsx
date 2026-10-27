  import {Routes, Route} from "react-router-dom";

  import Category from "./pages/Category";
  import TambahCategory from "./pages/TambahCategory";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import Beranda from "./pages/Beranda";
  import EditCategory from "./pages/EditKategori";
  import Movie from "./pages/Movie";
  import TambahMovie from "./pages/TambahMovies";
  // import EditMovie from "./pages/EditMovie";




  function App() {
    return (
      <>
        <Navbar/>
        <main>
          <Routes>
          <Route path="/" element={<Beranda/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/category/tambah" element={<TambahCategory/>}/>
          <Route path="/category/edit/:id" element={<EditCategory/>}/>
          <Route path="/movie" element={<Movie/>}/>
          <Route path="/movie/tambah" element={<TambahMovie/>}/>
          {/* <Route path="/movie/edit/:id" element={<EditMovie />}/> */}
          </Routes>
        </main>
      
        <Footer/>
      </>
    )
  
  }

  export default App;