function allSports() {
  const sportsName = document.getElementById("sports-name");
  const sportsnameValue = sportsName.value;
  // console.log(sportsnameValue);

  const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${sportsnameValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountrys(data.countrys));

  sportsName.value = "";
}

const displayCountrys = (countrys) => {
  const sportsArea = document.getElementById("country-area");
  sportsArea.textContent = null;
  countrys.forEach((countryLeage) => {
    console.log(countryLeage);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
          <div class="card">
          <img  style="height:200px"class="card-img-top" src="${
            countryLeage.strBadge
          }" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">country name ${countryLeage.strCountry}</h5>
            <p class="card-text">${countryLeage.strDescriptionEN.slice(
              0,
              200
            )}</p>
            <p class="card-text"><small class="text-muted">${
              countryLeage.strLeague
            }</small></p>
            <a onclick="displayDetails('${
              countryLeage.idLeague
            }')" href="#" class="btn btn-primary">details</a>
          </div>
        </div>

    `;
    sportsArea.appendChild(div);
  });
};

//display single league
const displayDetails = (leagueId) => {
  // const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=34145937`;
  const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_seasons.php?id=${leagueId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySeasons(data.seasons[0]));
};

const displaySeasons = (seasonsName) => {
  console.log(seasonsName);
  const seasons_name = document.getElementById("seasons-name");
  seasonsName.textContent = null;
  console.log(seasons_name);
  seasons_name.innerHTML = `

    <h1>${seasonsName.strSeason}</h1>
  `;
};
