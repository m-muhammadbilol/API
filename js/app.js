const elContanier = document.getElementById("Contanier");
function Ui(data) {
  elContanier.innerHTML = null;

  data.forEach((element) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    const h3Name = document.createElement("h1");
    const h3Type = document.createElement("h3");
    const Id = document.createElement("h3");
    const pricePerDay = document.createElement("h3");
    const fuel = document.createElement("h2");
    const gearbox = document.createElement("h2");
    const airConditioner = document.createElement("h2");
    const drive = document.createElement("h2");
    const tags = document.createElement("h2");

    image.src = element.image;
    h3Name.textContent = element.name;
    h3Type.textContent = element.type;
    Id.textContent = element.id;
    pricePerDay.textContent = element.pricePerDay;
    fuel.textContent = element.fuel;
    gearbox.textContent = element.gearbox;
    airConditioner.textContent = element.airConditioner;
    drive.textContent = element.drive;
    tags.textContent = element.tags;
    div.append(
      image,
      h3Name,
      h3Type,
      Id,
      pricePerDay,
      fuel,
      gearbox,
      airConditioner,
      tags,
      drive
    );
    elContanier.append(div);
  });
}
fetch("https://json-api.uz/api/project/fn44-amaliyot/cars")
  .then((res) => res.json())
  .then((res) => {
    Ui(res.data);
  })
  .catch(() => {
    console.log("Error:");
  });

function modeChanger() {
  const lightMode = document.getElementsByClassName("light");
  const darkMode = document.getElementsByClassName("dark");
  const mod = document.getElementById("mode");
  const elBody = document.getElementById("body");
  mod.addEventListener("click", () => {
    if (mod.innerText === "Dark") {
      mod.innerText = "Light";
      elBody.style.backgroundColor = "#181A18";
    } else {
      mod.innerText = "Dark";
      elBody.style.backgroundColor = "white";
    }
  });
}

modeChanger();

function search() {
  const elInput = document.getElementById("input");
  elInput.addEventListener("input", (e) => {
    let key = e.target.value;
    data.filter(() => {
      if (key == h3Name) {
        console.log(88);
      }
    });
  });
}

search();
