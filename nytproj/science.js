const API_URL= 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=K5zsJoRkJJVRrQFqJTEJu5fKWovOs4zY';


const S_title= document.getElementById('sttl');
const S_Pic=document.getElementById('pic-s');
const Left= document.getElementById('left');
const Right = document.getElementById('right');
const S_others=document.getElementById('sothers');
const Button_S= document.getElementById('bttn_sc');

const H_title= document.getElementById('httl');
const H_Pic=document.getElementById('pic-h');
const H_Left= document.getElementById('hleft');
const H_Right = document.getElementById('hright');
const H_others=document.getElementById('h_others');
const Button_H= document.getElementById('bttn_h');


const G_title= document.getElementById('gwttl');
const G_Pic=document.getElementById('pic-gw');
const G_Left= document.getElementById('gwleft');
const G_Right = document.getElementById('gwright');
const G_others=document.getElementById('gwothers');
const Button_G= document.getElementById('bttn_gw');



let currentIndex=0;
let scienceNews=[];

let healthindex=0;
let healthNews=[];

let gwindex=0;
let gwNews=[];


export const getScience = async () =>{
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

const updateScience = (data) =>{

    scienceNews = data.results.filter(news => news?.section ==="science");
    healthNews = data.results.filter(news => news?.section ==="health");
    gwNews = data.results.filter(news => news?.section ==="climate");

    
    if (scienceNews.length > 0){

        displayNews(scienceNews[currentIndex]);

    }

    if(healthNews.length >0){
        displayHealth(healthNews[healthindex]);
    }
    if(gwNews.length >0){
        displayGW(gwNews[gwindex]);
    }
    
    else{
        alert('No Science News');
    }

    // if (Array.isArray(data.results)){
    //     data.results.forEach((news)=>{

    //         const ImageUrl= news?.multimedia[0].url;

    //         if(news?.section ==="science"){

    //             S_title.innerHTML= news?.section;
    //             S_Pic.style.backgroundImage= `url("${ImageUrl}")`;
    //             S_Pic.style.backgroundSize= 'cover';
    //             S_Pic.style.backgroundPosition= 'center';
    //             S_Pic.style.backgroundRepeat='no-repeat';
    //             S_Pic.innerHTML = `<h3>${news?.title || 'No Title'}</h3>`;


                
        
    };

const displayNews = (news) => {
    const ImageUrl= news?.multimedia[0].url;

    S_title.innerHTML= news?.section;
    S_Pic.style.backgroundImage= `url("${ImageUrl}")`;
    S_Pic.style.backgroundSize= 'cover';
    S_Pic.style.backgroundPosition= 'center';
    S_Pic.style.backgroundRepeat='no-repeat';
    S_Pic.innerHTML = `
    <h3>${news?.title || 'No Title'}</h3>
    <p>${news?.byline}</p>
    <p>${news?.abstract}</p>
    `;

    Button_S.addEventListener('click' ,() =>{
        window.location.href= news?.url;
    })

};

    

const displayHealth = (news) => {
    const ImageUrl= news?.multimedia[0].url;

    H_title.innerHTML= news?.section;
    H_Pic.style.backgroundImage= `url("${ImageUrl}")`;
    H_Pic.style.backgroundSize= 'cover';
    H_Pic.style.backgroundPosition= 'center';
    H_Pic.style.backgroundRepeat='no-repeat';
    H_Pic.innerHTML = `
    <h3>${news?.title || 'No Title'}</h3>
    <p>${news?.byline}</p>
    <p>${news?.abstract}</p>
    `;

    Button_H.addEventListener('click' ,() =>{
        window.location.href= news?.url;
    })

};  

const displayGW = (news) => {
    const ImageUrl= news?.multimedia[0].url;

    G_title.innerHTML= news?.section;
    G_Pic.style.backgroundImage= `url("${ImageUrl}")`;
    G_Pic.style.backgroundSize= 'cover';
    G_Pic.style.backgroundPosition= 'center';
    G_Pic.style.backgroundRepeat='no-repeat';
    G_Pic.innerHTML = `
    <h3>${news?.title || 'No Title'}</h3>
    <p>${news?.byline}</p>
    <p>${news?.abstract}</p>
    `;

    Button_G.addEventListener('click' ,() =>{
        window.location.href= news?.url;
    })
     
     

    


    
};

Right.addEventListener('click', () =>{
    if(scienceNews.length>0){
        currentIndex = (currentIndex +1)%scienceNews.length;
        displayNews(scienceNews[currentIndex]);
    }

});

Left.addEventListener('click', () => {
    if (scienceNews.length > 0) {
        currentIndex = (currentIndex - 1 + scienceNews.length) % scienceNews.length; // Loop to the last news if at the beginning
        displayNews(scienceNews[currentIndex]);
    }
    
});



H_Right.addEventListener('click', () =>{
    if(healthNews.length>0){
        healthindex = (healthindex +1)%healthNews.length;
        displayHealth(healthNews[healthindex]);
    }

});

H_Left.addEventListener('click', () => {
    if (healthNews.length > 0) {
        healthindex = (healthindex - 1 + healthNews.length) % healthNews.length; // Loop to the last news if at the beginning
        displayHealth(healthNews[healthindex]);
    }
    
});



G_Right.addEventListener('click', () =>{
    if(gwNews.length>0){
        gwindex = (gwindex +1)%gwNews.length;
        displayGW(gwNews[gwindex]);
    }

});

G_Left.addEventListener('click', () => {
    if (gwNews.length > 0) {
        gwindex = (gwindex - 1 + gwNews.length) % gwNews.length; // Loop to the last news if at the beginning
        displayGW(gwNews[gwindex]);
    }
    
});







(async () =>{
    const data = await getScience();
    console.log(data);
    updateScience(data);
})();
