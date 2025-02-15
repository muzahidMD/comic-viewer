// xkcd api endpoint
const XKCD_API = 'https://xkcd.now.sh/?comic=';

// Get a random comic number(XKCD has over 2000 comic)
function getRandomComicNumber() {
    // return (Math.random);
    return Math.floor(Math.random() * 2000) + 1;
}

// fetch implementation
async function getRandomComicFetch() {
    const comicNumber = getRandomComicNumber();
    const img = document.getElementById('fetch-comic-img');
    const title = document.getElementById('fetch-comic-title');
    const desc = document.getElementById('fetch-comic-desc');

    try {
        const response = await fetch(`${XKCD_API}${comicNumber}`);
        const data = await response.json();

        img.src = data.img;
        img.alt = data.alt;
        img.classList.remove('hidden');
        title.textContent = data.title;
        desc.textContent = data.alt;
    } catch (error) {
        console.error('Comic Fetching Error:', error);
        title.textContent = 'Comic Loading Error';
        desc.textContent = 'Please try again';
        img.classList.add('hidden');
    }
}

// axios implementation
async function getRandomComicAxios() {
    const comicNumber = getRandomComicNumber();
    const img = document.getElementById('axios-comic-img');
    const title = document.getElementById('axios-comic-title');
    const desc = document.getElementById('axios-comic-desc');

    try {
        const response = await axios.get(`${XKCD_API}${comicNumber}`);
        const data = response.data;

        img.src = data.img;
        img.alt = data.alt;
        img.classList.remove('hidden');
        title.textContent = data.title;
        desc.textContent = data.alt;
    } catch (error) {
        console.error('Comic Fetching Error:', error);
        title.textContent = 'Comic Loading Error';
        desc.textContent = 'Please try again';
        img.classList.add('hidden');
    }

}


window.onload = () => {
    getRandomComicFetch();
    getRandomComicAxios();
}