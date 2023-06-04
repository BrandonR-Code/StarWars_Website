let searchInput = document.getElementById('search');

document.getElementById('random').addEventListener('click', function() {

});
document.getElementById('all'),
addEventListener('click', function() {

})

searchInput.addEventListener('keyup', function() {

});
function fetchRandomCharacter() {
    let randomID = Math.floor(Math.random() * 9) + 1;
    console.log(randomID)
    fetch('https://swapi.dev/api/${randomID}/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('character').innerHTML = `<h2>${data.name}<h2>
        <p>Height: ${data.height}cm</p>
        <p>Mass: ${data.mass}kg</p>
        <p>Hair color: ${data.hair_color}</p>
        <p>Skin Color: ${data.skin_color}</p>
        <p>Eye Color: ${data.eye_color}</p>
        <p>Birth Year: ${data.birth_year}</p>
        <p>Gender: ${data.gender}</p>`;
    })
    .catch(error => console.log('Errpr: ', error));
}