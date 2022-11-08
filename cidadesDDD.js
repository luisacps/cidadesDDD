document.querySelector("#ddd").addEventListener('change', procurarAPI);
c = new Array();

function procurarAPI(algo) {
    fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd.target.value}`)
    .then(res => res.json())
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
