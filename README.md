# Bamazon

1. Display all of the Items available for sale. This initial display, should include the ids, names, and prices of products for sale.
2. The first message asks what they would like to purchase based on the id.
![](/initial.png?raw=true)

3. The second message asks how much they would like to purchase (see top of screenshot).
4. Check if your store has enough quantity of the product to meet the customer's request. If not, you should respond to the user by saying: "Insufficient quantity" and prevent the order from going through.
![](/toomuch.png?raw=true)

5. If your store DOES have enough of the product to meet the customer's request, you should fulfill their order. This means that you should show them the total cost of their puchase. Then update the SQL database to reflect the remaining quantity.
![](/orderplaced.png?raw=true)
