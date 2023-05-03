//array di mail ammesse

const mailAdmitted = ["uno@mail.com", "due@mail.com", "tre@mail.com", "quattro@mail.com", "cinque@mail.com", "sei@mail.com"]

//chiado all'utente la mail

const mailUser = prompt("Inserisci la tua mail");
//console.log(mailUser);

//scrivo le risposte

let rispostaSi = "mail riconosciuta, BENVENUTO ALLA FESTA!";
let rispostaNo = "mail sconosciuta, NON PUOI ENTRARE!";
let risposta = rispostaNo;

//verifico mail

//ciclo le mail ammesse

for (let index = 0; index < mailAdmitted.length; index++) {

    const mailElement = mailAdmitted[index];
    // console.log(mailElement);

        //mail trovata
    if (mailUser === mailElement) {

        risposta = rispostaSi;
    } 


}
    console.log(risposta);