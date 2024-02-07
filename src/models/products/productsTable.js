import { pool } from '../../db/db.js'

export const createProducts = async () => {
   let process = 'create table products'
   let statusProcess = true
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  products( 
         id 			   serial primary key, 
         code			   varchar(60) 	NOT NULL,
			category 	   varchar(100) 	NOT NULL,
         categoryname 	varchar(100) 	NOT NULL,
         brand          int            NOT NULL,
         product        varchar(200)   NOT NULL,
         price          int            NOT NULL,
         inventory      int            NOT NULL,
         oldprice       int            DEFAULT               0 ,
         productnew     BOOLEAN        DEFAULT           false ,
         discount       BOOLEAN        DEFAULT           false ,
			img            varchar(100)   DEFAULT   'product.png' ,
         description    text           NULL,
			active         boolean        DEFAULT           true
      )`
      await pool.query(sql)
   } catch (error) {
      console.log('======= create table products =======')
      console.log(error)
      console.log('======================================')
      statusProcess = false
   }
   return { process, statusProcess }
}

export const insertProducts = async () => {
   let process = 'insert table products'
   let statusProcess = true
   try {
      const sql = `INSERT INTO products 
			(code, category, categoryname, brand, product, price, inventory)
			VALUES 
			('a123', '01', 'categoryname', 'SUZUKI',     'product name', '1000000', '1'),
         ('a456', '01', 'categoryname', 'VESPA',      'product name', '1000000', '1'),
         ('a789', '01', 'categoryname', 'TVS,         'product name', '1000000', '1'),
         ('b123', '01', 'categoryname', 'BAJAJ',      'product name', '1000000', '1'),
         ('b456', '01', 'categoryname', 'BAJAJ',      'product name', '1000000', '1'),
         ('b789', '01', 'categoryname', 'YAMAHA',     'product name', '1000000', '1'),
         ('c123', '02', 'categoryname', 'SUZUKI',     'product name', '1000000', '2'),
         ('c456', '02', 'categoryname', 'VESPA',      'product name', '1000000', '2'),
         ('c789', '02', 'categoryname', 'HARLEY',     'product name', '1000000', '2'),
         ('d123', '02', 'categoryname', 'KAWASAKI',   'product name', '1000000', '2'),
         ('d456', '02', 'categoryname', 'TVS',        'product name', '1000000', '2'),
         ('d789', '02', 'categoryname', 'BAJAJ',      'product name', '1000000', '2'),
         ('e123', '03', 'categoryname', 'SUZUKI',     'product name', '1000000', '3'),
         ('e456', '03', 'categoryname', 'HARLEY',     'product name', '1000000', '3'),
         ('e789', '03', 'categoryname', 'KAWASAKI',   'product name', '1000000', '3'),
         ('f123', '03', 'categoryname', 'YAMAHA',     'product name', '1000000', '3'),
         ('f456', '03', 'categoryname', 'BAJAJ',      'product name', '1000000', '3'),
         ('f789', '03', 'categoryname', 'TVS',        'product name', '1000000', '3'),
         ('g123', '04', 'categoryname', 'SUZUKI',     'product name', '1000000', '4'),
         ('g456', '04', 'categoryname', 'VESPA',      'product name', '1000000', '4'),
         ('g789', '04', 'categoryname', 'VESPA',      'product name', '1000000', '4'),
         ('h123', '04', 'categoryname', 'YAMAHA',     'product name', '1000000', '4'),
         ('h456', '04', 'categoryname', 'HONDA',      'product name', '1000000', '4'),
         ('h789', '04', 'categoryname', 'HARLEY',     'product name', '1000000', '4'),
         ('i123', '05', 'categoryname', 'HONDA',      'product name', '1000000', '5'),
         ('i456', '05', 'categoryname', 'HONDA',      'product name', '1000000', '5'),
         ('i789', '05', 'categoryname', 'SUZUKI',     'product name', '1000000', '5'),
         ('j123', '05', 'categoryname', 'HONDA',      'product name', '1000000', '5'),
         ('j456', '05', 'categoryname', 'BAJAJ',      'product name', '1000000', '5'),
         ('j789', '05', 'categoryname', 'KAWASAKI',   'product name', '1000000', '5'),
         ('k123', '06', 'categoryname', 'HARLEY',     'product name', '1000000', '20'),
         ('k456', '06', 'categoryname', 'SUZUKI',     'product name', '1000000', '20'),
         ('k789', '06', 'categoryname', 'YAMAHA',     'product name', '1000000', '20'),
         ('l123', '06', 'categoryname', 'VESPA',      'product name', '1000000', '20'),
         ('l456', '06', 'categoryname', 'BAJAJ',      'product name', '1000000', '20'),
         ('l789', '06', 'categoryname', 'AUTECO',     'product name', '1000000', '20'),
         ('m123', '07', 'categoryname', 'KAWASAKI',   'product name', '1000000', '30'),
         ('m456', '07', 'categoryname', 'TVS',        'product name', '1000000', '30'),
         ('m789', '07', 'categoryname', 'SUZUKI',     'product name', '1000000', '30'),
         ('n123', '07', 'categoryname', 'SUZUKI',     'product name', '1000000', '30'),
         ('n456', '07', 'categoryname', 'YAMAHA',     'product name', '1000000', '30'),
         ('n789', '07', 'categoryname', 'BAJAJ',      'product name', '1000000', '30'),
         ('o123', '08', 'categoryname', 'AUTECO',     'product name', '1000000', '40'),
         ('o456', '08', 'categoryname', 'YAMAHA',     'product name', '1000000', '40'),
         ('o789', '08', 'categoryname', 'KTM',        'product name', '1000000', '40'),
         ('p123', '08', 'categoryname', 'BAJAJ',      'product name', '1000000', '40'),
         ('p456', '08', 'categoryname', 'KTM',        'product name', '1000000', '40'),
         ('p789', '08', 'categoryname', 'TVS',        'product name', '1000000', '40'),
         ('q123', '09', 'categoryname', 'SUZUKI',     'product name', '1000000', '41'),
         ('q456', '09', 'categoryname', 'HARLEY',     'product name', '1000000', '41'),
         ('q789', '09', 'categoryname', 'YAMAHA',     'product name', '1000000', '41'),
         ('r123', '09', 'categoryname', 'BAJAJ',      'product name', '1000000', '41'),
         ('r456', '09', 'categoryname', 'TVS',        'product name', '1000000', '41'),
         ('r789', '09', 'categoryname', 'VESPA',      'product name', '1000000', '41'),
         ('s123', '10', 'categoryname', 'HONDA',      'product name', '1000000', '42'),
         ('s456', '10', 'categoryname', 'YAMAHA',     'product name', '1000000', '42'),
         ('s789', '10', 'categoryname', 'BAJAJ',      'product name', '1000000', '42'),
         ('t123', '10', 'categoryname', 'SUZUKI',     'product name', '1000000', '42'),
         ('t456', '10', 'categoryname', 'KAWASAKI',   'product name', '1000000', '42'),
         ('t789', '10', 'categoryname', 'TVS',        'product name', '1000000', '42')`
      await pool.query(sql)
   } catch (error) {
      console.log('=====    insert table products  =====')
      console.log(error)
      console.log('======================================')
      statusProcess = false
   }
   return { process, statusProcess }
}

export const truncateProducts = async () => {
   let process = 'truncate table products'
   let statusProcess = true
   try {
      const sql = `TRUNCATE TABLE  products`
      await pool.query(sql)
   } catch (error) {
      console.log('=====   truncate table products   =====')
      console.log(error)
      console.log('========================================')
      statusProcess = false
   }
   return { process, statusProcess }
}

export const dropProducts = async () => {
   let process = 'drop table products'
   let statusProcess = true
   try {
      const sql = `DROP TABLE  products`
      await pool.query(sql)
   } catch (error) {
      console.log('=====   drop table products   =====')
      console.log(error)
      console.log('====================================')
      statusProcess = false
   }
   return { process, statusProcess }
}
