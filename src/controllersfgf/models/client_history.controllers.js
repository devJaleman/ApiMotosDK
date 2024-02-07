import { pool } from '../../db/db.js'

export const Insert_Client_History = async (params) => {
   const data = params
   let process = 'Insert_Client_History'
   let StatusProcess = false
   let registeredId = null
   try {
      await pool.query(
         `INSERT INTO client_history 
            (client, motorbike, creation, description) 
            VALUES ($1, $2, $3, $4);`,
         [data.client, data.motorbike, data.creation, data.description],
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

export const Select_Client_History_Id = async (params) => {
   const { id } = params
   let process = 'Select_Client_History_Id'
   let StatusProcess = false
   try {
      const sql = `SELECT * FROM client_history WHERE id = '${id}'`
      const result = await pool.query(sql)
      StatusProcess = true
      return { process, rows: result.rows, StatusProcess }
   } catch (error) {
      console.log(error)
      return { process, StatusProcess, error }
   }
}

const Prepare_Client_History_Sql = (params) => {
   try {
      let sql = 'SELECT * FROM client_history'
      let sqlNum = 'SELECT COUNT(1) AS total  FROM client_history'
      const {
         client,
         motorbike,
         creation,
         description,
         page,
         perPage,
         status,
      } = params
      const conditions = []
      if (client) {
         conditions.push(`client LIKE '%${client}%'`)
      }
      if (motorbike) {
         conditions.push(`motorbike LIKE '%${motorbike}%'`)
      }
      if (creation) {
         conditions.push(`creation LIKE '%${creation}%'`)
      }
      if (description) {
         conditions.push(`description LIKE '%${description}%'`)
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
export const Select_Client_History_All = async (params) => {
   const prepare = await Prepare_Client_History_Sql(params)
   const { sql, sqlNum, page, perPage } = prepare
   let process = 'Select_Client_History_All'
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

export const Update_Client_History = async (data) => {
   const { body, params } = data
   const { client, motorbike, creation, description, status } = body
   const { id } = params
   let sql = null
   try {
      if (client) {
         sql = `UPDATE client_history SET client = '${client}'  WHERE id = ${id}`
         await pool.query(sql)
      }

      if (motorbike) {
         sql = `UPDATE client_history SET motorbike  = '${motorbike}'  WHERE id = ${id}`
         await pool.query(sql)
      }
      if (creation) {
         sql = `UPDATE client_history SET creation = '${creation}'  WHERE id = ${id}`
         await pool.query(sql)
      }

      if (description) {
         sql = `UPDATE client_history SET description  = '${description}'  WHERE id = ${id}`
         await pool.query(sql)
      }

      if (status) {
         sql = `UPDATE company_social SET active  = '${status.active}'  WHERE id = ${id}`
         console.log(sql)
         await pool.query(sql)
      }
      return { message: 'Process Update_Client_History ', id }
   } catch (error) {
      console.log(error)
      return { message: 'error Update_Client_History' }
   }
}

export const Delete_Client_History = async (params) => {
   const { id } = params
   let sql = `DELETE FROM client_history WHERE id = ${id}`
   try {
      await pool.query(sql)
      return { message: 'Process Delete_Client_History ', id }
   } catch (error) {
      console.log(error)
      return { message: 'error Delete_Client_History' }
   }
}
