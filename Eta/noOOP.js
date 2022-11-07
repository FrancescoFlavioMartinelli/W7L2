//submit del form
let f = document.getElementById("form")
f.addEventListener("submit", (e)=> {
    e.preventDefault() //evita che il submit faccia ricaricare la pagina
    //e.target -> prende l'elemento che ha generato l'evento (form)
    //e.target[i] -> restituisce l'input alla posizione i
    console.log(e);

    //leggere i dati
    // let nome = document.getElementById("nome").value;
    let nome = e.target[0].value;
    let cognome = e.target[1].value;
    let data = e.target[2].value;
    console.log(nome, cognome, data);

    //aggiunta alla tabella
    let tr = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdCognome = document.createElement("td");
    let tdEta = document.createElement("td");
    tdNome.innerText = nome;
    tdCognome.innerText = cognome;
    //calcolo dell'età
    tdEta.innerText = data;
    // tr.appendChild(tdNome)
    // tr.appendChild(tdCognome)
    // tr.appendChild(tdEta)
    tr.append(tdNome, tdCognome, tdEta);
    let table = document.getElementById("table")
    table.append(tr);
})