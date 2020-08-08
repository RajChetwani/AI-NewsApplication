import React,{ useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import { useState } from 'react';
import wordsToNumbers from 'words-to-numbers'
import NewsCards from './components/NewsCards/NewsCards';


const alanKey = '7eccb4a7995eac76cc510afaf71cffd62e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const [newsArticles,setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand : ({command,articles,number}) => {
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
          setActiveArticle(0);
        }else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
      }
    }
    })
  },[])

  return (
    <div className="App">
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
