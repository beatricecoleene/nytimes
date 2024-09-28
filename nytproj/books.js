const API_URL = 'http://localhost/khloris_/booksamp.json';
const Books = document.getElementById('books_main');

export const getbooks = async () => {
    try {
        const res = await fetch(API_URL);

        // Log the response status and headers for debugging
        console.log('Response status:', res.status);
        console.log('Response headers:', res.headers);

        if (!res.ok) {
            throw new Error('Network response was not ok: ' + res.statusText);
        }

        // Parse the response as JSON instead of text
        const data = await res.json();
        return data; // Return the parsed data
    } catch (e) {
        alert('Error: ' + e.message); // Show the error message
        return []; 
    }
};
const updateBooks = (data) => { 
    console.log('Books Data:', data);
    Books.innerHTML = '';

    if (!data.results || !Array.isArray(data.results.books) || data.results.books.length === 0) {
        console.error('No results or books found:', data);
        Books.innerHTML = '<p>No books available</p>';
        Books.style.backgroundColor = "white";
        return;
    }

    

    (data.results.book || []).forEach((book) => {
        Books.innerHTML=`
           
            <h5>Rank: ${book.rank}</h5>
            <h4>${book.title}</h4>
           
            <p>${book.description}</p>
           
        `;

        // Style the title and paragraph
        const titlebook = newbook.querySelector('h4');
        titlebook.style.fontFamily = '"Archivo Black", sans-serif';
        titlebook.style.color = '#0d1b31';

        const bhp = newbook.querySelector('p');
        bhp.style.fontFamily = '"Cambria", serif';
        bhp.style.color = 'black';
        bhp.style.fontWeight = '500';
        bhp.style.fontSize = '1.3rem';
    });
};

(async () => {
    const data = await getbooks();
    updateBooks(data);
})();
