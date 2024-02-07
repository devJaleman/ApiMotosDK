import { Select_Product_Category_All } from '../models/product_category.controllers.js'

export const Categories = async (req, res) => {
   try {
      const result = await Select_Product_Category_All(req.body)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}
