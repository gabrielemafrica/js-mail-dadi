//array di mail ammesse

const mailAdmitted = ["uno@mail.com", "due@mail.com", "tre@mail.com", "quattro@mail.com", "cinque@mail.com", "sei@mail.com"]

//scrivo le risposte

let rispostaSi = "mail riconosciuta, BENVENUTO ALLA FESTA!";
let rispostaNo = "mail sconosciuta, NON PUOI ENTRARE!";
let risposta = rispostaNo;

//chiado all'utente la mail

//const mailUser = prompt("Inserisci la tua mail");
//console.log(mailUser);



//verifico mail

//ciclo le mail ammesse

// for (let index = 0; index < mailAdmitted.length; index++) {

//     const mailElement = mailAdmitted[index];
    

//         //mail trovata
//     if (mailUser === mailElement) {

//         risposta = rispostaSi;
//     } 


// }
//     console.log(risposta);


    //seleziono il bottone

    const button = document.getElementById('invia');

    //aggancio evento al bottone

    button.addEventListener(
        'click',
        function() {
            //prendo la mail inserita
            const mailUser = document.getElementById('mail').value;

            for (let index = 0; index < mailAdmitted.length; index++) {

                const mailElement = mailAdmitted[index];
                
            
                    //mail trovata
                if (mailUser === mailElement) {
            
                    risposta = rispostaSi;
                }
            
            
            }
             //risposta
            //prendo container

            const containerDomanda = document.getElementById('container');
            const containerRisposta = document.getElementById('container_risposta');
            const container2 = document.getElementById('container2');
            //creo titolo
            const answer = document.createElement('h1');
            //assegno al titolo la risposta
            answer.append(risposta);
            //inserisco la risposta nel container
            containerRisposta.append(answer);

            //visualizzo il container
            container2.style.display = 'flex';
            
            //faccio sparire l'input
            containerDomanda.style.display = 'none';

            console.log(risposta);

        //bottone di ripristino

            //seleziono il bottono

            const buttonRipristino = document.getElementById('clear');

            //assegno evento

            buttonRipristino.addEventListener(
                'click',
                function() {
                    location.reload();
                    


                }

            )

            
        }
    )

