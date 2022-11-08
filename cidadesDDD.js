document.querySelector("#ddd").addEventListener('change', procurarAPI);
c = new Array();

function procurarAPI(algo) {
    const ddd = algo.target.value
    fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
    .then(resposta => resposta.json())
    .then (dados => {
        c = dados.cities;
        listarCidades();
    });
}

function listarCidades() {
    l = document.querySelector('ul');
    l.textContent = '';
    city.forEach(c => {
        elemento = document.createElement('li');
        elemento.textContent = c;
        l.append(elemento);
    });
}
