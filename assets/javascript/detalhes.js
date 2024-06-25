document.addEventListener("DOMContentLoaded", function () {
  // Função para obter o valor de um parâmetro da URL
  function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  // Obtenha o ID do jogo a partir da URL
  const gameId = getParameterByName("gameId");

  // Função para carregar e exibir os dados do jogo
  function loadGame(gameId, games) {
    const game = games[gameId];
    if (game) {
      document.getElementById("game-title").innerText = game.title;
      document.getElementById("game-image").src = game.image;
      document.getElementById("video-source").src = game.video;
      document.getElementById("game-video").load(); // Recarrega o vídeo
      document.getElementById("game-description").innerText = game.description;
      document.getElementById("game-rating").innerText = game.rating;
      document.getElementById("game-genre").innerText = game.genre;
      console.log(game);
    } else {
      console.error("Jogo não encontrado: " + gameId);
    }
  }

  // Carregue o JSON e exiba as informações do jogo
  fetch("infojogos.json")
    .then((response) => response.json())
    .then((games) => {
      if (gameId) {
        loadGame(gameId, games);
      } else {
        console.error("Nenhum ID de jogo especificado na URL.");
      }
    })
    .catch((error) =>
      console.error("Erro ao carregar os dados dos jogos: ", error)
    );
});
