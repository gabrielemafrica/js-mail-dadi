//seleziono il bottone

const tiradado = document.getElementById('tiradado');

//prendo i contenitori

const risultatoUser = document.getElementById('risultatoUser');
const risultatoPc = document.getElementById('risultatoPc');
const risultato = document.getElementById('risultato');

//tirare il dado
tiradado.addEventListener('click',
    function() {
        //genero numero user
        let numeroDadoUser = Math.floor(Math.random() * 6) + 1;
       


        //genero numero pc
        let numeroDadoPc = Math.floor(Math.random() * 6) + 1;

        //risultato user
        const nuovoNumUser = `<h1>${numeroDadoUser}</h1>`;
        risultatoUser.innerHTML = nuovoNumUser;
        //risultato pc
        const nuovoNumPc = `<h1>${numeroDadoPc}</h1>`;
        risultatoPc.innerHTML = nuovoNumPc;


        console.log(`il numero user é ${numeroDadoUser}`);
        console.log(`il numero del PC é ${numeroDadoPc}`);

        //vice user
       if (numeroDadoUser > numeroDadoPc) {
        const vittoria = `<h1>HAI VINTO!</h1>`;
        risultato.innerHTML = vittoria;

            console.log(`HAI VINTO!`);
        //vince pc
       }else if (numeroDadoUser < numeroDadoPc) {
        const vittoria = `<h1>HAI PERSO!</h1>`;
        risultato.innerHTML = vittoria;
            console.log(`HAI PERSO!`);
        //pareggio
       }else {
            const vittoria = `<h1>PARI!</h1>`;
            risultato.innerHTML = vittoria;
            console.log(`PAREGGIO`);
       }

    }

)