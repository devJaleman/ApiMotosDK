import {
   Insert_Product_Category,
   Select_Product_Category_Id,
   Select_Product_Category_All,
   Update_Product_Category,
   Delete_Product_Category,
} from '../models/product_category.controllers.js'

export const Test_Insert = async (req, res) => {
   try {
      const result = await Insert_Product_Category(req.body)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}

export const Test_Select_Id = async (req, res) => {
   try {
      const result = await Select_Product_Category_Id(req.params)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}

export const Test_Select_All = async (req, res) => {
   try {
      const result = await Select_Product_Category_All(req.body)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}

export const Test_Update = async (req, res) => {
   const data = {
      params: req.params,
      body: req.body,
   }
   try {
      const result = await Update_Product_Category(data)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}

export const Test_Delete = async (req, res) => {
   try {
      const result = await Delete_Product_Category(req.params)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}
