let lists = [
    {
        nameOfComputer: "HP",
    },
    {
        nameOfComputer: "Macbook",
    },
    {
        nameOfComputer: "Acer",
    }
];

let computers = [ 
    {
        nameOfComputer: "HP",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPZWQdWKvRbgf1md3DD1oc6FXd3Ca87aQtQ&s", 
    },
    {
        nameOfComputer: "Macbook",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwOWsEjxjAMPdfXi4GumV3qnJuQU7E4F62A&s", 
    },
    {
        nameOfComputer: "Acer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwew1zod_FKTJcwZ4M175CapyBonyl1GB29Q&s", 
    },
    {
        nameOfComputer: "HP",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPZWQdWKvRbgf1md3DD1oc6FXd3Ca87aQtQ&s", 
    },
    {
        nameOfComputer: "Macbook",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwOWsEjxjAMPdfXi4GumV3qnJuQU7E4F62A&s", 
    },
    {
        nameOfComputer: "Acer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwew1zod_FKTJcwZ4M175CapyBonyl1GB29Q&s", 
    }
];



lists.forEach(list => {
    let listItem = `
      <li class="list-group-item ">${list.nameOfComputer}</li>
    `;
    let listGroup = document.querySelector(".list-group");
    listGroup.innerHTML += listItem;
});


let listGroupItems = document.querySelectorAll(".list-group-item");

listGroupItems.forEach(listItem => {
    listItem.addEventListener("click", function () {
       listGroupItems.forEach(li => li.classList.remove("active"));
       listItem.classList.add("active");

       computers.forEach(comp =>{
        console.log(listItem.textContent);
        console.log(comp.nameInput);


        if(listItem.textContent === comp.nameInput){
            let card = `
    <div class="card mx-2 my-2" style="width: 15rem;">
        <img src="${comp.image}" class="card-img-top" alt="Image of ${comp.nameOfComputer}">
        <div class="card-body">
            <h5 class="card-title">${comp.nameOfComputer}</h5>
        </div>
    </div>
    `;
    document.querySelector(".col-9").innerHTML = card;   
        }
        
       })


    });
});


computers.forEach(computer => {
    let card = `
    <div class="card mx-2 my-2" style="width: 15rem;">
        <img src="${computer.image}" class="card-img-top" alt="Image of ${computer.nameOfComputer}">
        <div class="card-body">
            <h5 class="card-title">${computer.nameOfComputer}</h5>
        </div>
    </div>
    `;
    document.querySelector(".col-9").innerHTML += card;    
});
