document.getElementById('revealButton').addEventListener('click', function() {
    const surprise = document.getElementById('surprise');
    surprise.classList.toggle('hidden');
    const dateIdea = document.getElementById('dateIdea');
    dateIdea.classList.toggle('hidden');
});

function chooseDate(option) {
    alert(`Ótima escolha! Vamos fazer um ${option}!`);
}