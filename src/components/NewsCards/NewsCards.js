import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import Home from '../Home/Home'
import '../Home/home.css'

const NewsCards = ({articles,activeArticle}) => {
 if(!articles.length){
     return <Home />
 }
 return (
     <div className="container">
        <div className="row no-gutters mx-auto">
            <div className="col-sm-6" style={{paddingLeft:'120px'}}>
                <div className="card card1"  style={{backgroundColor:'#394989',height:'140px',width:'320px'}}>
                    <h4 style={{marginBottom:'30px',fontWeight:'bold',textAlign:'center',marginTop:'10px'}}>To Open an Article</h4>
                    <h4 className="publish1">Try Saying:</h4>
                    <p className="inst" style={{paddingBottom:'20px'}}>Open Article number 4</p>
                </div>
            </div>
            <div className="col-sm-6" style={{marginLeft:'0px',paddingLeft:'120px'}}>
                <div className="card card1" style={{backgroundColor:'#3b6978',height:'140px',width:'320px'}}>
                    <h4 style={{marginBottom:'30px',fontWeight:'bold',textAlign:'center',marginTop:'10px'}}>To return to Homepage</h4>
                    <h4 className="publish1">Try Saying:</h4>
                    <p className="inst" style={{paddingBottom:'20px'}}>Go back</p>
                </div>
            </div>
            <div className="row">
                    {articles.map((article,i) => (
                        <NewsCard article={article} activeArticle={activeArticle} i={i+1} key={i+1}/>
                    ))}
            </div>
    </div>
 </div>
    )
}

export default NewsCards
