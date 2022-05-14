const { model, Schema } = require("mongoose");

const receiptSchema = new Schema(
  {
    customer_name: String,
    phone: String,
    product_summary: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = model("receipt", receiptSchema);
