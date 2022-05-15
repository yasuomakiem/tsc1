let yasuo = {
    name: "Hoang Ngoc Son",
    email: "son@gmail.com",
    age: "18+",
    phone: "0123456789",
    gender: "Nam",
};
document.getElementById('name').innerHTML = yasuo.name;
document.getElementById('email').innerHTML = yasuo.email;
document.getElementById('age').innerHTML = yasuo.age;
document.getElementById('phone').innerHTML = yasuo.phone;
document.getElementById('gender').innerHTML = yasuo.gender;
let products = [
    {
        name: "Yasuo 1",
        link: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_0.jpg"
    },
    {
        name: "Yasuo 2",
        link: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_0.jpg"
    },
    {
        name: "Yasuo 3",
        link: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_0.jpg"
    },
    {
        name: "Yasuo 4",
        link: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_0.jpg"
    },
    {
        name: "Yasuo 5",
        link: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_0.jpg"
    },
    {
        name: "Yasuo 6",
        link: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_0.jpg"
    },
    {
        name: "Yasuo 7",
        link: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_0.jpg"
    },
    {
        name: "Yasuo 8",
        link: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_0.jpg"
    },
];
let goat = document.querySelector('.goat');
for (let i = 0; i < products.length; i++) {
    goat.innerHTML += `
        <div class="col-lg-3">
            <img class="w-100" src=${products[i].link}>
            <p>${products[i].name}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Chi tiet
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${products[i].name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img class="w-100" src=${products[i].link}>
      <p>1 ty VND</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    `;
}
