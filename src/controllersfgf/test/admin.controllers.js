import {
   Insert_Admin,
   Select_Admin_Id,
   Select_Admin_All,
   Update_Admin,
   Delete_Admin,
} from '../models/admin.controllers.js'

export const Test_Insert = async (req, res) => {
   try {
      const result = await Insert_Admin(req.body)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}

export const Test_Select_Id = async (req, res) => {
   try {
      const result = await Select_Admin_Id(req.params)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}

export const Test_Select_All = async (req, res) => {
   try {
      const result = await Select_Admin_All(req.body)
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
      const result = await Update_Admin(data)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}

export const Test_Delete = async (req, res) => {
   try {
      const result = await Delete_Admin(req.params)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}
