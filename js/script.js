for (let i = 0; i < 100; i++) {
    /* seleziono ul */
   const ul = document.querySelector('ul');
   /* creo li */
   const li = document.createElement('li');
   /* do il contenuto di i (numero) al li nel file HTML */
   li.innerHTML = i;
   /* aggiungo li al ul che è il genitore */
   ul.append(li);
}