import { useEffect,useState } from "react"
import Loading from "../components/Loading.jsx";
import { getAllCategories } from "../services/KategoriServices";

function Category() {
    const [ data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(" ");

    // fungs untuk mengambil data dari endpoint
    const loadData = async()=>{
        try{
            setLoading(true);
            setError(" ")
            const response = await getAllCategories();
            console.log(response.data);
            setData(response.data);
        }catch(error){
            console.log(error);
            setError(
                "gagal mengambil data Category"
            )
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        loadData();
    },[])

    if(loading){
        return <Loading/>
    }
    return(
        <section>
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover align-middle mb-0">
                            <thead className="table-dark">
                                <tr className="text-center">
                                    <th>NO</th>
                                    <th>NAMA</th>
                                    <th>DESKRIPSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) =>(
                                     <tr key={item.id || index}>
                                        <td className="text-center">{index+1}</td>
                                        <td className="text-center">{item.name}</td>
                                        <td>{item.description}</td>
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