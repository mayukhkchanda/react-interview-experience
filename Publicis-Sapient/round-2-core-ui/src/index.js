/**
 * Create a vanilla js application that consumes the https://swapi.dev/api/people/ API and displays a
 * table containing a list of Star Wars characters and the films they have appeared in and the vehicles
 * they have used. The application should make multiple parallel API calls to fetch the film and vehicle
 * details using the URLs returned in the first API call and display them in the table
 */

async function fetchData() {
  const url = "https://swapi.dev/api/people/";
  //   const cache = {};

  try {
    const response = await fetch(url);
    const userData = await response.json();
    const usersPromises = await userData.results.map(async (data) => {
      const user = {};

      // user's name
      user.name = data.name;

      // user's films
      const filmsPromise = data.films.map((film) => fetch(film));
      const filmsRes = await Promise.all(filmsPromise);
      const filmsData = await Promise.all(filmsRes.map((res) => res.json()));

      user.films = filmsData.map((film) => film.title);

      // user's Vehicle
      const vehiclesPromise = data.vehicles.map((film) => fetch(film));
      const vehiclesRes = await Promise.all(vehiclesPromise);
      const vehiclesData = await Promise.all(
        vehiclesRes.map((res) => res.json())
      );

      user.vehicles = vehiclesData.map((data) => data.name);

      return user;
    });
    const users = await Promise.all(usersPromises);
    return users;
  } catch (error) {
    console.log("Error " + error);
  }
}

function showsUser(user) {
  //   console.log(users);
  const root = document.getElementById("root");
  const div = document.createElement("div");
  div.classList.add("container");
  const name = document.createElement("p");
  name.textContent = user.name;
  const filmRoot = document.createElement("div");
  const filmHeader = document.createElement("h2");
  filmHeader.textContent = "Films";
  filmRoot.appendChild(filmHeader);
  user.films.forEach((film) => {
    const filmEl = document.createElement("p");
    filmEl.textContent = film;
    filmRoot.appendChild(filmEl);
  });

  const vehiclesRoot = document.createElement("div");
  const vehiclesHeader = document.createElement("h2");
  vehiclesHeader.textContent = "Vehicles";
  vehiclesRoot.appendChild(vehiclesHeader);
  user.vehicles.forEach((vehicle) => {
    const vehicleEl = document.createElement("p");
    vehicleEl.textContent = vehicle;
    vehiclesRoot.appendChild(vehicleEl);
  });
  div.appendChild(name);
  div.appendChild(filmRoot);
  div.appendChild(vehiclesRoot);

  root.appendChild(div);
}

async function rederUsers() {
  const users = await fetchData();
  users.forEach((user) => showsUser(user));
}

rederUsers();
