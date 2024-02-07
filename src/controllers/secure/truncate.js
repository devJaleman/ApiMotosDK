import { truncateProductBrand } from '../../models/brands/brandsTable.js'
import { truncateProductCategory } from '../../models/categories/categoriesTable.js'
import { truncateProducts } from '../../models/products/productsTable.js'

export const truncate = async (req, res) => {
   let brand = await truncateProductBrand()
   let category = await truncateProductCategory()
   let products = await truncateProducts()
   let result = await {
      brand,
      category,
      products,
   }
   res.send({ result })
}

export const truncateTable = async (req, res) => {
   let result
   let table = req.params.table
   switch (table) {
      case 'brands':
         result = await truncateProductBrand()
         break
      case 'category':
         result = await truncateProductCategory()
         break
      case 'products':
         result = await truncateProducts()
         break
      default:
         result = 'no process'
         break
   }
   res.send({ result })
}
