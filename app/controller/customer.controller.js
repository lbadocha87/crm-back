const Customer = require("../model/Customer");

function allCustomer(cb) {
  Customer.find().exec(function (err, customers) {
    if (err) {
      cb(err);
    } else {
      cb(null, customers);
    }
  });
}

function getCustomer(id, cb) {
  Customer.findById(id)
    .populate("events")
    .exec(function (err, customer) {
      if (err) {
        cb(err);
      } else {
        cb(null, customer);
      }
    });
}

function addCustomer(data, cb) {
  let newCustomer = new Customer(data);
  newCustomer.save(function (err, customer) {
    if (err) {
      cb(err);
    } else {
      cb(null, customer);
    }
  });
}

function updateCustomer(id, data, cb) {
  Customer.findOneAndUpdate({ _id: id }, data, function (err, customer) {
    if (err) {
      cb(err);
    } else {
      cb(null, customer);
    }
  });
}

module.exports = {
  all: allCustomer,
  add: addCustomer,
  update: updateCustomer,
  get: getCustomer,
};
