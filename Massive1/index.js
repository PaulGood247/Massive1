var massive = require("massive");
var connectionString = "postgres://postgres:monkey95@localhost/pgguide";

var db = massive.connectSync({connectionString : connectionString});

// // Users
// db.users.find(function(err, result) {
// 	console.log(result);
// });

// db.users.find({email: 'Wan.Dilks@gmail.com'}, function(err, result) {
// 	console.log(result);
// });


// products
//db.products.find(function(err, result) {
 //	console.log(result);
 //});

// db.products.find({id: 17}, function(err, result) {
// 	console.log(result);
// });


// // purchases
// db.purchases.find(function(err, result) {
// 	console.log(result);
// });

// db.purchases.find({name: 'Rubie Wassink'}, function(err, result) {
// 	console.log(result);
// });


// // purchase_items
// db.purchase_items.find(function(err, result) {
// 	console.log(result);
// });

db.purchase_items.find(101, function(err, result) {
 	console.log(result);
 });