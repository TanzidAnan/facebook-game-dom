const allPost = document.querySelector('.allPost');
const name = document.querySelector('.name');
const caption = document.querySelector('.caption');
const postButton = document.querySelector('.postButton');
// let arr = [
//     {
//         name: 'tanzid',
//         caption: 'Hello'
//     },
//     {
//         name: 'marzan',
//         caption: 'Hi'
//     },
//     {
//         name: 'Anan',
//         caption: 'Hi anan'
//     },
// ];

let arr = []


postButton.addEventListener('click', () => {

    arr.push({

        name: name.value,
        caption: caption.value

    })




    allPost.innerHTML = " "
    display();
    name.value = '';
    caption.value = '';
})


function display() {
    arr.map(item => {
        console.log()
        allPost.innerHTML += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.caption}</p>
                        <a href="#" class="btn btn-primary">Edit</a>
                        <a href="#" class="btn btn-danger delete">Delete</a>
                    </div>
                </div>`
    })
    let deleteButton = document.querySelectorAll(".delete");
    let converDeleteBtn = Array.from(deleteButton);
    console.log(converDeleteBtn);
    converDeleteBtn.map((deleteBtn, index) => {
        deleteBtn.addEventListener('click', () => {
            arr.splice(index, 1);
            allPost.innerHTML = " ";
            display();

        })
    })
    console.log(deleteButton)
}