import {
   Select_Company_About_Id,
   Select_Company_About_All,
} from '../models/company_about.controllers.js'
import {
   Select_Company_Direction_Id,
   Select_Company_Direction_All,
} from '../models/company_direction.controllers.js'
import {
   Select_Company_Phone_Id,
   Select_Company_Phone_All,
} from '../models/company_phone.controllers.js'
import {
   Select_Company_Social_Id,
   Select_Company_Social_All,
} from '../models/company_social.controllers.js'

export const Company = async (req, res) => {
   try {
      let dataAbout = false
      let resultAbout = false
      let dataDirection = false
      let resultDirection = false
      let dataPhone = false
      let resultPhone = false
      let dataSocial = false
      let resultSocial = false
      const { about, direction, phone, social } = req.body
      if (about) {
         resultAbout = await Select_Company_About_Id({ id: about })
         dataAbout = resultAbout.rows[0]
      }
      if (direction) {
         resultDirection = await Select_Company_Direction_Id({ id: direction })
         dataDirection = resultDirection.rows[0]
      }
      if (phone) {
         resultPhone = await Select_Company_Phone_All({ direction: phone })
         dataPhone = resultPhone.data
      }
      if (social) {
         resultSocial = await Select_Company_Social_All({})
         dataSocial = resultSocial.data
      }
      res.status(200).json({ dataAbout, dataDirection, dataPhone, dataSocial })
   } catch (error) {
      console.error(error)
      res.status(500).json({ error })
   }
}
