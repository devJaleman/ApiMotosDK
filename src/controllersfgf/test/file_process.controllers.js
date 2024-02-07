import { Process_Masive_Insert } from '../docs/excel.controllers.js'

export const File = async (req, res) => {
   try {
      const result = await Process_Masive_Insert(req)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}
