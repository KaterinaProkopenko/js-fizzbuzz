for (let i = 1; i <= 100; i++) {
    /* seleziono ul */
   const ul = document.querySelector('ul');
   /* creo li */
   const li = document.createElement('li');
   /* do il contenuto di i (numero) al li nel file HTML */
   li.innerHTML = i;
   /* aggiungo li al ul che è il genitore */
   ul.append(li);

   if ((i % 3 == 0) && (i % 5 == 0)) {
    li.innerHTML = ('FizzBuzz');
    } else if (i % 5 == 0) {
       li.innerHTML = ('Buzz');
    } else if (i % 3 == 0) {
       li.innerHTML = ('Fizz');
    } else {
       console.log(i);
    }
}

