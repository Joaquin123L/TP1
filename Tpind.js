var frases = [
    { id: 1, texto: "Esta es la frase 1" },
    { id: 2, texto: "Esta es la frase 2" },
    { id: 3, texto: "Esta es la frase 3" }
];

function FrasesAleatorias() {
    return frases[Math.floor(Math.random() * frases.length)];
}
document.getElementById("fraseRandom").textContent = FrasesAleatorias().texto;
document.getElementById("fraseRandom").classList.add("frase-" + FrasesAleatorias().id);


function fetchData(event) { 
    event.preventDefault(); 
    const apiUrl = event.target.getAttribute('data-api-url');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (apiUrl.includes('randomuser.me')) {
                mostrarDatosDeUsuario(data.results[0]);
            } else if (apiUrl.includes('quotable.io')) {
                mostrarDatosDeCita(data);
            }
        })
        .catch(error => {
            console.error('Error al recuperar datos de la API:', error);
        });
}

function mostrarDatosDeUsuario(user) {
    const mainContent = document.querySelector('.main');
    mainContent.innerHTML = ''; 

    const userDiv = document.createElement('div');
    userDiv.className = 'user';

    const name = document.createElement('h2');
    name.textContent = `${user.name.first} ${user.name.last}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${user.email}`;

    const location = document.createElement('p');
    location.textContent = `Location: ${user.location.city}, ${user.location.country}`;

    userDiv.appendChild(name);
    userDiv.appendChild(email);
    userDiv.appendChild(location);
    mainContent.appendChild(userDiv);
}

function mostrarDatosDeCita(pepe) {
    const mainContent = document.querySelector('.main');
    mainContent.innerHTML = '';

    const pepeDiv = document.createElement('div');
    pepeDiv.className = 'pep';

    const content = document.createElement('p');
    content.textContent = pepe.content;

    const author = document.createElement('p');
    author.textContent = `- ${pepe.author}`;

    pepeDiv.appendChild(content);
    pepeDiv.appendChild(author);
    mainContent.appendChild(pepeDiv);
}
