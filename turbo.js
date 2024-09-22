let btnradio2 = document.getElementById("btnradio2")
let btnradio1 = document.getElementById("btnradio1")


let darkTheme = document.getElementById("darkTheme")
let lightTheme = document.getElementById("lightTheme")
let cars = [
  {
    cardImage: "https://car-images.bauersecure.com/wp-images/6874/zzzzzz_bmw_new_six_e3.jpg",
    carName: "BMW",
    carDescription: "BMW Says Keeping Your Old Car Could Be Better Than Buying New One.",
    yeni: false
  },
  {
    cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhgsONoXngPBY6OovjIB0s9ODd-3gJ-N-vg&s",
    carName: "BMW",
    carDescription: "2025 BMW X7 Review, Pricing, and Specs",
    yeni: true
  },
  {
    cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWOqD54zdnDKRgw8nQZxs1pjtNqeGT8DYiQ&s",
    carName: "BMW",
    carDescription: "BMW Group continues on BEV growth path: Milestone of one million fully-electric vehicles",
    yeni: false
  }
]

let container = document.querySelector(".myCont")

cars.forEach(car => {

  let newCard = `
     <div class="card mb-5 mx-3" style="width: 18rem;">
     <div class="card-header d-flex justify-content-between">
          <h1>  ${car.carName}</h1>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <img src="${car.cardImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.carName}</h5>
          <p class="card-text">${car.carDescription}</p>
         <a href="#" class="btn btn-primary">Buy it Now </a>
        </div>
       <p class="d-inline-flex gap-1">
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>
      </div>`

  container.innerHTML += newCard



  btnradio2.addEventListener("click", function () {
    container.innerHTML = ""
    console.log(findCar);

    let newCard = `
     <div class="card mb-5 mx-3" style="width: 18rem;">
     <div class="card-header d-flex">
          <h1>  ${car.carName}</h1>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <img src="${car.cardImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${car.carDescription}</p>
         <a href="#" class="btn btn-primary">Buy it Now </a>
        </div>
      </div>`
  })


})
let btnClose = document.querySelectorAll(".btn-close")


btnClose.forEach(everyBtn => {

  everyBtn.addEventListener("click", function () {
    this.parentElement.parentElement.remove()
  })

})

darkTheme.addEventListener("click", function () {
  document.querySelector("body").className = "bg-dark"
  cards.forEach(card => {

    card.className = "bg-dark card border-primary"
  })

  headingTexts.forEach(txt => {

    txt.style.color = "white"
  })

})

lightTheme.addEventListener("click", function () {

  document.querySelector("body").className = "bg-light"

  cards.forEach(card => {

    card.className = "bg-light card border-primary"
  })

  headingTexts.forEach(txt => {

    txt.style.color = "black"



  })

})