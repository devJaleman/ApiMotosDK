import { insertProductBrand } from '../../models/brands/brandsTable.js'
import { insertProductCategory } from '../../models/categories/categoriesTable.js'
import { insertProducts } from '../../models/products/productsTable.js'

export const data = async (req, res) => {
   let brand = await insertProductBrand()
   let category = await insertProductCategory()
   let products = await insertProducts()
   let result = await {
      brand,
      category,
      products,
   }
   res.send({ result })
}

export const dataTable = async (req, res) => {
   let result
   let table = req.params.table
   switch (table) {
      case 'brands':
         result = await insertProductBrand()
         break
      case 'category':
         result = await insertProductCategory()
         break
      case 'products':
         result = await insertProducts()
         break
      default:
         result = 'no process'
         break
   }
   res.send({ result })
}
