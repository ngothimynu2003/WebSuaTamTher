document.addEventListener("DOMContentLoaded", function () {
  var products = [
    {
      id: 1,
      name: "Narciso Rodriguez",
      price: 100000,
      image: "./assets/images/narciso-rodriguez-for-her_1.jpg",
      description:
        "Narciso Rodriguez is a renowned luxury fashion house that seamlessly blends minimalist elegance with sensual allure. Founded by the eponymous designer, the brand is celebrated for its timeless designs and captivating fragrances.",
    },
    {
      id: 2,
      name: "Gucci",
      price: 100000,
      image: "./assets/images/gucci-bloom-edp_1.jpg",
      description:
        "Gucci Bloom Eau de Parfum is a floral fragrance that captures the essence of a blossoming garden. It features a blend of white flowers, including jasmine, tuberose, and honeysuckle, creating a fresh and feminine scent. The fragrance is both elegant and playful, making it perfect for everyday wear.",
    },
    {
      id: 3,
      name: "Yves Saint Laurent",
      price: 100000,
      image: "./assets/images/yves-saint-laurent-libre-edp_1.jpg",
      description:
        "Yves Saint Laurent Libre Intense EDP is a bold and captivating fragrance that embodies the essence of modern femininity. With its intense blend of floral and woody notes, this perfume offers a luxurious and unforgettable scent.",
    },
    {
      id: 4,
      name: "Yves Saint Laurent",
      price: 100000,
      image: "./assets/images/yves-saint-laurent-libre-intense-edp_1.jpg",
      description:
        "Narciso Rodriguez is a renowned luxury fashion house that seamlessly blends minimalist elegance with sensual allure. Founded by the eponymous designer, the brand is celebrated for its timeless designs and captivating fragrances.",
    },
    {
      id: 5,
      name: "narciso-rodriguez-for-her_1",
      price: 100000,
      image: "./assets/images/narciso-rodriguez-for-her_1.jpg",
      description:
        "Narciso Rodriguez is a renowned luxury fashion house that seamlessly blends minimalist elegance with sensual allure. Founded by the eponymous designer, the brand is celebrated for its timeless designs and captivating fragrances.",
    },
    {
      id: 6,
      name: "narciso-rodriguez-for-her_1",
      price: 100000,
      image: "./assets/images/narciso-rodriguez-for-her_1.jpg",
      description:
        "Narciso Rodriguez is a renowned luxury fashion house that seamlessly blends minimalist elegance with sensual allure. Founded by the eponymous designer, the brand is celebrated for its timeless designs and captivating fragrances.",
    },
    {
      id: 7,
      name: "narciso-rodriguez-for-her_1",
      price: 100000,
      image: "./assets/images/narciso-rodriguez-for-her_1.jpg",
      description:
        "Narciso Rodriguez is a renowned luxury fashion house that seamlessly blends minimalist elegance with sensual allure. Founded by the eponymous designer, the brand is celebrated for its timeless designs and captivating fragrances.",
    },
    {
      id: 8,
      name: "narciso-rodriguez-for-her_1",
      price: 100000,
      image: "./assets/images/narciso-rodriguez-for-her_1.jpg",
      description:
        "Narciso Rodriguez is a renowned luxury fashion house that seamlessly blends minimalist elegance with sensual allure. Founded by the eponymous designer, the brand is celebrated for its timeless designs and captivating fragrances.",
    },
  ];

  // Lấy phần tử có id là "product-list"
  const productList = document.getElementById("product-list");
  if (!productList) {
    console.error("Không tìm thấy phần tử có ID 'product-list'");
    return;
  }

  // ... (phần code thêm sản phẩm vào productList)
  // Duyệt qua từng sản phẩm và tạo ra các thẻ HTML tương ứng
  products.forEach((product) => {
    // ... (phần code tạo sản phẩm giống như trước)
    // Tạo một thẻ div cho mỗi sản phẩm
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Tạo các thẻ con và thêm nội dung
    const productImg = document.createElement("div");
    productImg.classList.add("product_img");
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    productImg.appendChild(img);

    const productName = document.createElement("a");
    productName.classList.add("product_name");
    productName.href = "#"; // Thay đổi link nếu cần
    productName.textContent = product.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `$${product.price}`;

    const button = document.createElement("button");
    button.classList.add("shop-btn", "add_to_cart-btn");
    button.textContent = "Mua Ngay";

    // Thêm sự kiện click vào nút "Mua Ngay" để điều hướng đến trang chi tiết
    button.addEventListener("click", () => {
      // Tạo URL với tham số id
      const url = `detail.html?id=${product.id}`;
      window.location.href = url;
    });

    // Thêm các thẻ con vào thẻ div chính
    productDiv.appendChild(productImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(price);
    productDiv.appendChild(button);

    // Thêm thẻ div của sản phẩm vào danh sách
    productList.appendChild(productDiv);

    // Thêm thẻ div của sản phẩm vào danh sách
    productList.appendChild(productDiv);
  });

  // Tìm sản phẩm dựa trên productId
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const product = products.find((product) => product.id === Number(productId));

  // Kiểm tra xem sản phẩm có tồn tại hay không
  if (product) {
    // Cập nhật nội dung trang
    const productImage = document.getElementById("product-image");
    if (productImage) {
      productImage.src = product.image;
    } else {
      console.error("Không tìm thấy phần tử có ID 'product-image'");
    }

    const productName = document.getElementById("product-name");
    if (productName) {
      productName.textContent = product.name;
    } else {
      console.error("Không tìm thấy phần tử có ID 'product-name'");
    }

    const productPrice = document.getElementById("product-price");
    productPrice.textContent = product.price + "đ";

    const productDescription = document.getElementById("product-description");
    productDescription.textContent = product.description;
  } else {
    console.error("Sản phẩm không tìm thấy.");
  }
});
