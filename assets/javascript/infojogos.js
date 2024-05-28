document.addEventListener("DOMContentLoaded", function () {
    fetch('infojogos.json')
        .then(response => response.json())
        .then(games => {
            window.loadGame = function (gameId) {
                let game = games[gameId];
                if (game) {
                    document.getElementById('game-title').innerText = game.title;
                    document.getElementById('game-image').src = game.image;
                    document.getElementById('video-source').src = game.video;
                    document.getElementById('game-video').load(); // Recarrega o vídeo
                    document.getElementById('game-description').innerText = game.description;
                    document.getElementById('game-rating').innerText = game.rating;
                    document.getElementById('game-genre').innerText = game.genre;
                } else {
                    console.error('Jogo não encontrado: ' + gameId);
                }
            };
        })
        .catch(error => console.error('Erro ao carregar os dados dos jogos: ', error));
});
