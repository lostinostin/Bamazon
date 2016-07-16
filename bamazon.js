var mysql = require('mysql');
var inquirer = require('inquirer');
require('console.table');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root", //Your username
    password: , //Your password
    database: "Bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayProducts();
    
})

function displayProducts() {

   connection.query('SELECT * FROM products', function(err, res){
        if(err) throw err;
        console.table(res);
        placeOrder();
        return;
    });

}

// Users should then be prompted with two messages. The first message should ask them the ID of the product they would like to buy. The second message should ask them how many of the product they would like to buy.
function placeOrder() {
        inquirer.prompt([
            {
                name: "choice",
                type: "input",
                message: "Select the product ID to purchase that product."
            },

            {
                name: "quantity",
                type: "input",
                message: "How much would you like to purchase?"
            }
        ]).then(function(input) {
            var selection = input.choice;
            var quantity = input.quantity;
            connection.query('SELECT product, type_of, price FROM products WHERE id = ' + selection, function(err, res) {
                if(err) throw err;
                console.table(res);
            });
            connection.query('SELECT stock FROM products WHERE id = ' + selection, function(err, res) {
                if(err) throw err;

                // Check if your store has enough quantity of the product to meet the customer's request. If not, you should respond to the user by saying: "Insufficient quantity" and prevent the order from going through.

                if (res[0].stock < quantity) {
                    console.log("We don't have that much in stock");
                    displayProducts();
                } else {
                    // If your store DOES have enough of the product to meet the customer's request, you should fulfill their order. This means that you should show them the total cost of their puchase. Then update the SQL database to reflect the remaining quantity.

                    var new_quantity = res[0].stock - quantity;
                    connection.query('UPDATE products SET ? WHERE ?', 
                        [{stock: new_quantity},{id: selection}], 
                        function(err, res){
                            if(err) throw err;
                    });
                    console.log("Your total comes out to:")
                    connection.query('SELECT price FROM products WHERE id = ' + selection, function(err, res) {
                        var price = res[0].price;
                        var totalCost = quantity*price;
                        console.log("$" + totalCost);
                    })
                    displayProducts();
                }
            });
            
        })
}; 

