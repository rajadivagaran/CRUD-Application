import React,{useState, useEffect} from "react";
import PageNumbers from "./PageNumbers";





const Pagination = (data) =>{
    const post = data.posts;
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [lastPage,setLastPage]=useState();
    const current = (Math.ceil(post.length/5));

    let totalLength = 0;
    if(post){
        totalLength=post.length;
    }
    
    const indexofLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexofLastPost - postsPerPage;
    const currentPosts = post.slice(indexofFirstPost,indexofLastPost)
    
    useEffect(() => {
        data.addDetails(currentPosts);
    }, [currentPage])
    
    const paginate =(pageNumber) => setCurrentPage(pageNumber);
    const setpage = (val) => setLastPage(val);
    const stepup = (num) =>currentPage<lastPage && setCurrentPage(currentPage + num);
    const stepdown = (num) => currentPage>1 && setCurrentPage(currentPage - num);
    
    useEffect(()=>{
        setCurrentPage(current);
    },[current]);
    useEffect(() => {
        data.addDetails(currentPosts);
    }, [post])
    
    return(
        <div>
            {post.length >5 && <PageNumbers postsPerPage={postsPerPage} setpage={setpage} totalPosts={totalLength} paginate={paginate} stepup={stepup} stepdown={stepdown} onfocus={currentPage}></PageNumbers>}
        </div>
    )
}

export default Pagination;