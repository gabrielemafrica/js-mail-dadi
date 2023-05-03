//seleziono il bottone

const tiradado = document.getElementById('tiradado');

//tirare il dado
tiradado.addEventListener('click',
    function() {
        //genero unamero user
        let numeroDadoUser = Math.floor(Math.random() * 6) + 1;
       


        //genero unamero pc
        let numeroDadoPc = Math.floor(Math.random() * 6) + 1;


        console.log(`il numero user é ${numeroDadoUser}`);
        console.log(`il numero del PC é ${numeroDadoPc}`);

       if (numeroDadoUser > numeroDadoPc) {
            console.log(`HAI VINTO!`);
       }else if (numeroDadoUser < numeroDadoPc) {
            console.log(`HAI PERSO!`);
       }else {
            console.log(`PAREGGIO`);
       }

    }

)