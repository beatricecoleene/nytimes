const API_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=97zXQe2xFEgof5GnbruLZzfXhuzsW9Qn';

const hpcont= document.getElementById('content_hp');
const sc_cont = document.getElementById('contentsc');

export const getpopular= async () =>{
    try{
        const res = await fetch(API_URL);
        const data= await res.json();
        return data;
    
    }catch(e){
        alert('error!' , e);
        return []; 
    }

};
 




const update_maincont =(data) =>{
    
    (data.results || []).forEach((news)=>{
        const hp_content= document.createElement('div');
        hp_content.setAttribute('class', 'hp_cont');
        hp_content.innerHTML=`  <a href='${news?.url}'><p id= "sectionsub" style= "text-transform: capitalize; color:#131959">${news?.section}: ${news?.subsection}</p>
            <h3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!>${news?.title}</h3></a>`;


        hp_content.addEventListener('click', () =>{
            window.location.href= news?.url;


        })


        hpcont.appendChild(hp_content);
        // hpcont.appendChild(sc_cont);

    }
    

        
    )

};

const update_sciencecont = (data) => {
    (data.results || []).forEach((news) => {
        const sc_content = document.createElement('div');
        sc_content.setAttribute('class', 'sc_cont');
        sc_content.innerHTML = `
            <a href='${news?.url}'>
                <p id="sectionsub" style="text-transform: capitalize; color:#131959">
                    ${news?.section}: ${news?.subsection}
                </p>
                <h3>${news?.title}</h3>
            </a>
        `;

        sc_content.addEventListener('click', () => {
            window.location.href = news?.url;
        });

        sc_cont.appendChild(sc_content);  // Append to the science content section
    });
};

(async () =>{
    const data = await getpopular();
    console.log(data);
    update_maincont(data);
    update_sciencecont(data);
})();

