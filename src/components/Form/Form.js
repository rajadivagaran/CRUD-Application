import React,{useState,useContext} from "react";
import { TableDetailsContext } from "../Data/Table";
import './Form.css'

const Form = () =>{
    const [edit,setEdit] =  useState(false)
    const [Data, setData] = useState({id:"",firstName:"",lastName:""})
    const [error, setError] = useState(false);
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const number = /[0123456789]/;
    // console.log(Data);
    const data = useContext(TableDetailsContext);
    const tabledata = data.data;
    const addTableData = data.detailsDispatch;
    // console.log(error);
    const dispatch = (ev) =>{
        setError(false);
        // ev.preventdefault();
        if(Data.id == "" || Data.firstName == "" || Data.lastName == "")
        {
            setError(true);
        }
        else if( !(number.test(Data.id)) ||format.test(Data.id) || format.test(Data.firstName) || format.test(Data.lastName))
        {
            setError(true);
        }
        else{

            addTableData({type:'Add',newData:Data});
            setData({id:"",firstName:"",lastName:""})
        }
    }
    return(
        <div className="formField">

            <form className="inputForm">
                <label className="label">
                    Employee ID:
                    <input type="text" className="id" title="id" value={Data.id} disabled={edit} onChange={(e)=>setData({...Data,id:e.target.value})} />
                </label>
                <label className="label">
                    FirstName:
                    <input type="text" className="firstName" title="firstName" value={Data.firstName} onChange={(e)=>setData({...Data,firstName:e.target.value})}/>
                </label>
                <label className="label">
                    LastName:
                    <input type="text" className="lastName" title="lastName" value={Data.lastName} onChange={(e)=>setData({...Data,lastName:e.target.value})}/>
                </label>
                <button type="button" onClick={dispatch} className="addButton">ADD</button>
                {error && <p className="warning">Enter Valid Details</p>}
            </form>
        </div>
    )
}
export default Form;