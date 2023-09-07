fetch("https://pokeapi.co/api/v2/pokemon")
.then(function(response) {
    if (response.status === 200) {
        return response.json()
    } else {
        document.body.innerHTML += "Ups, noget gik galt. Prøv igen"
    }
})
.then(function(data) {
    const UL = document.querySelector(".pokamon__list")
    data.results.forEach(function(result) {
        const LI = document.createElement("li")
        LI.innerHTML = `<a href="/pokedex.html?name=${result.name}">${result.name}</a>`
        UL.append(LI)
    })
})