# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT categories.CategoryName, products.ProductName FROM Products
inner JOIN Categories on products.CategoryID = categories.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT orders.OrderID, shippers.ShipperName FROM Orders
JOIN Shippers
on orders.ShipperID = shippers.ShipperID
where orders.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, od.quantity FROM
orders as o
JOIN orderdetails as od
on o.orderID = od.orderID
JOIN products as p
on p.productID = od.productID
where o.orderID = 10251
order by productName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.OrderID, c.CustomerName, e.LastName as 'Employee Last Name' FROM
orders as o
JOIN customers as c
on o.CustomerID = c.CustomerID
JOIN employees as e
on o.EmployeeID = e.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
