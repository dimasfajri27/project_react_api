// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getMovieById, updateMovie } from "../services/MovieServices";
// import Loading from "../components/Loading";

// function EditMovie() {
//     const {id} = useParams();
//     const navigate = useNavigate();

//     const [form, setForm] = useState({
//         title : "",
//         year : "",
//         categoryId : ""
//     })
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         loadData();
//     },[])

//     const loadData = async () => {
//         try{
//             const response = await getMovieById(id);
//             console.log(response.data);
//             setForm({
//                 title : response.data.title,
//                 year : response.data.year,
//                 categoryId : response.data.categoryId
//             });
//         }catch(error){
//             console.log(error);
//             alert("Data tidak ditemukan");
//             navigate("/movie")
//         }finally{
//             setLoading(false);
//         }
//     }

//     const handleChange = (e) => {
//         const [name, value] = e.target;
//         setForm({
//             ...form,
//             [name] : name === "year"
//             ? (value === "" ? "" : Number(value))
//             :value
//         })
//     }

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try{
//             console.log("Data yang dikirim", form);
//             await updateMovie(id, form);
//             alert("Data berhasil diupdate");
//             navigate("/movie")
//         }catch(error){
//             console.log(error);
//             alert("Gagal Mengupdate Data");
//         }
//     };

//     if (loading){
//         return<Loading/>
//     }

//     return(
//         <section className="py-5">
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-lg-7">
//                         <div className="card border-0 shadow-sm">
//                             <div className="card-body p-4">
//                                 <h3 className="fw-bold mb-4">
//                                     Edit Movie
//                                 </h3>
//                                 <form onSubmit={handleUpdate}>
//                                     <div className="mb-3">
//                                         <label htmlFor=""
//                                         className="form-label">
//                                             Nama Movie
//                                         </label>
//                                         <input
//                                         onChange={handleChange}
//                                         type="text"
//                                         name="title"
//                                         value={form.title}
//                                         className="form-control"
//                                         placeholder="Nama Film" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label htmlFor=""
//                                             className="form-label">
//                                             Year
//                                         </label>
//                                         <input
//                                             onChange={handleChange}
//                                             type="number"
//                                             name="year"
//                                             value={form.year}
//                                             className="form-control"
//                                             placeholder="Masukan tahun" required />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">
//                                             Category
//                                         </label>

//                                         <select
//                                             name="categoryId"
//                                             value={form.categoryId}
//                                             onChange={handleChange}
//                                             className="form-select"
//                                             required
//                                         >
//                                             <option value="">
//                                                 Pilih Category
//                                             </option>

//                                             {categories.map((category) => (
//                                                 <option
//                                                     key={category.id}
//                                                     value={category.id}
//                                                 >
//                                                     {category.name}
//                                                 </option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <div className="d-flex gap-2">
//                                         <button className="btn btn-primary">
//                                             <i className="bi bi-save me-2"></i>
//                                             Simpan
//                                         </button>
//                                         <button
//                                             onClick={() => navigate("/category")}
//                                             className="btn btn-secondary">
//                                             Batal
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default EditMovie;