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

function deleteCustomerEvent(customerId, customerEventId, cb) {
  Customer.findById(customerId, function (err, customer) {
    if (err) return;

    customer.events.pull(customerEventId);
    customer.save();
  });

  CustomerEvent.deleteOne({ _id: customerEventId }, function (err, log) {
    if (err) {
      cb(err);
    } else {
      cb(null, log);
    }
  });
}

module.exports = {
  add: addCustomerEvent,
  delete: deleteCustomerEvent,
};
