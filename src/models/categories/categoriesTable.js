import { pool } from '../../db/db.js'

export const createProductCategory = async () => {
   let process = 'create table product_category'
   let statusProcess = true
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  product_category( 
         id 			serial primary key, 
         code			varchar(60) 	NOT NULL,
			category 	varchar(100) 	NOT NULL
      )`
      await pool.query(sql)
   } catch (error) {
      console.log('===== create table product_category =====')
      console.log(error)
      console.log('======================================')
      statusProcess = false
   }
   return { process, statusProcess }
}

export const insertProductCategory = async () => {
   let process = 'insert table product_category'
   let statusProcess = true
   try {
      const sql = `INSERT INTO product_category 
			(code, category) 
			VALUES 
			('01'	,'Categoria 01'),
			('02'	,'Categoria 02'),
			('03'	,'Categoria 03'),
			('04'	,'Categoria 04'),
			('05'	,'Categoria 05'),
			('06'	,'Categoria 06'),
			('07'	,'Categoria 07'),
			('08'	,'Categoria 08'),
			('09'	,'Categoria 09'),
			('10'	,'Categoria 10');`

      await pool.query(sql)
   } catch (error) {
      console.log('===== insert table product_category =====')
      console.log(error)
      console.log('======================================')
      statusProcess = false
   }
   return { process, statusProcess }
}

export const truncateProductCategory = async () => {
   let process = 'truncate table product_category'
   let statusProcess = true
   try {
      const sql = `TRUNCATE TABLE  product_category`
      await pool.query(sql)
   } catch (error) {
      console.log('===== truncate table product_category =====')
      console.log(error)
      console.log('========================================')
      statusProcess = false
   }
   return { process, statusProcess }
}

export const dropProductCategory = async () => {
   let process = 'drop table product_category'
   let statusProcess = true
   try {
      const sql = `DROP TABLE  product_category`
      await pool.query(sql)
   } catch (error) {
      console.log('===== drop table product_category =====')
      console.log(error)
      console.log('====================================')
      statusProcess = false
   }
   return { process, statusProcess }
}
