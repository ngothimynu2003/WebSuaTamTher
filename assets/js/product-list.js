// product-list.js

var products = [
  {
    id: 1,
    name: "Ther de Lily mini",
    price: 69000,
    image: "./assets/images/ll1.jpg",
    description:
      "Lily Mini - Hương thơm tinh khiết, bạn đồng hành nhỏ gọn, dành cho những chuyến đi ngắn ngày hoặc để bạn thử hương thơm mới. Sữa tắm Lily Mini với kích thước nhỏ gọn, tiện lợi, mang đến hương thơm hoa lily tinh khiết, giúp bạn thư giãn mọi lúc mọi nơi.",
  },
  {
    id: 2,
    name: "Ther de Lily Pocket",
    price: 169000,
    image: "./assets/images/ll2.jpg",
    description:
      "Lily Pocket - Hương thơm tươi mát, vừa vặn mọi không gian, với kích thước vừa phải, Lily Pocket là lựa chọn hoàn hảo cho phòng tắm nhỏ hoặc để bạn mang theo khi đi du lịch. Sản phẩm mang đến hương thơm hoa lily tươi mát, giúp bạn cảm thấy sảng khoái suốt cả ngày.",
  },
  {
    id: 3,
    name: "Ther de Lily Classic",
    price: 209000,
    image: "./assets/images/ll3.jpg",
    description:
      "Lily Classic - Hương thơm truyền thống, giá trị bền vững, Lily Classic là lựa chọn kinh điển cho những ai yêu thích hương thơm hoa lily truyền thống. Với kích thước vừa phải, sản phẩm đáp ứng nhu cầu sử dụng hàng ngày của cả gia đình.",
  },
  {
    id: 4,
    name: "Ther de Lily Family",
    price: 259000,
    image: "./assets/images/ll4.jpg",
    description:
      "Lily Family - Hương thơm trọn vẹn cho cả gia đình, dành cho những gia đình yêu thích hương thơm hoa lily và muốn sử dụng sản phẩm với số lượng lớn. Lily Family với kích thước lớn, mang đến trải nghiệm tắm gội thư giãn cho cả gia đình.",
  },
  {
    id: 5,
    name: "Ther de Lily Luxury",
    price: 299000,
    image: "./assets/images/ll5.jpg",
    description:
      "Lily Luxury - Hương thơm sang trọng, trải nghiệm đẳng cấp, Lily Luxury là lựa chọn hoàn hảo cho những ai yêu thích sự sang trọng và muốn chăm sóc bản thân một cách đặc biệt. Với thiết kế cao cấp và hương thơm hoa lily đậm đà, sản phẩm mang đến trải nghiệm tắm gội thư giãn tuyệt vời.",
  },
  {
    id: 6,
    name: "Ther de Lavender mini",
    price: 49000,
    image: "./assets/images/lvd1.jpg",
    description:
      "Lavender Mini - Hương thơm tinh tế, bạn đồng hành nhỏ gọn, dành cho những chuyến đi ngắn ngày, túi gym hoặc đơn giản là để bạn thử hương thơm mới. Sữa tắm Lavender Mini với kích thước nhỏ gọn, tiện lợi, mang đến trải nghiệm thư giãn bất cứ lúc nào, bất cứ nơi đâu.",
  },
  {
    id: 7,
    name: "Ther de Lavender Pocket",
    price: 129000,
    image: "./assets/images/lvd2.jpg",
    description:
      "Lavender Pocket - Hương thơm thư giãn, vừa vặn mọi không gian, với kích thước vừa phải, Lavender Pocket là lựa chọn hoàn hảo cho phòng tắm nhỏ hoặc để bạn mang theo khi đi du lịch. Sản phẩm mang đến hương thơm lavender dịu nhẹ, giúp bạn thư giãn sau một ngày dài.",
  },
  {
    id: 8,
    name: "Ther de Lavender Classic",
    price: 169000,
    image: "./assets/images/lvd3.jpg",
    description:
      "Lavender Classic - Hương thơm truyền thống, giá trị bền vững, Lavender Classic là lựa chọn kinh điển cho những ai yêu thích hương thơm lavender truyền thống. Với kích thước vừa phải, sản phẩm đáp ứng nhu cầu sử dụng hàng ngày của cả gia đình.",
  },
  {
    id: 9,
    name: "Ther de Lavender Family",
    price: 199000,
    image: "./assets/images/lvd4.jpg",
    description:
      "Lavender Family - Hương thơm trọn vẹn cho cả gia đình, dành cho những gia đình yêu thích hương thơm lavender và muốn sử dụng sản phẩm với số lượng lớn. Lavender Family với kích thước lớn, mang đến trải nghiệm tắm gội thư giãn cho cả gia đình.",
  },
  {
    id: 10,
    name: "Ther de Lavender Luxury",
    price: 229000,
    image: "./assets/images/lvd5.jpg",
    description:
      "Lavender Luxury - Hương thơm sang trọng, trải nghiệm đẳng cấp, Lavender Luxury là lựa chọn hoàn hảo cho những ai yêu thích sự sang trọng và muốn chăm sóc bản thân một cách đặc biệt. Với thiết kế cao cấp và hương thơm đậm đà, sản phẩm mang đến trải nghiệm tắm gội thư giãn tuyệt vời.",
  },
  {
    id: 11,
    name: "Ther de Rose mini",
    price: 49000,
    image: "./assets/images/rs1.jpg",
    description:
      "Rose Mini - Hương thơm quý phái, bạn đồng hành nhỏ gọn, dành cho những chuyến đi ngắn ngày hoặc để bạn thử hương thơm mới. Sữa tắm Rose Mini với kích thước nhỏ gọn, tiện lợi, mang đến hương thơm hoa hồng quý phái, giúp bạn thư giãn mọi lúc mọi nơi.",
  },
  {
    id: 12,
    name: "Ther de Rose Pocket",
    price: 149000,
    image: "./assets/images/rs2.jpg",
    description:
      "Rose Pocket - Hương thơm ngọt ngào, vừa vặn mọi không gian, với kích thước vừa phải, Rose Pocket là lựa chọn hoàn hảo cho phòng tắm nhỏ hoặc để bạn mang theo khi đi du lịch. Sản phẩm mang đến hương thơm hoa hồng ngọt ngào, giúp bạn cảm thấy tươi mới suốt cả ngày.",
  },
  {
    id: 13,
    name: "Ther de Rose Classic",
    price: 199000,
    image: "./assets/images/rs3.jpg",
    description:
      "Rose Classic - Hương thơm truyền thống, giá trị bền vững, Rose Classic là lựa chọn kinh điển cho những ai yêu thích hương thơm hoa hồng truyền thống. Với kích thước vừa phải, sản phẩm đáp ứng nhu cầu sử dụng hàng ngày của cả gia đình.",
  },
  {
    id: 14,
    name: "Ther de Rose Family",
    price: 229000,
    image: "./assets/images/rs4.jpg",
    description:
      "Rose Family - Hương thơm trọn vẹn cho cả gia đình, dành cho những gia đình yêu thích hương thơm hoa hồng và muốn sử dụng sản phẩm với số lượng lớn. Rose Family với kích thước lớn, mang đến trải nghiệm tắm gội thư giãn cho cả gia đình.",
  },
  {
    id: 15,
    name: "Ther de Rose Luxury",
    price: 269000,
    image: "./assets/images/rs5.jpg",
    description:
      "Rose Luxury - Hương thơm sang trọng, trải nghiệm đẳng cấp, Rose Luxury là lựa chọn hoàn hảo cho những ai yêu thích sự sang trọng và muốn chăm sóc bản thân một cách đặc biệt. Với thiết kế cao cấp và hương thơm hoa hồng đậm đà, sản phẩm mang đến trải nghiệm tắm gội thư giãn tuyệt vời.",
  },
];

function renderProducts(productList) {
  products.forEach((product) => {
    // Create product element
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Create product image
    const productImg = document.createElement("div");
    productImg.classList.add("product_img");
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    productImg.appendChild(img);

    // Create product name
    const productName = document.createElement("a");
    productName.classList.add("product_name");
    productName.href = "#"; // Modify link if needed
    productName.textContent = product.name;

    // Create product price
    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `${product.price}đ`;

    // Create buy button
    const button = document.createElement("button");
    button.classList.add("shop-btn", "add_to_cart-btn");
    button.textContent = "Mua Ngay";

    // Add click event to button
    button.addEventListener("click", () => {
      // Create URL with product ID
      const url = `detail.html?id=${product.id}`;
      window.location.href = url;
    });

    // Add product elements to product div
    productDiv.appendChild(productImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(price);
    productDiv.appendChild(button);

    // Add product div to product list
    productList.appendChild(productDiv);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");
  if (!productList) {
    console.error("Không tìm thấy phần tử có ID 'product-list'");
    return;
  }

  renderProducts(productList);
});


