import { pool } from '../../db/db.js'

export const Insert_Product_Media = async (params) => {
   const data = params
   let process = 'Insert_Product_Media'
   let StatusProcess = false
   let registeredId = null
   try {
      await pool.query(
         `INSERT INTO product_media 
            (codeproduct, img) 
            VALUES ($1, $2);`,
         [data.codeproduct, data.img],
      )
      const resultQuery = await pool.query('SELECT lastval()')
      registeredId = resultQuery.rows[0].lastval
      StatusProcess = true
      return { process, StatusProcess, registeredId }
   } catch (error) {
      console.log(error)
      return { process, StatusProcess, registeredId, error }
   }
}

export const Select_Product_Media_Id = async (params) => {
   const { id } = params
   let process = 'Select_Product_Media_Id'
   let StatusProcess = false
   try {
      const sql = `SELECT * FROM product_media WHERE id = '${id}'`
      const result = await pool.query(sql)
      StatusProcess = true
      return { process, rows: result.rows, StatusProcess }
   } catch (error) {
      console.log(error)
      return { process, StatusProcess, error }
   }
}

const Prepare_Product_Media_Sql = (params) => {
   try {
      let sql = 'SELECT *  FROM product_media'
      let sqlNum = 'SELECT COUNT(1) AS total  FROM product_media'
      const { codeproduct, status, page, perPage } = params
      const conditions = []
      if (codeproduct) {
         conditions.push(`codeproduct ='${codeproduct}'`)
      }
      if (status) {
         conditions.push(`active = '${status.active}'`)
      }
      if (conditions.length > 0) {
         sql += ` WHERE ${conditions.join(' AND ')}`
         sqlNum += ` WHERE ${conditions.join(' AND ')}`
      }
      const limit = perPage || 20
      const offset = (page - 1) * limit || 0
      sql += ` LIMIT ${limit} OFFSET ${offset}`
      const selectPage = page == undefined ? 1 : page
      const prepare = { sql, sqlNum, page: selectPage, perPage: limit }
      return prepare
   } catch (error) {
      console.log(error)
   }
}
export const Select_Product_Media_All = async (params) => {
   const prepare = await Prepare_Product_Media_Sql(params)
   const { sql, sqlNum, page, perPage } = prepare
   let process = 'Select_Product_Media_All'
   let StatusProcess = false
   try {
      const resultSql = await pool.query(sql)
      const resultSqlNum = await pool.query(sqlNum)
      return {
         process,
         StatusProcess,
         data: resultSql.rows,
         page,
         perPage,
         total: resultSqlNum.rows[0].total,
      }
   } catch (error) {
      console.log(error)
      return { process, StatusProcess, error }
   }
}

export const Update_Product_Media = async (data) => {
   const { body, params } = data
   const { codeproduct, img, status } = body
   const { id } = params
   let sql = null
   try {
      if (codeproduct) {
         sql = `UPDATE product_media SET codeproduct = '${codeproduct}'  WHERE id = ${id}`
         await pool.query(sql)
      }
      if (img) {
         sql = `UPDATE product_media SET img  = '${img}'  WHERE id = ${id}`
         await pool.query(sql)
      }
      if (status) {
         sql = `UPDATE product_media SET active  = '${status.active}'  WHERE id = ${id}`
         await pool.query(sql)
      }
      return { message: 'Process Update_Product_Media ', id }
   } catch (error) {
      console.log(error)
      return { message: 'error Update_Product_Media' }
   }
}

export const Delete_Product_Media = async (params) => {
   const { id } = params
   let sql = `DELETE FROM product_media WHERE id = ${id}`
   try {
      await pool.query(sql)
      return { message: 'Process Delete_Product_Media ', id }
   } catch (error) {
      console.log(error)
      return { message: 'error Delete_Product_Media' }
   }
}
