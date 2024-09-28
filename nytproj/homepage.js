
// TODO: enable this and remove line 5
// const API_URL =
// 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key={token}';

const API_URL='https://api.nytimes.com/svc/topstories/v2/home.json?api-key=97zXQe2xFEgof5GnbruLZzfXhuzsW9Qn';

const HomePage = document.getElementById('homepage_div');
const DivHp= document.getElementById('divhp');
// const hpcont= document.getElementById('content_hp');
export const gethp= async () =>{
    try{
        const res = await fetch(API_URL);
        const data= await res.json();
        return data;
    
    }catch(e){
        alert('error!' , e);
        return []; 
    }

}; 

const updateHomepage = (data) => { 
    // hp_sub.innerHTML=``;

    (data.results || []).forEach((news,index)=>{
        const imageUrl= news?.multimedia[1].url
      

        const newcont= document.createElement('div');
        newcont.setAttribute('class', 'hp_div');
        newcont.innerHTML=`
            <h1 id= "sectionsub" style= "text-transform: capitalize;">${news?.section}: ${news?.subsection}</h1>
            <h3>${news?.title}</h3>
            <p id="by">${news?.byline}</p>
            <img src="${imageUrl}" alt="news_img" />
           
            <p style="color: black;">${news?.abstract}</p>
          
            `;

           
         
 
        HomePage.appendChild(newcont);


        
        const targetDiv = index<11? HomePage:DivHp;
        targetDiv.appendChild(newcont);
       
       
        

        const titlehp = newcont.querySelector('h3');
        titlehp.style.fontFamily = '"Archivo Black", sans-serif';
        titlehp.style.color='#0d1b31'

        const php = newcont.querySelector('p');
        php.style.fontFamily = '"Cambria", serif';
        php.style.color='black';
        php.style.fontWeight='500';
        php.style.fontSize='1.4rem';

    });
};

(async () =>{
    const data = await gethp();
    console.log(data);
    updateHomepage(data);
})();


// const update_maincont =(data) =>{
    
//     (data.results || []).reverse().forEach((news)=>{
//         const hp_content= document.createElement('div');
//         hp_content.setAttribute('class', 'hp_cont');
//         hp_content.innerHTML=`  <p id= "sectionsub" style= "text-transform: capitalize; color:#131959">${news?.section}: ${news?.subsection}</p>
//             <h3>${news?.title}</h3>`;
//         hpcont.appendChild(hp_content);

//     }
        
//     )

// };

// (async () =>{
//     const data = await gethp();
//     console.log(data);
//     update_maincont(data);
// })();
