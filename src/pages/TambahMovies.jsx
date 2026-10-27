import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMovie } from "../services/MovieServices";
import { getAllCategories } from "../services/KategoriServices";


function TambahMovie() {
    const navigate = useNavigate();
    const [categories, setcategories] = useState([]);
    const [form, setForm] = useState({
        title: "",
        year: "",
        categoryId: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : name === "year"
            ? (value === "" ? "" : Number(value))
            :value
            
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Data yang dikirim :", form);
            await createMovie(form);
            alert("Data berhasil ditambahkan");
            navigate("/movie")
        } catch (error) {
            console.log(error);
            alert("Gagal menambahkan data")
        }
    };

    useEffect(() => {
        const fetchcategories = async () => {
            try {
                const response = await getAllCategories();
                setcategories(response.data);
            } catch (error) {
                console.log(error);

            }
        };

        fetchcategories();

    }, [])

    return (
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body py-4">
                                <h3 className="fw-bold mb-4">
                                    Tambah Movie
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor=""
                                            className="form-label">
                                            Title
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="title"
                                            value={form.title}
                                            className="form-control"
                                            placeholder="Masukan Nama Title" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""
                                            className="form-label">
                                            Year
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="number"
                                            name="year"
                                            value={form.year}
                                            className="form-control"
                                            placeholder="Masukan tahun" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Category
                                        </label>

                                        <select
                                            name="categoryId"
                                            value={form.categoryId}
                                            onChange={handleChange}
                                            className="form-select"
                                            required
                                        >
                                            <option value="">
                                                Pilih Category
                                            </option>

                                            {categories.map((category) => (
                                                <option
                                                    key={category.id}
                                                    value={category.id}
                                                >
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button type="submit" className="btn btn-primary">
                                            <i className="bi bi-save me-2"></i>
                                            Simpan
                                        </button>
                                        <button
                                        type="button"
                                            onClick={() => navigate("/category")}
                                            className="btn btn-secondary">
                                            Batal
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TambahMovie;