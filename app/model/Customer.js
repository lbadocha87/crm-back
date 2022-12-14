const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mietek:1234@cluster0.lihsftb.mongodb.net/crm", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Customer = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      zipCode: { type: String, required: true },
      city: { type: String, required: true },
    },
    nip: { type: Number },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CustomerEvent",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", Customer);
