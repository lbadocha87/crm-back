const express = require("express");
const router = express.Router();

const customerEvent = require("../controller/customerEvent.controller");

router.post("/add/:customerId", function (req, res) {
  customerEvent.add(
    req.params.customerId,
    req.body,
    function (err, customerEvent) {
      if (err) {
        res.json({ error: true });
      } else {
        res.json(customerEvent);
      }
    }
  );
});

router.delete("/delete/:customerId", function (req, res) {

  console.log(req.body.customerEventId)
  console.log(req.params.customerId)
  customerEvent.delete(
    req.params.customerId,
    req.body.customerEventId,
    function (err, log) {
      if (err) {
        res.json({ error: true });
      } else {
        res.json(log);
      }
    }
  );
});

module.exports = router;
