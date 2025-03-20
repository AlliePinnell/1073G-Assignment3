class Pizza {
    firstName;
    lastName;
    phone;
    address;
    email;
    numberOfPizzas;
    size;
    crustShape;
    toppings;
    crustType;
    method;

    constructor(firstName, lastName, phone, address, email, numberOfPizzas, size, crustShape, toppings, crustType, method) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.numberOfPizzas = numberOfPizzas;
        this.size = size;
        this.crustShape = crustShape || "None";
        this.toppings = toppings.length > 0 ? toppings : ["None"];
        this.crustType = crustType;
        this.method = method;
    }

    showOrder() {
        return `Order Details:<br>
        Name: ${this.firstName} ${this.lastName}<br>
        Phone: ${this.phone}<br>
        Address: ${this.address}<br>
        Email: ${this.email}<br>
        Number of Pizzas: ${this.numberOfPizzas}<br>
        Size: ${this.size}<br>
        Crust Shape: ${this.crustShape}<br>
        Toppings: ${this.toppings.join(", ")}<br>
        Crust Type: ${this.crustType}<br>
        Method: ${this.method}`;
    }
}

const myStudentId = document.getElementById("myStudentId");
const statusId = document.getElementById("orderStatus");
const form = document.getElementById("pizzaSite");

function grabForm(event) {
    myStudentId.textContent = "Allie Pinnell - 1268163";
    statusId.textContent = "Order Processed!";

    const toppings = [];
    const toppingInputs = document.querySelectorAll('input[name="toppings"]:checked');
    for (let i = 0; i < toppingInputs.length; i++) {
        toppings.push(toppingInputs[i].value);
    }

    var crustShape = document.querySelector('input[name="crustShape"]:checked');
    var crustShapeValue = crustShape ? crustShape.value : "None";

    // Create a new Pizza object
    const pizza = new Pizza(
        document.getElementById("fName").value,
        document.getElementById("lName").value,
        document.getElementById("phone").value,
        document.getElementById("address").value,
        document.getElementById("email").value,
        document.getElementById("pizzaNum").value,
        document.getElementById("size").value,
        crustShapeValue,
        toppings,
        document.getElementById("crust").value,
        document.getElementById("method").value
    );

    // Display the order details in the output section
    document.getElementById("orderOutput").innerHTML = pizza.showOrder();

    // Prevent form from submitting the traditional way (page reload)
    event.preventDefault();
}

form.addEventListener("submit", grabForm);
