const inputDDD = document.querySelector('#ddd');
inputDDD.addEventListener('change', procurarAPI);
cid = new Array();

function procurarAPI(e) {
    const ddd = e.target.value
    fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
    .then(respo => respo.json())
    .then(dado => {
        cid = dado.cities;
        listarCidades();
    })
}

function listarCidades() {
    l = document.querySelector('ul');
    l.textContent = '';
    cid.forEach(cid => {
        a = document.createElement('li');
        a.textContent = cid;
        l.append(a);
    })
}
