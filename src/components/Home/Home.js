import React from 'react'
import './home.css'
import news from '../../newsimg.jpg'

const Home = () => {
    return (
        <div className="container">
        <div style={{height:'200px',textAlign:'center',marginTop:'50px',marginBottom:'60px'}}>
            <div className=" container">
                <img src={news} alt="media" style={{height:'250px',borderRadius:'15px',width:'500px'}}/>
            </div>
        </div>
        <div className="row no-gutters mx-auto">
            <div className="col-sm-3">
                <div className="card card1"  style={{backgroundColor:'#394989'}}>
                    <div className="card-body body1">
                        <p className="card-title title1">Latest News</p>
                    </div>
                    <h4 className="publish1">Try Saying:</h4>
                    <p className="inst">Give me the latest news</p>
                </div>
            </div>
            <div className="col-sm-3" style={{marginLeft:'0px'}}>
                <div className="card card1" style={{backgroundColor:'#3b6978'}}>
                    <div className="card-body">
                        <h4 className="card-title title1">News by Sources</h4>
                        <div className="card-text text1">
                            <p className="para">Sources:</p>
                            <p>CNN,BBC News,Wired,Buzzfeed...</p>
                        </div>
                    </div>
                    <h4 className="publish1">Try Saying:</h4>
                    <p className="inst">Give me the news from CNN</p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card card1" style={{backgroundColor:'#111d5e'}}>
                    <div className="card-body body1">
                        <h4 className="card-title title1">News by Categories</h4>
                        <div className="card-text text1">
                            <p className="para">Categories:</p>
                            <p>Business,Entertainment,Sports,General,Health,Science</p>
                        </div>
                    </div>
                    <h4 className="publish1">Try Saying:</h4>
                    <p className="inst">Give me the latest Sports news</p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card card1" style={{backgroundColor:'#654062'}}>
                    <div className="card-body body1">
                        <h4 className="card-title title1">News by Terms</h4>
                        <div className="card-text text1">
                            <p className="para">Terms:</p>
                            <p>Bitcoin,PlayStation,Smartphones...</p>
                        </div>
                    </div>
                    <h4 className="publish1">Try Saying:</h4>
                    <p className="inst">What's up with Bitcoin</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home
