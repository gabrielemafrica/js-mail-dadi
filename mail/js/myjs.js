//array di mail ammesse

const mailAdmitted = ["uno@mail.com", "due@mail.com", "tre@mail.com", "quattro@mail.com", "cinque@mail.com", "sei@mail.com"]

//chiado all'utente la mail

const mailUser = prompt("Inserisci la tua mail");
//console.log(mailUser);


//verifico mail

//ciclo le mail ammesse

for (let index = 0; index < mailAdmitted.length; index++) {

    const mailElement = mailAdmitted[index];
    // console.log(mailElement);

    if (mailUser == mailElement) {
        console.log(`mail ${mailUser} riconosciuta, BENVENUTO ALLA FESTA!`);
    }
    else if (mailUser != mailElement){
        console.log(`mail ${mailUser} sconosciuta, NON PUOI ENTRARE!`);
    }

}