
const API_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=97zXQe2xFEgof5GnbruLZzfXhuzsW9Qn';

const TopNews= document.getElementById('caption_');

const getpic=document.getElementById('pic')
const rn= document.getElementById("recent_news");

const rn1=document.getElementById("news_1");
const rn2=document.getElementById("news_2");


export const getTopNews= async () => {
    try{
        const info= await fetch(API_URL);
        const data= await info.json();

        return data;
    }

    catch(e){
        alert('error!', e);
        return []
    }
};

const updateContainer = (data) =>{
    TopNews.innerHTML= ' ';
   
    getpic.innerHTML = ''; 
    // (data.results || []).forEach((news)=> 
        const firstNews= data.results?.[0];
        const secondNews= data.results?.[1];
        const thirdNews= data.results?.[2];
        if (firstNews){
        const newsContainer = document.createElement('div');
        newsContainer.setAttribute('class', 'article');
        const imageUrl= firstNews.multimedia[0].url
        const imageurl2= secondNews.multimedia[1].url
        const imageurl3= thirdNews.multimedia[1].url

         getpic.innerHTML= `<h2>${firstNews.title}</h2><p>${firstNews.byline}</p>` ;
         rn.style.backgroundImage =`url("${imageUrl}") `;
         rn1.innerHTML= `<h3><img src="${imageurl2}" alt="news1"/><br>${secondNews.title}</h3>`;
         rn2.innerHTML= `<h4><img src="${imageurl3}" alt="news1"/><br>${thirdNews.title}</h4>`;
         

        TopNews.appendChild(newsContainer);



       
            


       

    //   const titleElement = newsContainer.querySelector('h2');
        
    //     titleElement.style.color='white';
        

        

    

     


        
    }else{
        TopNews.innerHTML= '<p>No recent news</p>';
    }


};

(async () => {
    const data= await getTopNews();
    updateContainer(data);
})();

function showHomepage(){
    document.getElementById('hp').style.display="grid";
    document.getElementById('recent_').style.display="none";

}

function showRecent(){
    document.getElementById('hp').style.display="none";
  
    document.getElementById('recent_').style.display="grid";
}




document.getElementById('homepage_h').addEventListener('click', (e)=>{
    e.preventDefault();
    showHomepage();
})

document.getElementById('recent_h').addEventListener('click', (e) =>{
    e.preventDefault();
    showRecent();
})




