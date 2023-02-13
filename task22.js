const goods = [
    {
        id: 1,
        name: "T-shirt",
        description: "color: white, material: cotton",
        sizes: ["S", "M", "XL"],
        price: 1500,
        available: true,
    },
    {
        id: 2,
        name: "Skirt",
        description: "color: pink, material: synthetics",
        sizes: ["S", "M", "XL"],
        price: 1000,
        available: true,
    },
    {
        id: 3,
        name: "Dress",
        description: "color: balck, material: silk",
        sizes: ["S", "M", "XL"],
        price: 2500,
        available: true,
    },
    {
        id: 4,
        name: "Hut",
        description: "color: brown, material: cotton",
        sizes: ["S", "M", "XL"],
        price: 800,
        available: true,
    },
    {
        id: 5,
        name: "Jeans",
        description: "color: blue, material: cotton",
        sizes: ["S", "M", "XL"],
        price: 4000,
        available: true,
    },
]

const basket = [
    {
        good: 1,
        amount: 5,
    },
    {
        good: 2,
        amount: 3,
    },
]

function addGood(goodIndex, amount) {
    basket.push({"good": goodIndex, "amount": amount});
    return basket
}

function delGood(goodIndex, amount) {
    for (let i = 0; i < basket; i++) {
        if(basket[i].good == goodIndex) {
            if (amount >= basket[i].amount) {
                basket.splice(i, 1);
                return;
            }
            basket[i].amount -= amount;
        }
    }
    return basket
}

function clearBasket() {
    basket.splice(0, basket.length);
    return basket
}

function getTotal() {
    result = {
        totalAmount: 0,
        totalSum: 0,
    }
    for (let each of basket) {
        result.totalAmount += each.amount;
        result.totalSum += goods[each.good].price * each.amount;
    }
    return result;
}

console.log(getTotal())