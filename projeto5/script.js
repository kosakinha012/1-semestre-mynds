const getData = async () => {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const formatted = searchInput.replace(/\s+/g, '-')
    const animeList = document.getElementById("animeList");

    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${formatted}`);
        const resData = await res.json();

        if (resData.data) {
            const animeResults = resData.data;
            animeList.innerHTML = "";

            animeResults.forEach((anime) => {
                const animeTitle = anime.title;
                const animeSynopsis = anime.synopsis;
                const animeImage = anime.images.jpg.image_url;

                
                const animeElement = document.createElement("div")
                animeElement.innerHTML = `
                    <h2>${animeTitle}</h2>
                    <div class="conteudo-anime">
                        <div> <img src="${animeImage}" alt="${animeImage}" Image> </div>
                        <div class="texto-sinopse"> <p>${animeSynopsis}</p> </div>
                    </div>
                `;
                animeList.appendChild(animeElement);
            })
        } else {
            animeList.innerHTML = "No results found";
        }
    } catch {
        console.error("error fetching data:", error);
        animeList.innerHTML = "An error occurred while fetching data.";
    }
}