import { pool } from '../../db/db.js'

export const Insert_Products = async (params) => {
   const data = params
   let process = 'Insert_Products'
   let StatusProcess = false
   let registeredId = null
   try {
      await pool.query(
         `INSERT INTO products 
            (code, category, brand, product, price, inventory, description) 
            VALUES ($1, $2, $3, $4, $5, $6, $7);`,
         [
            data.code,
            data.category,
            data.brand,
            data.product,
            data.price,
            data.inventory,
            data.description,
         ],
      )
      registeredId = data.code
      StatusProcess = true
      return { process, StatusProcess, registeredId }
   } catch (error) {
      console.log(error)
      return { process, StatusProcess, registeredId, error }
   }
}

export const Select_Products_Id = async (params) => {
   const { id } = params
   let process = 'Select_Products_Id'
   let StatusProcess = false
   try {
      const sql = `SELECT * FROM products WHERE code = '${id}'`
      const result = await pool.query(sql)
      StatusProcess = true
      return { process, rows: result.rows, StatusProcess }
   } catch (error) {
      console.log(error)
      return { process, StatusProcess, error }
   }
}

const Prepare_Products_Sql = (params) => {
   try {
      let sql = 'SELECT *  FROM products'
      let sqlNum = 'SELECT COUNT(1) AS total  FROM products'
      const {
         code,
         category,
         brand,
         product,
         price,
         oldprice,
         inventory,
         productnew,
         discount,
         description,
         status,
         page,
         perPage,
      } = params
      const conditions = []
      if (code) {
         conditions.push(`code LIKE '%${code}%'`)
      }
      if (category) {
         conditions.push(`category LIKE '%${category}%'`)
      }
      if (brand) {
         conditions.push(`brand LIKE '%${brand}%'`)
      }
      if (product) {
         conditions.push(`product LIKE '%${product}%'`)
      }
      if (price) {
         conditions.push(`price LIKE '%${price}%'`)
      }
      if (oldprice) {
         conditions.push(`oldprice LIKE '%${oldprice}%'`)
      }
      if (inventory) {
         conditions.push(`inventory LIKE '%${inventory}%'`)
      }
      if (productnew) {
         conditions.push(`productnew LIKE '%${productnew}%'`)
      }
      if (discount) {
         conditions.push(`discount LIKE '%${discount}%'`)
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
export const Select_Products_All = async (params) => {
   const prepare = await Prepare_Products_Sql(params)
   const { sql, sqlNum, page, perPage } = prepare
   let process = 'Select_Products_All'
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

export const Update_Products = async (data) => {
   const { body, params } = data
   const {
      category,
      brand,
      product,
      price,
      oldprice,
      inventory,
      productnew,
      discount,
      description,
      status,
   } = body
   const { id } = params
   let sql = null
   try {
      if (category) {
         sql = `UPDATE products SET category = '${category}'  WHERE code = '${id}'`
         await pool.query(sql)
      }
      if (brand) {
         sql = `UPDATE products SET brand = '${brand}'  WHERE code = '${id}'`
         await pool.query(sql)
      }
      if (product) {
         sql = `UPDATE products SET product = '${product}'  WHERE code = '${id}'`
         await pool.query(sql)
      }
      if (price) {
         sql = `UPDATE products SET price = '${price}'  WHERE code = '${id}'`
         await pool.query(sql)
      }
      if (oldprice) {
         sql = `UPDATE products SET oldprice = '${oldprice}'  WHERE code = '${id}'`
         await pool.query(sql)
      }
      if (inventory) {
         sql = `UPDATE products SET inventory = '${inventory}'  WHERE code = '${id}'`
         await pool.query(sql)
      }
      if (productnew) {
         sql = `UPDATE products SET productnew = '${productnew}'  WHERE code = '${id}'`
         await pool.query(sql)
      }
      if (discount) {
         sql = `UPDATE products SET discount = '${discount}'  WHERE code = '${id}'`
         await pool.query(sql)
      }
      if (description) {
         sql = `UPDATE products SET description = '${description}'  WHERE code = '${id}'`
         await pool.query(sql)
      }
      if (status) {
         sql = `UPDATE products SET active  = '${status.active}'  WHERE code = '${id}'`
         console.log(sql)
         await pool.query(sql)
      }
      return { message: 'Process update Complete ', id }
   } catch (error) {
      console.log(error)
      return { message: 'error update media' }
   }
}

export const Delete_Products = async (params) => {
   const { id } = params
   let sql = `DELETE FROM products WHERE code = '${id}'`

   try {
      await pool.query(sql)
      return { message: 'Process Delete_Products ', id }
   } catch (error) {
      console.log(error)
      return { message: 'error Delete_Products' }
   }
}
