const acheter = document.querySelector('.acheter');
const btnAjouter=document.querySelector('.add')
const btnFermer = document.querySelector('#sidebar-fermer');
const sidebar = document.querySelector('.sidebar');

acheter.addEventListener('click',()=>{
    sidebar.classList.add('active');
});

btnAjouter.addEventListener('click',()=>{
    sidebar.classList.add('active');
});

btnFermer.addEventListener('click',()=>{
    sidebar.classList.remove('active');
});