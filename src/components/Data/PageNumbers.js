import react,{useState, useEffect} from "react";
import { Nav } from "react-bootstrap";
import './PageNumber.css'


const PageNumbers = ({postsPerPage, totalPosts, paginate,setpage, stepup, stepdown,onfocus}) =>{

    const [className,setClassName]= useState("page-link-num");
    const pageNumbers = [];
    for(let i=1;i <= Math.ceil(totalPosts/postsPerPage);i++){ 
        pageNumbers.push(i);
        setpage(pageNumbers.length);
    }
    console.log(onfocus);
    useEffect(() => {
        pageNumbers.map((val)=>{
            if(val == onfocus){

                setClassName("backfocus");
            }
        })
    })



    return (
        <div>
            <ul className="pagination">
                <Nav.Link  className='page-link' onClick={()=>stepdown(1)}>{`<<Prev`}</Nav.Link>
                {pageNumbers.map((number) =>{
                    return(
                        <li key={number} className="page-item"> 
                            <Nav.Link onClick={()=>paginate(number)}  className={number == onfocus ? className: "page-link-num"}>{number}</Nav.Link>
                        </li>
                    )
                })}
                <Nav.Link className='page-link' onClick={()=>stepup(1)}>{`Next>>`}</Nav.Link>
            </ul>
        </div>
    )
}
export default PageNumbers;
