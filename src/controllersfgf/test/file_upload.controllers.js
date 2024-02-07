import { Upload_File } from '../upload/upload.controller.js'

export const File = async (req, res) => {
   try {
      const result = await Upload_File(req)
      console.log(result)
      res.status(200).json({ result })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}
