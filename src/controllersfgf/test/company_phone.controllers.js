import {
   Insert_Company_Phone,
   Select_Company_Phone_Id,
   Select_Company_Phone_All,
   Update_Company_Phone,
   Delete_Company_Phone,
} from '../models/company_phone.controllers.js'

export const Test_Insert = async (req, res) => {
   try {
      const result = await Insert_Company_Phone(req.body)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}

export const Test_Select_Id = async (req, res) => {
   try {
      const result = await Select_Company_Phone_Id(req.params)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}

export const Test_Select_All = async (req, res) => {
   try {
      const result = await Select_Company_Phone_All(req.body)
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
      const result = await Update_Company_Phone(data)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}

export const Test_Delete = async (req, res) => {
   try {
      const result = await Delete_Company_Phone(req.params)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}
