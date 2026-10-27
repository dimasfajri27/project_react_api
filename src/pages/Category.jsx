import { useEffect, useState } from "react"
import Loading from "../components/Loading";
import { deleteCategory, getAllCategories } from "../services/KategoriServices";
import { Link } from "react-router-dom";

function Category() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(" ");

    // fungs untuk mengambil data dari endpoint
    const loadData = async () => {
        try {
            setLoading(true);
            setError(" ")
            const response = await getAllCategories();
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.log(error);
            setError(
                "gagal mengambil data Category"
            )
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        loadData();
    }, [])

    if (loading) {
        return <Loading />
    }
    const sortedData = [...data].sort(
        (a, b) => Number(a.id) - Number(b.id)
    );

    // fungsi untuk menghapus data kategori
    const handleDelete = async (id) => {
        const konfirmasi = window.confirm(
            "Apakah anda yakin ingin menghapus data ini?" 
        );
        if (!konfirmasi) {
            return;
        }
        try{
            await deleteCategory(id);
            alert("Data berhasil dihapus");
            loadData();
        }catch(error){
            console.error(error);
            alert("Gagal menghapus data")
            
        }
    }
    return (
        <section>
            <Link to="/category/tambah"
                className="btn btn-primary"> Tambah kategori</Link>
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover align-middle mb-0">
                            <thead className="table-dark">
                                <tr className="text-center">
                                    <th>NO</th>
                                    <th>NAMA</th>
                                    <th>DESKRIPSI</th>
                                    <th>AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedData.map((category, index) => (
                                    <tr key={category.id}>
                                        <td className="text-center">{index + 1}</td>
                                        <td>{category.name}</td>
                                        <td>{category.description}</td>
                                        <td className="text-center">
                                            <Link to={`/category/${category.id}`} 
                                            className="btn btn-sm btn-outline-warning m-1"
                                            title="Detail">
                                            <i className="bi bi-eye"></i>
                                            </Link>
                                            <Link to={`/category/edit/${category.id}`} 
                                            className="btn btn-sm btn-outline-warning m-1"
                                            title="Edit">
                                            <i className="bi bi-pencil"></i>
                                            </Link>
                                            <button
                                            onClick={() => handleDelete(category.id)}
                                            className="btn btn-sm btn-outline-danger m-1"
                                            title="Hapus">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Category;