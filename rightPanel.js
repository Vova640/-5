const weatherBox = document.createElement("div");
weatherBox.id = "weatherBox";
weatherBox.style.marginTop = "20px";
rightPanel.appendChild(weatherBox);

function updateWeather() {
  API.getWeather().then(w => {
    weatherBox.innerHTML = `
      <strong>Weather:</strong><br>
      City: ${w.city}<br>
      Temperature: ${w.temperature}°C
    `;
  });
}

updateWeather();
setInterval(updateWeather, 60000);
