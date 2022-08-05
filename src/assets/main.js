const API = 'https://jikan1.p.rapidapi.com/manga/2/characters';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '65ad8989bemshff6c18c96297dcep14d373jsn528ac787ef24',
		'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const charactersList = await fetchData(API);
        let characterPreview = `
        ${charactersList.characters.map(character => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${character?.image_url}" alt="${character?.role}" class="w-full" />
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${character.name}
                    </h3>
                </div>
            </div>
        `).join('')}
        `;
        content.innerHTML = characterPreview;
    } catch (error) {
        console.log(error);
    }
})();