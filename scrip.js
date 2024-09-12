const allPost =document.querySelector('.allPost');
    allPost.innerHTML="ht"
let arr=[
    {
        name:'tanzid',
        caption: 'Hello'
    },
    {
        name:'marzan',
        caption: 'Hi'
    },
    {
        name:'Anan',
        caption: 'Hi anan'
    },
];

arr.map(item =>{
    console.log()
    allPost.innerHTML= `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.caption}</p>
                    <a href="#" class="btn btn-primary">Edit</a>
                    <a href="#" class="btn btn-danger">Delete</a>
                </div>
            </div>`
})