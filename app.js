class AddToCart {
  constructor() {}

  // add orders as a object to firebase
  addMore(purchageDetail) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    if (purchageDetail.quantity < 1 || purchageDetail.product == "") {
    } else {
      // add to firestore
      db.collection("MyCart").add({
        purchageDetail,
      });
    }
  }
  Mycart() {
    const itemList = document.querySelector("#item-list");
    const form = document.querySelector("#form");
    // real-time listener
    // pulling data from firebase
    db.collection("MyCart").onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type == "added") {
          renderCart(change.doc);
        } else if (change.type == "removed") {
          let li = itemList.querySelector("[data-id=" + change.doc.id + "]");
          itemList.removeChild(li);
        }
      });
    });

    // create element & render to userinterface

    function renderCart(doc) {
      let card_div = document.createElement("div");
      card_div.classList.add("card_div");
      let card_div_img = document.createElement("img");
      card_div_img.classList.add("card_div_img");
      console.log(card_div);
      card_div.appendChild(card_div_img);

      let li = document.createElement("li");
      let product = document.createElement("span");
      let quantity = document.createElement("span");
      let productType = document.createElement("span");
      let trash = document.createElement("i");

      trash.classList.add("bx");
      trash.classList.add("bxs-trash");
      trash.classList.add("bx-sm");

      card_div_img.setAttribute("src", doc.data().purchageDetail.url);
      li.setAttribute("data-id", doc.id);
      product.textContent =
        "Product Name : " + doc.data().purchageDetail.product;
      quantity.textContent = "Quantity : " + doc.data().purchageDetail.quantity;
      productType.textContent =
        "Type : " + doc.data().purchageDetail.productType;

      li.appendChild(card_div);
      li.appendChild(product);
      li.appendChild(quantity);
      li.appendChild(productType);
      li.appendChild(trash);

      itemList.appendChild(li);

      // deleting data
      trash.addEventListener("click", (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("data-id");
        db.collection("MyCart").doc(id).delete();
      });
    }
  }
  productName() {
    return this.product;
  }
  noQuantity() {
    return this.quantity;
  }
}

var a = new AddToCart();
function initilizeclass() {
  let order = {
    product: form.product.value,
    productType: "Random Img",
    quantity: form.quantity.value,
    url: "https://picsum.photos/200/300",
  };
  // order is passed through crearting object
  a.addMore(order);

  // reset to form input
  form.product.value = "";
  form.quantity.value = "";

  // let proarr = [
  //   {
  //     product: "apple",
  //     productType: "fruit",
  //     quantity: 5,
  //     url: "ASSETS/Page1.jpg",
  //   },
  //   {
  //     product: "orange",
  //     productType: "fruit",
  //     quantity: 2,
  //     url: "ASSETS/Page1.jpg",
  //   },
  // ];
  // for (let i = 0; i < proarr.length; i++) {
  //   a.addMore(proarr[i]);
  // }
}

// updating records (console demo)
// db.collection('MyCart').doc('DOgwUvtEQbjZohQNIeMr').update({
//     product: 'mario world'
// });

// db.collection('MyCart').doc('DOgwUvtEQbjZohQNIeMr').update({
//     quantity: 'hong kong'
// });

// setting data
// db.collection('MyCart').doc('DOgwUvtEQbjZohQNIeMr').set({
//     quantity: 'hong kong'
// });

// pop_up_box
let blur_box = document.getElementById("blur1");
let pop_box = document.querySelector(".add_msg");
function close_pop_box() {
  blur_box.classList.remove("blur");
  pop_box.style.height = "0";
  pop_box.style.width = "0";
}
function open_pop_box() {
  blur_box.classList.add("blur");
  pop_box.style.height = "200px";
  pop_box.style.width = "300px";
}
