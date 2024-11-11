const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter task title"],
    },

    description: {
      type: String,
      required: true,
      default: 0,
    },

    deadline: {
      type: Date,
      required: true,
      default: 0,
    },

    priority: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
