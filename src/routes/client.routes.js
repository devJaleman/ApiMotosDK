import { Router } from "express";
import {Company} from "../controllers/client/company.controllers.js";
import {Products, ProductsId} from "../controllers/client/products.controllers.js";
import {Categories} from "../controllers/client/categories.controllers.js";
import {Brands} from "../controllers/client/brands.controllers.js";

const router = Router();


router.post("/company/",        Company);
router.post("/products/",       Products);
router.post("/products/:id",    ProductsId);
router.post("/categories/",     Categories);
router.post("/brands/",         Brands);
/*
router.post("/",        Test_Insert);
router.post("/:id",        Test_Insert);
*/


export default router;