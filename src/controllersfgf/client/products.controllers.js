import {
   Select_Products_All,
   Select_Products_Id,
} from '../models/products_join.controllers.js'

export const Products = async (req, res) => {
   try {
      const result = await Select_Products_All(req.body)
      res.status(200).json({ result })
   } catch (error) {
      console.log(error)
      res.status(500).json({ error })
   }
}

export const ProductsId = async (req, res) => {
   try {
      const result = await Select_Products_Id(req.params)
      res.status(200).json({ result })
   } catch (error) {
      console.log(error)
      res.status(500).json({ error })
   }
}
