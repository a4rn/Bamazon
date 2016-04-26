var mysql = require('mysql');
var prompt = require('prompt');

var dbcon = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bamazon'
});


showInventory();


function showInventory(query) {
  var query = 'SELECT * FROM products';
  dbcon.query(query, function(err, res) {
    if (err) {
      throw err;
    }
    console.log(' ');
    console.log('+--------------------------------------------------------------------+');
    console.log('| ItemId | ProductName    | DepartmentName |  Price  | StockQuantity |');
    console.log('+--------------------------------------------------------------------+');
    for (var i = 0; i < res.length; i++) {
      var a = 16 - res[i].ProductName.length
      var b = 16 - res[i].DepartmentName.length
      var c = 8 - res[i].Price.toFixed(2).length
      var d = 14 - res[i].StockQuantity.toString().length
      console.log('|  ' + res[i].ItemId + '  | ' +
        res[i].ProductName + Array(a).join(' ') +
        '| ' + res[i].DepartmentName + Array(b).join(' ') + '| ' + Array(c).join(' ') +
        res[i].Price.toFixed(2) + ' | ' +
        Array(d).join(' ') + res[i].StockQuantity + ' |')
    }
    console.log('+--------------------------------------------------------------------+');
    console.log(' ');
    buyProduct();
  });
}


function buyProduct() {
  var schema = {
    properties: {
      productid: {
        description: "Enter product id to buy ",
        pattern: /^[0-9]+$/,
        message: 'Invalid Product Id ',
        required: true
      },
      qty: {
        description: 'Enter quantity to buy ',
        pattern: /^[0-9]+$/,
        message: 'Invalid quantity ',
        required: true
      }
    }
  };

  prompt.get(schema, function(e, r) {
    checkInventory(r.productid, r.qty)
  });
}


function checkInventory(id, qty) {
  var query = 'SELECT StockQuantity, Price FROM products WHERE ItemId = ' + id;

  dbcon.query(query, function(err, res) {
    if (err) {
      throw err;
    } else if (res.length === 0) {
      console.log('Product Id not found!');
      console.log(' ');
      buyProduct();
    } else if (res[0].StockQuantity < qty) {
      console.log('Not enough quantity in stock!');
      console.log(' ');
      buyProduct();
    } else {
      console.log('Total Cost of Purchase is: $' + (res[0].Price * qty).toFixed(2));
      var newqty = res[0].StockQuantity - qty;
      updateInventory(id, newqty);
    }
  });
}



function updateInventory(id, newqty) {
  var query = 'UPDATE products SET StockQuantity = ' + newqty + ' WHERE ItemId = ' + id;
  dbcon.query(query, function(err, res) {
    if (err) {
      throw err;
    } else {
      showInventory();
    }

  });
}