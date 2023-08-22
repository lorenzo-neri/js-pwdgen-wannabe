//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato, che va formattato in questo modo: nomecognomecolorepreferito23

//strumenti

/* 
- prompt
- document.getElementById
- console.log
*/

//chiedere il nome utente
const userFirstName = prompt('Ciao, per favore, inserisci il tuo nome');

//chiedere il cognome utente
const userLastName = prompt ('Adesso, inserisci il tuo cognome');

//chiedere il colore preferito
const userFavouriteColor = prompt ('Ci siamo quasi, inserisci il tuo colore preferito');

//selezionare i tag tramite id in cui inserire i risultati
const passwordElement = document.getElementById('password_generator');
console.log(passwordElement);

//stampare il risultato in console
console.log(`${userFirstName + userLastName + userFavouriteColor}23`)

//stampare il risultato in pagina
passwordElement.innerHTML = `${userFirstName + userLastName + userFavouriteColor}23`
