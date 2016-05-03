CREATE TABLE `products` (
  `ItemId` int(11) NOT NULL,
  `ProductName` char(25) DEFAULT NULL,
  `DepartmentName` char(25) DEFAULT NULL,
  `Price` float DEFAULT NULL,
  `StockQuantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`ItemId`)
);


INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity) VALUES ('1001','Laptop','Electronics','800','8');
INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity) VALUES ('1002','Keyboard','Electronics','99','18');
INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity) VALUES ('1003','Monitor','Electronics','230','5');
INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity) VALUES ('2001','Jacket','Clothing','110','15');
INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity) VALUES ('2002','Necktie','Clothing','25','10');
INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity) VALUES ('2003','Socks','Clothing','9.5','30');
INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity) VALUES ('3001','Washer','Appliance','650','5');
INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity) VALUES ('3002','Dryer','Appliance','1000','7');
INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity) VALUES ('3003','Refrigerators','Appliance','1500','10');
INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity) VALUES ('4001','Air Compressor','Power Tools','150','5');
