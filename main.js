function loadGallery() {
  content.innerHTML = "<h2>Gallery</h2>";

  API.getGallery().then(images => {
    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fill, 150px)";
    grid.style.gap = "10px";

    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.style.width = "150px";
      img.style.height = "150px";
      img.style.objectFit = "cover";
      grid.appendChild(img);
    });

    content.appendChild(grid);
  });
}
