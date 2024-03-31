const conteneur=document.getElementById('conteneur');
const inscriptionButton=document.getElementById('inscription');
const connexionButton=document.getElementById('connexion');

inscriptionButton.addEventListener('click', ()=> {
    conteneur.classList.add('panneau-active');
})
connexionButton.addEventListener('click', ()=> {
    conteneur.classList.remove('panneau-active');
})