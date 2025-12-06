const API = {
  fetchUsers() {
    return fetch("/api/users").then(r => r.json());
  },
  getNewUsers() {
    return fetch("/api/new-users").then(r => r.json());
  },
  sort(by, dir) {
    return fetch(`/api/sort?by=${by}&dir=${dir}`).then(r => r.json());
  },
  getGallery() {
    return fetch("/api/gallery").then(r => r.json());
  },
  getWeather() {
    return fetch("/weather").then(r => r.json());
  }
};

window.API = API;
