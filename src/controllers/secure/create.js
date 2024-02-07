import { createProductBrand } from '../../models/brands/brandsTable.js'
import { createProductCategory } from '../../models/categories/categoriesTable.js'
import { createProducts } from '../../models/products/productsTable.js'

export const create = async (req, res) => {
   let brand = await createProductBrand()
   let category = await createProductCategory()
   let products = await createProducts()
   let result = await {
      brand,
      category,
      products,
   }
   res.send({ result })
}

export const createTable = async (req, res) => {
   let result
   let table = req.params.table
   switch (table) {
      case 'brands':
         result = await createProductBrand()
         break
      case 'category':
         result = await createProductCategory()
         break
      case 'products':
         result = await createProducts()
         break
      default:
         result = 'no process'
         break
   }
   res.send({ result })
}
