function removeItem(item) {
    var inventory = JSON.parse(localStorage.getItem("inventory")) || [];
    console.log(inventory)

    thingsArr = inventory.split("**")
    console.log(thingsArr)
    console.log(item.parentElement.innerText)
    checkStr = ""
    for (ch of item.parentElement.innerText) {
        if (ch != ":") {
            checkStr += ch
        }
        else {
            break
        }
    }

    for ( let i = thingsArr.length-1; i>-1; i--) {
        console.log(i)
        if (thingsArr[i].includes(checkStr)) {
            thingsArr.splice(i, 1)
        }
    }


    inventory = thingsArr.join("**")
    // Update the inventory in local storage
    localStorage.setItem("inventory", JSON.stringify(inventory));
        
    // Update the displayed inventory
    displayInventory();

}

// Function to create a list item with a delete button
function updateItem(item, amt) {

    var test = `${item}@@${amt}`

    console.log(amt, typeof(amt))

    var inventory = localStorage.getItem("inventory") || [];

    newStr = ""

        for (ch of inventory) {
            if (ch != `"` && ch != `\\`) {
                newStr += ch
            }
        }

    inventory = newStr

    if (inventory.length == 0) {
        inventory += test
    }
    else (
        inventory += "**" + test
    )

    console.log(test)
    console.log(JSON.stringify(inventory))
    localStorage.setItem("inventory", JSON.stringify(inventory));

    document.getElementById("input").value = ""
    document.getElementById("amt").value = ""

    displayInventory()

}

// Function to display the inventory
function displayInventory() {
    document.getElementById("results").innerText = ""
    const inventoryList = document.getElementById("inventoryList");
    const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

    inventoryList.innerHTML = "";

    if (inventory.length > 0) {
        thingsArr = inventory.split("**")
        inventoryObj = {}

        for (item of thingsArr) {
            newStr = ""

            for (ch of item) {
                if (ch != `"` && ch != `\\`) {
                    newStr += ch
                }
            }

            itemArr = newStr.split("@@")

            if (!isNaN(itemArr[1])) {
                if (itemArr[0] in inventoryObj) {
                    inventoryObj[itemArr[0]] += Number(itemArr[1]);
                }
                else {
                    inventoryObj[itemArr[0]] = Number(itemArr[1])
                }
            }
        }

        for (ingredient of Object.keys(inventoryObj)) {

            console.log(ingredient)

            if (inventoryObj[ingredient] > 0) {

                const col = document.createElement("div");
                col.className = "col my-1";

                const card = document.createElement("div");
                card.className = "card shadow-sm m-1 h-100";

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";

                const description = document.createElement("p");
                description.className = "card-text fw-bold"
                description.textContent = ingredient

                const updateRow = document.createElement("div");
                updateRow.className = "row justify-content-space-between"
                // updateRow.style.justifyContent = "space"

                const amount = document.createElement("div");
                amount.className = "col-3 m-auto"
                amount.textContent = inventoryObj[ingredient];

                const updateCol = document.createElement("div")
                updateCol.className = "col d-flex justify-content-end"

                const addBtn = document.createElement("a")
                addBtn.className = "btn"
                addBtn.textContent = "+"
                addBtn.style.width = "fit-content"
                addBtn.setAttribute("onclick", `addByNum("${ingredient}")`)

                const valueUpdateBox = document.createElement("input");
                valueUpdateBox.id = "valueUpdate"
                valueUpdateBox.type = "number"
                valueUpdateBox.style.width = "50px"
                valueUpdateBox.style.textAlign = "end"
                valueUpdateBox.value = "1"      

                const delBtn = document.createElement("a")
                delBtn.className = "btn"
                delBtn.textContent = "-"
                delBtn.style.width = "fit-content"
                delBtn.setAttribute("onclick", `delByNum("${ingredient}")`)

                const resultRow = document.createElement("div")
                resultRow.className = "row"

                const checkNum = document.createElement("p")
                checkNum.className = "small-text"
                checkNum.id = ingredient + "Results"
                checkNum.textContent = ""

                updateCol.appendChild(delBtn)
                updateCol.appendChild(valueUpdateBox)
                updateCol.appendChild(addBtn)
                updateRow.appendChild(amount)
                updateRow.appendChild(updateCol)
                resultRow.appendChild(checkNum)
                cardBody.appendChild(description)
                cardBody.appendChild(updateRow)
                cardBody.appendChild(resultRow)
                card.appendChild(cardBody)
                col.appendChild(card)

                results.appendChild(col);

            }
        };
    }
}

function addByNum(item) {

    document.getElementById(item + "Results").innerText = ""

    var amt = document.getElementById("valueUpdate").value
    console.log(amt)

    var test = `${item}@@${amt}`

    console.log(amt, typeof(amt))

    var inventory = localStorage.getItem("inventory") || [];

    newStr = ""

        for (ch of inventory) {
            if (ch != `"` && ch != `\\`) {
                newStr += ch
            }
        }

    inventory = newStr

    if (inventory.length == 0) {
        inventory += test
    }
    else (
        inventory += "**" + test
    )

    console.log(test)
    console.log(JSON.stringify(inventory))
    localStorage.setItem("inventory", JSON.stringify(inventory));

    document.getElementById("input").value = ""
    document.getElementById("amt").value = ""

    displayInventory()

}

function delByNum(item) {

    document.getElementById(item + "Results").innerText = ""

    var amt = document.getElementById("valueUpdate").value
    console.log(amt)

    var test = `${item}@@${-amt}`

    console.log(amt, typeof(amt))

    var inventory = localStorage.getItem("inventory") || [];

    newStr = ""

    for (ch of inventory) {
        if (ch != `"` && ch != `\\`) {
            newStr += ch
        }
    }

    counter = 0

    eachStrArr = newStr.split("**")
    console.log(eachStrArr)
    for (eachStr of eachStrArr) {
        itemArr = eachStr.split("@@")
        console.log(itemArr[1])
        if (itemArr[0] == item) {
            counter += Number(itemArr[1])
        }
    }

    console.log(counter)

    if (counter - amt >= 0) {

        inventory = newStr

        if (inventory.length == 0) {
            inventory += test
        }
        else (
            inventory += "**" + test
        )

        console.log(test)
        console.log(JSON.stringify(inventory))
        localStorage.setItem("inventory", JSON.stringify(inventory));

        document.getElementById("input").value = ""
        document.getElementById("amt").value = ""

        displayInventory()

    }
    else {
        document.getElementById(item + "Results").innerText = "Please enter a valid amount."
    }

}


function inventoryItems() {
    const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
    if (inventory.length > 0) {
        thingsArr = inventory.split("**")
        inventoryArr = []

        for (item of thingsArr) {
            newStr = ""

            for (ch of item) {
                if (ch != `"` && ch != `\\`) {
                    newStr += ch
                }
            }

            itemArr = newStr.split("@@")

            if (!isNaN(itemArr[1])) {
                if (!inventoryArr.includes(itemArr[0])) {
                    inventoryArr.push(itemArr[0])
                }
            }
        }

        return(inventoryArr.toString())
    }
}

