// TODO: Image Search Engine

const searchForm = document.getElementById('searchForm');
const searchBox = document.querySelector('.search-input');
const searchResult = document.querySelector('.image-container');
const seeMoreBtn = document.querySelector('.see-more');

/*
    API key About Image Search Engine
    API key : lp1m_Mm0BbTViMQlcK6zJM_1OEN6ib1xhXXAN_UemUI
    API Link : https://api.unsplash.com/search/photos
*/

let keyword = 'office';
let page = 1;

async function searchImage() {
    let apiKey = 'lp1m_Mm0BbTViMQlcK6zJM_1OEN6ib1xhXXAN_UemUI';
    // keyword = searchBox.value;
    const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}`;

    let data;
    try {
        const request = await fetch(apiUrl);
        if (!request.ok) {
            throw new Error(`HTTP error! status: ${request.status}`);
        }
        data = await request.json();
    } catch (error) {
        console.error('Failed to fetch images:', error);
        data = { results: [] };
        console.log(data);
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchImage();
});
