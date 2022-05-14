const { model, Schema } = require("mongoose");

const receiptSchema = new Schema(
  {
    customer_name: String,
    phone: String,
    price:String,
    desc: String,
    date:String
  },
  {
    timestamps: true,
  }
);

module.exports = model("receipt", receiptSchema);
