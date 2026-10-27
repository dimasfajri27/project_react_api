import { useEffect, useState  } from "react";
import Loading from "../components/Loading";
import { deleteMovie, getAllMovie } from "../services/MovieServices";
import { Link } from "react-router-dom";

function Movie() {
    const [data, setData] = useState([]);
    const [loading, setLoading]  = useState(false);
    const [error, setError] = useState("");

    // fungsi unutk mengambil data dari endpoint
    const loadData = async () => {
        try{
            setLoading(true);
            setError("")
            const response = await getAllMovie();
            console.log(response.data);
            setData(response.data);
        }catch(error){
            console.log(error);
            setError(
                "Gagal mengambil data Movie"
            )
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        loadData();
    }, [])

    if(loading) {
        return <Loading/>
    }
    const sortir = [...data].sort(
        (a,b) => Number(a.id) - Number(b.id)
    );


    const handleDelete = async (id) => {
        const konfirmasi = window.confirm(
            "Apakah anda yakin ingin menghapus data ini?"
        );
        if(!konfirmasi) {
            return;
        }
        try{
            await deleteMovie(id);
            alert("Data berhasil dihapus");
            loadData();
        }catch(error){
            console.error(error);
            alert("Gagal menghapus data")
            
        }
    }
    return(
        <section>
            <Link to="/movie/tambah"
            className="btn btn-primary">Tambah Movie</Link>
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover align-middle mb-0">
                            <thead className="table-dark">
                                <tr className="text-center">
                                    <th>NO</th>
                                    <th>TITLE</th>
                                    <th>YEAR</th>
                                    <th>CATEGORY</th>
                                    <th>AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortir.map((items, index) =>(
                                    <tr key={items.id}>
                                        <td className="text-center">{index + 1}</td>
                                        <td>{items.title}</td>
                                        <td>{items.year}</td>
                                        <td>{items.caregoryName}</td>
                                        <td className="text-center">
                                            <Link to={`/movie/${items.id}`}
                                            className="btn btn-sm btn-outline-warning m-1"
                                            title="Detail">
                                                <i className="bi bi-eye"></i>
                                            </Link>
                                            <Link to={`/movie/edit/${items.id}`} 
                                            className="btn btn-sm btn-outline-warning m-1"
                                            title="Edit">
                                            <i className="bi bi-pencil"></i>
                                            </Link>
                                            <button
                                            onClick={() => handleDelete(items.id)}
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

export default Movie;