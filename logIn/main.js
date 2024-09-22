let computers = JSON.parse(localStorage.getItem("computers")) || [];

let addComputer = document.getElementById("addComputer");

addComputer.addEventListener("click", function () {
    const categorySelect = document.getElementById('categorySelect');
    const nameInput = document.getElementById('nameInput');
    const priceInput = document.getElementById('priceInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const newInput = document.getElementById('newInput');
    const photoInput = document.getElementById('photoInput');
    const internalMemoryInput = document.getElementById('internalMemoryInput');
    const cpuInput = document.getElementById('cpuInput');
    const memoryInput = document.getElementById('memoryInput');
    const osInput = document.getElementById('osInput');
    const gpuInput = document.getElementById('gpuInput');
    const memoryTypeInput = document.getElementById('memoryTypeInput');

    let newComputer = {
        category: categorySelect.value,
        name: nameInput.value,
        price: priceInput.value,
        description: descriptionInput.value,
        isNew: newInput.checked, 
        photo: photoInput.value,
        internalMemory: internalMemoryInput.value,
        cpu: cpuInput.value,
        memory: memoryInput.value,
        os: osInput.value,
        gpu: gpuInput.value,
        memoryType: memoryTypeInput.value,
    };
    
    computers.push(newComputer);

    localStorage.setItem("computers", JSON.stringify(computers));
    window.location.href = "./index.html";
});

computers.forEach((element, index) => {
console.log(element);
    let newRow =`  
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${element.category}</td>
    <td>${element.price}</td>
    <td class="w-25">
    <img w-25 src="${element.photo}" alt="">
    </td> 
    <td> 
    <button class="btn btn-danger">Edit</button> 
    <button class="btn btn-primary">Delete</button> 
    </td> 
    </tr>`   
    document.querySelector(".tableBody").innerHTML += newRow
    
    });

