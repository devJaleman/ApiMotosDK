import { Select_Product_Brand_All } from '../models/product_brand.controllers.js'

export const Brands = async (req, res) => {
   try {
      const result = await Select_Product_Brand_All(req.body)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}
