let products = JSON.parse(localStorage.getItem("products")) || [];

function save() {
  localStorage.setItem("products", JSON.stringify(products));
}

function addProduct() {
  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;

  if (name === "") return alert("اكتب اسم المنتج");

  products.push({ name, category });
  save();
  alert("تمت الإضافة");
  document.getElementById("name").value = "";
}

function filterProducts(type) {
  let box = document.getElementById("products");
  box.innerHTML = "";

  products
    .filter(p => type === "all" || p.category === type)
    .forEach(p => {
      box.innerHTML += `
        <div class="product">
          <h3>${p.name}</h3>
        </div>
      `;
    });
}

if (document.getElementById("products")) {
  filterProducts("all");
}