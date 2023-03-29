let products = [
    ["src = Vest Green.webp",
        "src = Vest ash (Tro).webp",
        "src = Vest Beige (Màu Be).webp",
        "src = Vest Black.jpeg",
        "src = Vest brown (Màu Nâu).jpeg",
        "src = Vest light blue (Màu Xanh Nhạt).webp",
        "src = Vest Stripes Beige (Màu Kẻ Be).webp",
        "src = Vest White (Màu Trắng).jpeg",
    ],
    ["Vest Green","Vest ash","Vest Beige","VestBlack","Vest Brow","Vest light blue","Vest Stripes Beige","Vest White"],
    ["1.900,00","1.900,00","1.900,00","1.900,00","1.900,00","1.900,00","1.900,00","1.900,00","1.900,00"]
]
let demo;

function displayAllProduct() {
    let data = `<table border="1px">
                    <tr>
                        <th>STT</th>
                        <th>ProductName</th>
                        <th colspan="2" style="text-align: center">Action</th>
                        <th style="color: red">` + products.length + " products" + `</th>
                    </tr>`
    for (let i = 0; i < products.length; i++) {
        data += "<tr>"
        data += "<td>" + (i+1) + "</td>"
        data += "<td>" + products[i] + "</td>"
        data += "<td><button onclick='updateProduct(" + i + ")'>Update</button></td>"
        data += "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>"
        data += "</tr>"
    }
    data += `</table>`
    document.getElementById("display").innerHTML = data
}

function updateProduct(index) {
    document.getElementById("update").value = products[index]
    demo = index
}

function updateProduct2() {
    let updateProduct = document.getElementById("update").value
    products[demo] = updateProduct
    displayAllProduct()
}

function addProduct() {
    let product = document.getElementById("add").value
    console.log(product)
    if (product !== undefined && product !== "") {
        products.push(product)
        displayAllProduct()
    }
    document.getElementById("add").value = ""
}

// function updateProduct(index) {
//     let updateProduct = prompt("Nhập tên mới cho sản phẩm: ")
//     if (updateProduct !== "") {
//         products[index] = updateProduct
//         displayAllProduct()
//     }
// }



function deleteProduct(index) {
    if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + products[index] + " ?")) {
        products.splice(index, 1)
        displayAllProduct()
    }
}