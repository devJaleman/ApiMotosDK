import { pool } from '../../db/db.js'

export const Insert_Client_Direction = async (params) => {
   const data = params
   let process = 'Insert_Client_Direction'
   let StatusProcess = false
   let registeredId = null
   try {
      await pool.query(
         `INSERT INTO client_direction 
            (client,  name, country, city, district, direction) 
            VALUES ($1, $2, $3, $4, $5, $6);`,
         [
            data.client,
            data.name,
            data.country,
            data.city,
            data.district,
            data.direction,
         ],
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

export const Select_Client_Direction_Id = async (params) => {
   const { id } = params
   let process = 'Select_Client_Direction_Id'
   let StatusProcess = false
   try {
      const sql = `SELECT * FROM client_direction WHERE id = '${id}'`
      const result = await pool.query(sql)
      StatusProcess = true
      return { process, rows: result.rows, StatusProcess }
   } catch (error) {
      console.log(error)
      return { process, StatusProcess, error }
   }
}

const Prepare_Client_Direction_Sql = (params) => {
   try {
      let sql = 'SELECT * FROM client_direction'
      let sqlNum = 'SELECT COUNT(1) AS total  FROM client_direction'
      const {
         client,
         name,
         country,
         city,
         district,
         direction,
         page,
         perPage,
         status,
      } = params
      const conditions = []
      if (client) {
         conditions.push(`client LIKE '%${client}%'`)
      }
      if (name) {
         conditions.push(`name LIKE '%${name}%'`)
      }
      if (country) {
         conditions.push(`country LIKE '%${country}%'`)
      }
      if (city) {
         conditions.push(`city LIKE '%${city}%'`)
      }
      if (district) {
         conditions.push(`district LIKE '%${district}%'`)
      }
      if (direction) {
         conditions.push(`direction LIKE '%${direction}%'`)
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
export const Select_Client_Direction_All = async (params) => {
   const prepare = await Prepare_Client_Direction_Sql(params)
   const { sql, sqlNum, page, perPage } = prepare
   let process = 'Select_Client_Direction_All'
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

export const Update_Client_Direction = async (data) => {
   const { body, params } = data
   const { client, name, country, city, district, direction, status } = body
   const { id } = params
   let sql = null
   try {
      if (client) {
         sql = `UPDATE client_direction SET client = '${client}'  WHERE id = ${id}`
         await pool.query(sql)
      }

      if (name) {
         sql = `UPDATE client_direction SET name  = '${name}'  WHERE id = ${id}`
         await pool.query(sql)
      }
      if (country) {
         sql = `UPDATE client_direction SET country = '${country}'  WHERE id = ${id}`
         await pool.query(sql)
      }

      if (city) {
         sql = `UPDATE client_direction SET city  = '${city}'  WHERE id = ${id}`
         await pool.query(sql)
      }
      if (district) {
         sql = `UPDATE client_direction SET district = '${district}'  WHERE id = ${id}`
         await pool.query(sql)
      }

      if (direction) {
         sql = `UPDATE client_direction SET direction  = '${direction}'  WHERE id = ${id}`
         await pool.query(sql)
      }

      if (status) {
         sql = `UPDATE client_direction SET active  = '${status.active}'  WHERE id = ${id}`
         console.log(sql)
         await pool.query(sql)
      }
      return { message: 'Process Update_Client_Direction', id }
   } catch (error) {
      console.log(error)
      return { message: 'error Update_Client_Direction' }
   }
}

export const Delete_Client_Direction = async (params) => {
   const { id } = params
   let sql = `DELETE FROM client_direction WHERE id = ${id}`
   try {
      await pool.query(sql)
      return { message: 'Process Delete_Client_Direction ', id }
   } catch (error) {
      console.log(error)
      return { message: 'error Delete_Client_Direction' }
   }
}
