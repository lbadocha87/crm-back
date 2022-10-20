const CustomerEvent = require("../model/CustomerEvent");
const Customer = require("../model/Customer");

function addCustomerEvent(customerId, data, cb) {
  let newCustomerEvent = new CustomerEvent({ ...data, customer: customerId });
  newCustomerEvent.save(function (err, customerEvent) {
    if (err) {
      cb(err);
    } else {
      Customer.findById(customerId, function (err, customer) {
        if (err) return;

        customer.events.push(customerEvent._id);
        customer.save();
      });
      cb(null, customerEvent);
    }
  });
}

module.exports = {
  add: addCustomerEvent,
};
