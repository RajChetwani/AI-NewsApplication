import React,{useState,useEffect,createRef} from 'react'
import './styles.css'

const NewsCard = ({article:{description,source,title,url,urlToImage,publishedAt},i,activeArticle}) => {
  const [elRefs, setElRefs] = useState([]);  

  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
   
  useEffect(() => {
    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);
  
  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
      <div className="col-md-4" ref={elRefs[i]}>
        <div className="card">
        <img className="card-img-top" src={ urlToImage || "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-2.jpg"} alt="media"/>
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{ description!== null && description.length > 0 ? (description).substring(0,250):null}</p>
        </div>
        <p className="publish">{(new Date(publishedAt)).toDateString()}</p>
       <span>
        <a href={url} className="card-link text-danger read">Read More</a>
        <p className="num">{i}</p>
       </span> 
        { activeArticle === i ? (<div  style={{height:'15px',backgroundColor:'red'}}></div>) : null}
    </div>
      </div>  
    )
}

export default NewsCard
