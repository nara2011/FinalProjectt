const cars = [
    {
        NameOfCar: "Tesla",
        imageAddress: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx",
    },
    {
        NameOfCar: "Mercedes",
        imageAddress: "https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&height=900&width=1600&fit=bounds"
    },
    {
        NameOfCar: "Bmw",
        imageAddress: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg"
    },
    {
        NameOfCar: "Lamba",
        imageAddress: "https://www.topgear.com/sites/default/files/2023/09/33136-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS208.jpg"
    },
];

// Selecting elements
const rightContainer = document.querySelector(".right");
const listGroup = document.querySelector(".list-group");

// Function to render car cards
function renderCarCards(index) {
    rightContainer.innerHTML = ""; // Clear previous content

    const selectedCar = cars[index];

    const card = `
        <div class="card w-25 m-2">
            <img src="${selectedCar.imageAddress}" alt="">
            <h1>${selectedCar.NameOfCar}</h1>
        </div>
    `;

    rightContainer.innerHTML = card;
}

// Function to render list items
function renderListItems() {
    listGroup.innerHTML = ""; // Clear previous content

    cars.forEach((car, index) => {
        const li = `<li id="${index}" class="list-group-item">${car.NameOfCar}</li>`;
        listGroup.innerHTML += li;
    });

    // Add click event listeners to each list item
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            // Remove active class from all items
            listItems.forEach(li => li.classList.remove("active"));
            // Add active class to the clicked item
            this.classList.add("active");

            // Render the corresponding car card
            renderCarCards(index);
        });
    });
}

// Initial rendering
renderListItems();
