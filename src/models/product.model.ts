import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String
    },
    price: {
      type: Number
    },
    description: {
      type: String
    }
  },
  { timestamps: true }
)

const productModel = mongoose.model('product', productSchema)

export default productModel
