import React,{useContext,useReducer,useState,useCallback, useMemo} from "react";
import Form from "../Form/Form";
import PrintData from "./PrintData";
import { initialState } from "./Reducer";
// import Reducer from "./Reducer";

export const TableDetailsContext = React.createContext([]);
export const TableDetailsProvider = TableDetailsContext.Provider;
export const TableDetailsConsumer = TableDetailsContext.Consumer;
const Table =() =>{
    
    const [Data, AddData] = useState([]);
    const reducer =useCallback((state,action) =>{
        switch(action.type){
            case 'Edit':
                AddData(action.DataArray);
                return state=Data;
                
            case 'Add':
                AddData([...Data,action.newData]);
                return state=Data;

            case 'Add':
                AddData(action.DataArray);
                return state=Data;
                    
            case 'Remove':
                AddData(action.DataArray);
                return state=Data;
                        
            default:
                return state;
                            
        }
    },[Data])
    const [tableDetails , dispatch] = useReducer(reducer, initialState)
    // console.log(tableDetails);
    const addDetails = useMemo(()=>{
        if(tableDetails){

            AddData(tableDetails);
        }
    },[tableDetails]);
    return(
        <div>

            <TableDetailsContext.Provider value={{data : Data, detailsDispatch : dispatch}}>
                <Form/>
                <PrintData/>
            </TableDetailsContext.Provider>

        </div>
    )
}

export default Table;