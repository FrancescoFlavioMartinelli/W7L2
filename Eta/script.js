function Utente(_nome, _cognome, _data) {
    //impostare le proprietà
    this.nome = _nome
    this.cognome = _cognome
    this.data =  new Date(_data)

    //impostare i metodi
    this.aggiungiRiga = function () {
        //aggiunta alla tabella
        let tr = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdCognome = document.createElement("td");
        let tdEta = document.createElement("td");
        tdNome.innerText = this.nome;
        tdCognome.innerText = this.cognome;
        //calcolo dell'età
        tdEta.innerText = this.calcolaEta();
        // tr.appendChild(tdNome)
        // tr.appendChild(tdCognome)
        // tr.appendChild(tdEta)
        tr.append(tdNome, tdCognome, tdEta);
        let table = document.getElementById("table")
        table.append(tr);
    }

    this.calcolaEta = ()=>{

        // let d = new Date(this.data);
        // let annoData = d.getFullYear();
        let annoData = this.data.getFullYear();

        let today = new Date();
        let annoToday = today.getFullYear();

        console.log(annoData, annoToday);
        let eta = annoToday - annoData;
        if(today.getMonth() < this.data.getMonth() || (today.getMonth() == this.data.getMonth() && today.getDate() < this.data.getDate())) {
            eta--
        }
        return eta;
    }
}

// func1()
// func()

// let func = () => {
//     console.log("F");
// }

// function func1() {
//     console.log("F1");
// }

//submit del form
let f = document.getElementById("form")
f.addEventListener("submit", (e) => {
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

    let u = new Utente(nome, cognome, data);
    u.aggiungiRiga();
})