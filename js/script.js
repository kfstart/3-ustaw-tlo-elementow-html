console.log('Warsztaty - ustaw tło elementów HTML');

const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.second');

    // po kliknięciu w przycisk dodaje klasy 'bg-red' i 'bg-yellow' ostylowane w style.css do paragrafów p1 i p2 z klasami 'first' i 'second'. Po ponownym kliknięciu w przycisk kolor tła paragrafów zmienia się na początkowy.
    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');
    
    // po kliknięciu w przycisk dodaje klasy 'bg-red' i 'bg-yellow' ostylowane w style.css do paragrafów p1 i p2 z klasami 'first' i 'second'.
    // p1.classList.add('bg-red');
    // p2.classList.add('bg-yellow');

    // po kliknięciu w przycisk zmienia style paragrafów p1 i p2 z klasami 'first' i 'second'.
    // p1.style.backgroundColor = 'red';
    // p2.style.backgroundColor = 'yellow';

}

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);

