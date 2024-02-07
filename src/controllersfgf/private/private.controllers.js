import { pool } from '../../db/db.js'

const C_CompanyDirection = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  company_direction( 
            id serial primary key,  
            name varchar(40) NOT NULL,
            country varchar(40) NOT NULL,
            city varchar(40) NOT NULL,
            district varchar(40) NOT NULL,
            direction varchar(60) NOT NULL,
			resume text NOT NULL,
            map text NOT NULL,
			email varchar(60) NOT NULL,
			week varchar(60) NOT NULL,
			saturday varchar(60) NOT NULL,
			sunday varchar(60) NOT NULL,
			comment text NOT NULL,
			footer text NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_CompanyDirection = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE company_direction`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_CompanyDirection = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE company_direction`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_CompanyPhone = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  company_phone( 
            id serial primary key,  
            direction varchar(40) NOT NULL,
            phone varchar(40) NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_CompanyPhone = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE company_phone`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_CompanyPhone = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE company_phone`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_CompanySocial = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  company_social( 
            id serial primary key,  
            social varchar(40) NOT NULL,
			url varchar(200) NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_CompanySocial = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE company_social`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_CompanySocial = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE company_social`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_CompanyAbout = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  company_about( 
            id serial primary key,
            about text NOT NULL,
			manager varchar(60) NOT NULL,
			store varchar(20) NOT NULL,
			product varchar(20) NOT NULL,
			client varchar(20) NOT NULL,
			mission text NOT NULL,
			vision text NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_CompanyAbout = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE company_about`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_CompanyAbout = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE company_about`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_CompanyMedia = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  company_media( 
            id serial primary key,
            view varchar(60) NOT NULL,
			description varchar(60) NOT NULL,
            img  varchar(100) NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_CompanyMedia = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE company_media`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_CompanyMedia = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE company_media`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_Product = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  products(
            code varchar(100) PRIMARY KEY,
            category int NOT NULL,
            brand int NOT NULL,
            product varchar(200) NOT NULL,
            price int NOT NULL,
            oldprice int DEFAULT     0 ,
            inventory int NOT NULL, 
            productnew BOOLEAN DEFAULT false ,
            discount BOOLEAN DEFAULT false ,
			img varchar(100) DEFAULT 'product_defaul.png' ,
            description text NULL,
			active boolean DEFAULT true
        );`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_Product = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE products`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_Product = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE products`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_ProductBrand = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  product_brand( 
            id serial primary key, 
            brand varchar(60) NOT NULL,
			description varchar(100) NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_ProductBrand = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE  product_brand`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_ProductBrand = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE  product_brand`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_ProductCategory = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  product_category(
			id serial primary key, 
            category varchar(60) NOT NULL,
			active boolean DEFAULT true
		)`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_ProductCategory = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE product_category`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_ProductCategory = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE product_category`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_ProductMedia = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  product_media( 
            id serial primary key,
            codeproduct varchar(100) NOT NULL,
            img  varchar(100) NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_ProductMedia = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE product_media`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_ProductMedia = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE product_media`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_Admin = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  admin( 
            id serial primary key, 
            username varchar(40) NOT NULL,
            password varchar(200) NOT NULL,
            fullname varchar(100) NOT NULL,
            identification varchar(20) NOT NULL,
            phone varchar(20) NOT NULL,
            email varchar(60) NOT NULL,
            rol varchar(40) NOT NULL,
            permissions int NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_Admin = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE admin`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_Admin = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE admin`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_Client = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  client( 
            id serial primary key,
            username varchar(40) NOT NULL,
            password varchar(200) NOT NULL,
            fullname varchar(100) NOT NULL,
			typeidentification varchar(40) NOT NULL,
            identification varchar(30) NOT NULL,
            phone varchar(20) NOT NULL,
            email varchar(60) NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_Client = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE client`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_Client = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE client`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_ClientDirection = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  client_direction( 
            id serial primary key,
            client int NOT NULL, 
            name varchar(40) NOT NULL,
            country varchar(40) NOT NULL,
            city varchar(40) NOT NULL,
            district varchar(40) NOT NULL,
            direction varchar(60) NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_ClientDirection = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE client_direction`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_ClientDirection = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE client_direction`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_ClientMotorbike = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  client_motorbike( 
            id serial primary key,   
            client int NOT NULL, 
            brand int NOT NULL,
            brandname varchar(60) NOT NULL,
            model varchar(40) NOT NULL,
            reference varchar(60) NOT NULL,
            motorbikename varchar(60) NOT NULL,
            plate varchar(40) NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_ClientMotorbike = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE client_motorbike`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_ClientMotorbike = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE client_motorbike`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const C_ClientHistory = async () => {
   let process = true
   let processError = false
   try {
      const sql = `CREATE TABLE IF NOT EXISTS  client_history( 
            id serial primary key, 
			client int NOT NULL,  
            motorbike int NOT NULL, 
            creation date NOT NULL,
            description varchar(200) NOT NULL,
			active boolean DEFAULT true
        )`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const T_ClientHistory = async () => {
   let process = true
   let processError = false
   try {
      const sql = `TRUNCATE TABLE client_history`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}
const D_ClientHistory = async () => {
   let process = true
   let processError = false
   try {
      const sql = `DROP TABLE client_history`
      await pool.query(sql)
   } catch (error) {
      console.log(error)
      process = false
      processError = error
   }
   return { process, processError }
}

const createAll = async () => {
   let CompanyDirection
   let CompanyPhone
   let CompanySocial
   let CompanyAbout
   let CompanyMedia
   let Product
   let ProductBrand
   let ProductCategory
   let ProductMedia
   let Admin
   let Client
   let ClientDirection
   let ClientMotorbike
   let ClientHistory
   let process = 'Process create all'
   try {
      CompanyDirection = await C_CompanyDirection()
      CompanyPhone = await C_CompanyPhone()
      CompanySocial = await C_CompanySocial()
      CompanyAbout = await C_CompanyAbout()
      CompanyMedia = await C_CompanyMedia()
      Product = await C_Product()
      ProductBrand = await C_ProductBrand()
      ProductCategory = await C_ProductCategory()
      ProductMedia = await C_ProductMedia()
      Admin = await C_Admin()
      Client = await C_Client()
      ClientDirection = await C_ClientDirection()
      ClientMotorbike = await C_ClientMotorbike()
      ClientHistory = await C_ClientHistory()
      return {
         process,
         createResult: {
            CompanyDirection,
            CompanyPhone,
            CompanySocial,
            CompanyAbout,
            CompanyMedia,
            Product,
            ProductBrand,
            ProductCategory,
            ProductMedia,
            Admin,
            Client,
            ClientDirection,
            ClientMotorbike,
            ClientHistory,
         },
      }
   } catch (error) {
      console.log(error)
      return { process, error }
   }
}

const truncateAll = async () => {
   let CompanyDirection
   let CompanyPhone
   let CompanySocial
   let CompanyAbout
   let CompanyMedia
   let Product
   let ProductBrand
   let ProductCategory
   let ProductMedia
   let Admin
   let Client
   let ClientDirection
   let ClientMotorbike
   let ClientHistory
   let process = 'Process truncate all'
   try {
      CompanyDirection = await T_CompanyDirection()
      CompanyPhone = await T_CompanyPhone()
      CompanySocial = await T_CompanySocial()
      CompanyAbout = await T_CompanyAbout()
      CompanyMedia = await T_CompanyMedia()
      Product = await T_Product()
      ProductBrand = await T_ProductBrand()
      ProductCategory = await T_ProductCategory()
      ProductMedia = await T_ProductMedia()
      Admin = await T_Admin()
      Client = await T_Client()
      ClientDirection = await T_ClientDirection()
      ClientMotorbike = await T_ClientMotorbike()
      ClientHistory = await T_ClientHistory()
      return {
         process,
         truncateResult: {
            CompanyDirection,
            CompanyPhone,
            CompanySocial,
            CompanyAbout,
            CompanyMedia,
            Product,
            ProductBrand,
            ProductCategory,
            ProductMedia,
            Admin,
            Client,
            ClientDirection,
            ClientMotorbike,
            ClientHistory,
         },
      }
   } catch (error) {
      return { process, error }
   }
}

const dropAll = async () => {
   let CompanyDirection
   let CompanyPhone
   let CompanySocial
   let CompanyAbout
   let CompanyMedia
   let Product
   let ProductBrand
   let ProductCategory
   let ProductMedia
   let Admin
   let Client
   let ClientDirection
   let ClientMotorbike
   let ClientHistory
   let process = 'Process truncate all'
   try {
      CompanyDirection = await D_CompanyDirection()
      CompanyPhone = await D_CompanyPhone()
      CompanySocial = await D_CompanySocial()
      CompanyAbout = await D_CompanyAbout()
      CompanyMedia = await D_CompanyMedia()
      Product = await D_Product()
      ProductBrand = await D_ProductBrand()
      ProductCategory = await D_ProductCategory()
      ProductMedia = await D_ProductMedia()
      Admin = await D_Admin()
      Client = await D_Client()
      ClientDirection = await D_ClientDirection()
      ClientMotorbike = await D_ClientMotorbike()
      ClientHistory = await D_ClientHistory()
      return {
         process,
         truncateResult: {
            CompanyDirection,
            CompanyPhone,
            CompanySocial,
            CompanyAbout,
            CompanyMedia,
            Product,
            ProductBrand,
            ProductCategory,
            ProductMedia,
            Admin,
            Client,
            ClientDirection,
            ClientMotorbike,
            ClientHistory,
         },
      }
   } catch (error) {
      return { process, error }
   }
}

export const create = async (req, res) => {
   const { operation } = req.body
   let process = null
   let statusProcess = null
   try {
      switch (operation) {
         case 'C_CompanyDirection':
            process = 'Process Create C_CompanyDirection'
            statusProcess = await C_CompanyDirection()
            await console.log(statusProcess)
            break
         case 'C_CompanyPhone':
            process = 'Process Create C_CompanyPhone'
            statusProcess = await C_CompanyPhone()
            await console.log(statusProcess)
            break
         case 'C_CompanySocial':
            process = 'Process Create C_CompanySocial'
            statusProcess = await C_CompanySocial()
            await console.log(statusProcess)
            break
         case 'C_CompanyAbout':
            process = 'Process Create C_CompanyAbout'
            statusProcess = await C_CompanyAbout()
            await console.log(statusProcess)
            break
         case 'C_CompanyMedia':
            process = 'Process Create C_CompanyMedia'
            statusProcess = await C_CompanyMedia()
            await console.log(statusProcess)
            break
         case 'C_Product':
            process = 'Process Create C_Product'
            statusProcess = await C_Product()
            await console.log(statusProcess)
            break
         case 'C_ProductBrand':
            process = 'Process Create C_ProductBrand'
            statusProcess = await C_ProductBrand()
            await console.log(statusProcess)
            break
         case 'C_ProductCategory':
            process = 'Process Create C_ProductCategory'
            statusProcess = await C_ProductCategory()
            await console.log(statusProcess)
            break
         case 'C_ProductMedia':
            process = 'Process Create C_ProductMedia'
            statusProcess = await C_ProductMedia()
            await console.log(statusProcess)
            break
         case 'C_Admin':
            process = 'Process Create C_Admin'
            statusProcess = await C_Admin()
            await console.log(statusProcess)
            break
         case 'C_Client':
            process = 'Process Create C_Client'
            statusProcess = await C_Client()
            await console.log(statusProcess)
            break
         case 'C_ClientDirection':
            process = 'Process Create C_ClientDirection'
            statusProcess = await C_ClientDirection()
            await console.log(statusProcess)
            break
         case 'C_ClientMotorbike':
            process = 'Process Create C_ClientMotorbike'
            statusProcess = await C_ClientMotorbike()
            await console.log(statusProcess)
            break
         case 'C_ClientHistory':
            process = 'Process Create C_ClientHistory'
            statusProcess = await C_ClientHistory()
            await console.log(statusProcess)
            break
         case 'All':
            process = 'Process Create All'
            statusProcess = await createAll()
            break
      }
      res.status(200).json({ process, statusProcess })
   } catch (error) {
      res.status(500).json({ process, statusProcess, error })
   }
}

export const truncate = async (req, res) => {
   const { operation } = req.body
   let process = null
   let statusProcess = null
   try {
      switch (operation) {
         case 'T_CompanyDirection':
            process = 'Process truncate T_CompanyDirection'
            statusProcess = await T_CompanyDirection()
            await console.log(statusProcess)
            break
         case 'T_CompanyPhone':
            process = 'Process truncate T_CompanyPhone'
            statusProcess = await T_CompanyPhone()
            await console.log(statusProcess)
            break
         case 'T_CompanySocial':
            process = 'Process truncate T_CompanySocial'
            statusProcess = await T_CompanySocial()
            await console.log(statusProcess)
            break
         case 'T_CompanyAbout':
            process = 'Process truncate T_CompanyAbout'
            statusProcess = await T_CompanyAbout()
            await console.log(statusProcess)
            break
         case 'T_CompanyMedia':
            process = 'Process truncate T_CompanyMedia'
            statusProcess = await T_CompanyMedia()
            await console.log(statusProcess)
            break
         case 'T_Product':
            process = 'Process truncate T_Product'
            statusProcess = await T_Product()
            await console.log(statusProcess)
            break
         case 'T_ProductBrand':
            process = 'Process truncate T_ProductBrand'
            statusProcess = await T_ProductBrand()
            await console.log(statusProcess)
            break
         case 'T_ProductCategory':
            process = 'Process truncate T_ProductCategory'
            statusProcess = await T_ProductCategory()
            await console.log(statusProcess)
            break
         case 'T_ProductMedia':
            process = 'Process truncate T_ProductMedia'
            statusProcess = await T_ProductMedia()
            await console.log(statusProcess)
            break
         case 'T_Admin':
            process = 'Process truncate T_Admin'
            statusProcess = await T_Admin()
            await console.log(statusProcess)
            break
         case 'T_Client':
            process = 'Process truncate T_Client'
            statusProcess = await T_Client()
            await console.log(statusProcess)
            break
         case 'T_ClientDirection':
            process = 'Process truncate T_ClientDirection'
            statusProcess = await T_ClientDirection()
            await console.log(statusProcess)
            break
         case 'T_ClientMotorbike':
            process = 'Process truncate T_ClientMotorbike'
            statusProcess = await T_ClientMotorbike()
            await console.log(statusProcess)
            break
         case 'T_ClientHistory':
            process = 'Process truncate T_ClientHistory'
            statusProcess = await T_ClientHistory()
            await console.log(statusProcess)
            break
         case 'All':
            process = 'Process truncate All'
            statusProcess = await truncateAll()
            break
      }
      res.status(200).json({ process, statusProcess })
   } catch (error) {
      res.status(500).json({ process, statusProcess, error })
   }
}

export const drop = async (req, res) => {
   const { operation } = req.body
   let process = null
   let statusProcess = null
   try {
      switch (operation) {
         case 'D_CompanyDirection':
            process = 'Process drop D_CompanyDirection'
            statusProcess = await D_CompanyDirection()
            await console.log(statusProcess)
            break
         case 'D_CompanyPhone':
            process = 'Process drop D_CompanyPhone'
            statusProcess = await D_CompanyPhone()
            await console.log(statusProcess)
            break
         case 'D_CompanySocial':
            process = 'Process drop D_CompanySocial'
            statusProcess = await D_CompanySocial()
            await console.log(statusProcess)
            break
         case 'D_CompanyAbout':
            process = 'Process drop D_CompanyAbout'
            statusProcess = await D_CompanyAbout()
            await console.log(statusProcess)
            break
         case 'D_CompanyMedia':
            process = 'Process drop D_CompanyMedia'
            statusProcess = await D_CompanyMedia()
            await console.log(statusProcess)
            break
         case 'D_Product':
            process = 'Process drop D_Product'
            statusProcess = await D_Product()
            await console.log(statusProcess)
            break
         case 'D_ProductBrand':
            process = 'Process drop D_ProductBrand'
            statusProcess = await D_ProductBrand()
            await console.log(statusProcess)
            break
         case 'D_ProductCategory':
            process = 'Process drop D_ProductCategory'
            statusProcess = await D_ProductCategory()
            await console.log(statusProcess)
            break
         case 'D_ProductMedia':
            process = 'Process drop D_ProductMedia'
            statusProcess = await D_ProductMedia()
            await console.log(statusProcess)
            break
         case 'D_Admin':
            process = 'Process drop D_Admin'
            statusProcess = await D_Admin()
            await console.log(statusProcess)
            break
         case 'D_Client':
            process = 'Process drop D_Client'
            statusProcess = await D_Client()
            await console.log(statusProcess)
            break
         case 'D_ClientDirection':
            process = 'Process drop D_ClientDirection'
            statusProcess = await D_ClientDirection()
            await console.log(statusProcess)
            break
         case 'D_ClientMotorbike':
            process = 'Process drop D_ClientMotorbike'
            statusProcess = await D_ClientMotorbike()
            await console.log(statusProcess)
            break
         case 'D_ClientHistory':
            process = 'Process drop D_ClientHistory'
            statusProcess = await D_ClientHistory()
            await console.log(statusProcess)
            break
         case 'All':
            process = 'Process drop All'
            statusProcess = await dropAll()
            break
      }
      res.status(200).json({ process, statusProcess })
   } catch (error) {
      res.status(500).json({ process, statusProcess, error })
   }
}
