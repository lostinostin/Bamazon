CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product VARCHAR(100) NOT NULL,
  type_of VARCHAR(45) NOT NULL,
  price INT default 0,
  stock INT default 0,
  PRIMARY KEY (id)
);

-- INSERT INTO products (product, type_of, price, stock) VALUES ("Green Crack", "Sativa", 15, 29), ("OG Kush", "Hybrid", 20, 29), ("Granddaddy Purple", "Indica", 25, 29), ("White Widow", "Hybrid", 15, 29), ("Jack Herer", "Sativa", 20, 29), ("Bubba Kush", "Indica", 20, 29), ("AK-47", "Hybrid", 25, 29), ("Blue Dream", "Hybrid", 20, 29), ("Sour Diesel", "Sativa", 30, 29), ("Girl Scout Cookies", "Hybrid", 25, 29);
-- SELECT * FROM table_name;
-- DELETE FROM table_name WHERE type = 'desired_value';
-- ALTER TABLE `products` CHANGE COLUMN `dept` `type_of` VARCHAR(30) NOT NULL;
