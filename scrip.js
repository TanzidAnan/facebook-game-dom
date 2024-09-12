const allPost =document.querySelectorAll('.allPost')
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
    console.log(item.name)
    console.log(item.caption)
})