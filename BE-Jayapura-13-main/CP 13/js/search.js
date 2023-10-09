// Event listener untuk menghandle submit form
$("#searchForm").submit(function (event) {
  event.preventDefault(); // Mencegah form dikirim secara default

  const searchQuery = $("#searchInput").val();

  // Memanggil fungsi untuk melakukan pencarian game
  searchGame(searchQuery);
});

function searchGame(query) {
  const apiKey = "1f2cfcb94c0a4e11948b4c4078fd3638";
  const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${query}`;

  $.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json",
    success: function (data) {
      // Menampilkan hasil pencarian di dalam div dengan id "gameResult"
      displaySearchResults(data.results);
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
}

function displaySearchResults(results) {
  const gameResultContainer = $("#gameResult");
  gameResultContainer.empty(); // Menghapus hasil pencarian sebelumnya

  if (results.length === 0) {
    gameResultContainer.append("<p>Tidak ada hasil yang ditemukan.</p>");
  } else {
    // Loop melalui hasil pencarian dan menampilkan informasi game
    results.forEach(function (game) {
      const gameName = game.name;
      const gameImage = game.background_image;
      const cardTitle = $(".card-title");
      cardTitle.text(gameName);

      const gameCard = `
        <div class="card mb-3">
          <img src="${gameImage}" class="card-img-top" alt="${gameName}">
          <div class="card-body d-flex justify-content-between">
            <h5 class="card-title">${gameName}</h5>
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#reviewModal">Write review</button>
          </div>
        </div>
      `;

      gameResultContainer.append(gameCard);
    });
  }
}

// Menggunakan jQuery untuk menangani tombol "Write review"
$(document).on("click", ".btn[data-bs-toggle='modal']", function () {
  const cardTitle = $(this).closest(".card").find(".card-title").text();
  $("#gameName").val(cardTitle); // Mengisi nilai input tersembunyi
});