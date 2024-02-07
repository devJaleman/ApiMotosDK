import xlsx from 'xlsx-populate'
import { pool } from '../../db/db.js'

export const Process_Masive_Insert = async () => {
   let num = 1
   try {
      const rutaAlmacenamiento = 'src/controllers/docs/inventario.xlsx'
      const workbook = await xlsx.fromFileAsync(rutaAlmacenamiento)
      const worksheet = workbook.sheet(0)
      const products = worksheet.usedRange().value()
      let skipFirstRow = true
      for (const row of products) {
         num++
         if (skipFirstRow) {
            skipFirstRow = false
            continue
         }
         const sql = `INSERT INTO products (code, category, brand, product, price, inventory)
                VALUES ($1, $2, $3, $4, $5, $6)
                ON CONFLICT (code) DO UPDATE
                SET 
                category = excluded.category,
                brand = excluded.brand,
                product = excluded.product,
                price = excluded.price,
                inventory = excluded.inventory`
         const values = [row[0], row[1], row[2], row[3], row[4], row[5]]
         await pool.query(sql, values)
      }
      return { message: 'Registros procesados con éxito', num: num }
   } catch (error) {
      return { uploadFile: error }
   }
}
