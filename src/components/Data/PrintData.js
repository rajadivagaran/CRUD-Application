import React,{useContext, useState, useEffect} from "react";
import { TableDetailsContext } from "./Table";
import './PrintData.css'
import Pagination from "./Pagination";

const PrintData = ()=>{
    const data = useContext(TableDetailsContext);
    const tabledata = data.data;
    const addTableData = data.detailsDispatch;
    const [edit, setEdit] = useState(true);
    const [updatedInfo, setUpdatedInfo]= useState({id:"",firstName:"",lastName:""})
    const [showValue, setShowValue] = useState("");
    const testArray = [];
    const [posts, setPosts] = useState([]);


    const changeEdit = (ID) =>{
        const EditArray = tabledata.filter((data)=>{
            if(data.id==ID)
            {
                setShowValue(ID);
                setEdit(false);
                return data;
            }
        })

    }

    const changeApply = (ID) =>{
        const EditApply = tabledata.filter((data)=>{
            if(data.id == ID)
            {
                testArray.push(updatedInfo);
                return updatedInfo;
            }
            else{
                testArray.push(data);
                return data;
            }
        })
        addTableData({type:"Apply",DataArray:testArray})
        setEdit(true);
        setShowValue("");
    }

     const Remove = (ID) =>{
                const updatedArray = tabledata.filter((data)=>{
                    if(data.id!==ID)
                    {
                        return data
                    }
                })
         
             addTableData({type:"Remove",DataArray:updatedArray})
     }
     const addDetails = (post) =>{
         setPosts(post);
     }
    return(
        <div className="tableDisplay">
            <div className="tableLabel">
                <label>List View</label>
            </div>
            <div className="infoTable">
                <table className="tableData">
                    <div className="tableHeadings">

                    <tr className="heading">
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Actions</th>
                        <th>Delete</th>
                    </tr>
                    </div>
                    {tabledata.length <=5 ? tabledata.map ((value , index)=>{
                        return(
                            <div className="content">
                            <tr key={value.id} className="tableRows" >
                                    <td ><input type="text" defaultValue={value.id} className="tableId" disabled={value.id == showValue? false :true} 
                                    onChange={(e)=>setUpdatedInfo({...updatedInfo,id:e.target.value})}/></td>


                                    <td ><input type="text" defaultValue={value.firstName} title="tableFirstName" className="tableFirstName" disabled={value.id == showValue? false :true}
                                    onChange={(e)=>setUpdatedInfo({...updatedInfo,firstName:e.target.value})}/></td>

                                    <td ><input type="text" defaultValue={value.lastName} className="tableLastName" disabled={value.id == showValue? false :true}
                                    onChange={(e)=>setUpdatedInfo({...updatedInfo,lastName:e.target.value})}/></td>
                                    <td>
                                        <div>
                                            <button onClick={changeEdit.bind(this,value.id)} disabled={edit == true ? false : true} className="editButton">Edit</button>
                                            <button onClick={changeApply.bind(this,(value.id))}disabled={value.id == showValue ? false: true} className="applyButton">Apply</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <button type="button" onClick={Remove.bind(this,value.id)} className="removeButton">Remove</button>
                                        </div>
                                    </td>
                                </tr>
                                </div>
                            )

                    }):posts.map ((value , index)=>{
                        return(
                            <div className="content">
                            <tr key={value.id} className="tableRows" >
                                    <td ><input type="text" defaultValue={value.id} className="tableId" disabled={value.id == showValue? false :true} 
                                    onChange={(e)=>setUpdatedInfo({...updatedInfo,id:e.target.value})}/></td>


                                    <td ><input type="text" defaultValue={value.firstName} title="tableFirstName" className="tableFirstName" disabled={value.id == showValue? false :true}
                                    onChange={(e)=>setUpdatedInfo({...updatedInfo,firstName:e.target.value})}/></td>

                                    <td ><input type="text" defaultValue={value.lastName} className="tableLastName" disabled={value.id == showValue? false :true}
                                    onChange={(e)=>setUpdatedInfo({...updatedInfo,lastName:e.target.value})}/></td>
                                    <td>
                                        <div>
                                            <button onClick={changeEdit.bind(this,value.id)} disabled={edit == true ? false : true} className="editButton">Edit</button>
                                            <button onClick={changeApply.bind(this,(value.id))}disabled={value.id == showValue ? false: true} className="applyButton">Apply</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <button type="button" onClick={Remove.bind(this,value.id)} className="removeButton">Remove</button>
                                        </div>
                                    </td>
                                </tr>
                                </div>
                            )

                    })}
                </table>
                <Pagination posts = {tabledata} addDetails={addDetails}/>
            </div>
        </div>
    )

}

export default PrintData;