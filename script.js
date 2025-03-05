// Evento para revelar a surpresa e as ideias de date
document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('surprise').classList.remove('hidden');
    document.getElementById('dateIdea').classList.remove('hidden');
});

// Função para escolher a ideia de date
function chooseDate(option) {
    alert(`Você quem sabe, meu amor! Vamos de ${option} então.`);
}