import { dropProductBrand } from '../../models/brands/brandsTable.js'
import { dropProductCategory } from '../../models/categories/categoriesTable.js'
import { dropProducts } from '../../models/products/productsTable.js'

export const drop = async (req, res) => {
   let brand = await dropProductBrand()
   let category = await dropProductCategory()
   let products = await dropProducts()
   let result = await {
      brand,
      category,
      products,
   }
   res.send({ result })
}

export const dropTable = async (req, res) => {
   let result
   let table = req.params.table
   switch (table) {
      case 'brands':
         result = await dropProductBrand()
         break
      case 'category':
         result = await dropProductCategory()
         break
      case 'products':
         result = await dropProducts()
         break
      default:
         result = 'no process'
         break
   }
   res.send({ result })
}
