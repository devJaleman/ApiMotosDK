import { pool } from '../../db/db.js'

export const createProductBrand = async () => {
   let process = 'create table product_brand'
   let statusProcess = true
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  product_brand( 
         id 				serial primary key, 
         brand 			varchar(60) 	NOT NULL,
			description 	varchar(100) 	NOT NULL,
			img 				varchar(20) 	NOT NULL,
			active 			boolean 			DEFAULT true
      )`
      await pool.query(sql)
   } catch (error) {
      console.log('===== create table product_brand =====')
      console.log(error)
      console.log('======================================')
      statusProcess = false
   }
   return { process, statusProcess }
}

export const insertProductBrand = async () => {
   let process = 'insert table product_brand'
   let statusProcess = true
   try {
      const sql = `INSERT INTO product_brand 
			(brand,description,img) 
			VALUES 
			('SUZUKI'	,'no description', '01.png'),
			('VESPA'		,'no description', '02.png'),
			('TVS'		,'no description', '03.png'),
			('BAJAJ'		,'no description', '04.png'),
			('YAMAHA'	,'no description', '05.png'),
			('HARLEY'	,'no description', '06.png'),
			('KAWASAKI'	,'no description', '07.png'),
			('HONDA'		,'no description', '08.png'),
			('HERO'		,'no description', '09.png'),
			('KTM'		,'no description', '10.png'),
			('AUTECO'	,'no description', '11.png'),
			('KYMCO'		,'no description', '12.png'),
			('DUCATI'	,'no description', '13.png'),
			('LIFAN'		,'no description', '14.png');`

      await pool.query(sql)
   } catch (error) {
      console.log('===== insert table product_brand =====')
      console.log(error)
      console.log('======================================')
      statusProcess = false
   }
   return { process, statusProcess }
}

export const truncateProductBrand = async () => {
   let process = 'truncate table product_brand'
   let statusProcess = true
   try {
      const sql = `TRUNCATE TABLE  product_brand`
      await pool.query(sql)
   } catch (error) {
      console.log('===== truncate table product_brand =====')
      console.log(error)
      console.log('========================================')
      statusProcess = false
   }
   return { process, statusProcess }
}

export const dropProductBrand = async () => {
   let process = 'drop table product_brand'
   let statusProcess = true
   try {
      const sql = `DROP TABLE  product_brand`
      await pool.query(sql)
   } catch (error) {
      console.log('===== drop table product_brand =====')
      console.log(error)
      console.log('====================================')
      statusProcess = false
   }
   return { process, statusProcess }
}
