const petStatus = document.querySelector("button");
const petList = document.querySelector(".pets");
const creatPet = (name, species) => {
  const pet = {
    name: name,
    species: species,
    isTired: ""
  }

  return pet
}

const sora = creatPet("sora", "lizard")
const dami = creatPet("dami", "dog")
const tess = creatPet("german", "boa")

sora.isTired = 9;
tess.isTired = 4;

console.log(sora, dami)
const allPet = [sora,dami, tess]

const showPets = () => {
  petList.innerHTML = "";
  for (let pet of allPet ) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    petList.append(li);
  }
}

// petStatus.addEventListener("click",function (){
//   showPets();
// })

if (petStatus){
  petStatus.addEventListener("click",function (){
    showPets();
  })
}