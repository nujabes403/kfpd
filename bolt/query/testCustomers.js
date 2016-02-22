var Firebase = require('firebase');
var ref = new Firebase('https://kfpd.firebaseio.com')

var testCustomer = ref.child("testCustomers");
var newCst = testCustomer.push()
newCst.set(

	 {
		name: "June 23, 1912",
		president: "Alan Turing",
		modified: Firebase.ServerValue.TIMESTAMP,
		created: Firebase.ServerValue.TIMESTAMP,
	}
, function(data){console.log(data)})