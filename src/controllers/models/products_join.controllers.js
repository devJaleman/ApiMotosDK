import { pool } from "../../db/db.js";


export const Select_Products_Id = async (params) =>{
	const {id} = params;
    let process = "Select_Products_Id";
    let StatusProcess = false;
    try {
        const sql = `select 
        p.code, p.product, p.price, p.oldprice, p.inventory, p.productnew, p.discount, p.img, p.description, 
        pc.category, pc.id as idcategory, pb.brand, pb.id as idbrand
        from products p 
        inner join product_category pc  on p.category = pc.id 
        inner join product_brand pb  on p.brand  = pb.id  WHERE p.code = '${id}'`;
        const result = await pool.query(sql);  
        StatusProcess = true;
        return {process, rows:result.rows, StatusProcess};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, error};
    }  
}

const Prepare_Products_Sql = (params) => {
    try {
        let sql = "select  p.code, p.product, p.price, p.oldprice, p.inventory, p.productnew, p.img, "+
        "p.discount, p.description, pc.category, pb.brand "+
        "from products p "+
        "inner join product_category pc  on p.category = pc.id "+
        "inner join product_brand pb  on p.brand  = pb.id ";
        let sqlNum = "select COUNT(1) AS total from products p "+
        "inner join product_category pc  on p.category = pc.id "+
        "inner join product_brand pb  on p.brand  = pb.id ";
        const {code, category, brand, product, status, productnew, discount,  page, perPage } = params;
        const conditions = [];
            if (code) {
                conditions.push(`p.code = '${code}'`);
            }
            if (category) {
                conditions.push(`pc.id = '${category}'`);
            }
            if (brand) {
                conditions.push(`pb.brand = '${brand}'`);
            }
            if (product) {
                conditions.push(`p.product LIKE '%${product}%'`);
            }
            if (productnew) {
                conditions.push(`p.productnew = '${productnew}'`);
            } 
            if (discount) {
                conditions.push(`p.discount = '${discount}'`);
            }
            if (status) {
                conditions.push(`p.active = '${status.active}'`); 
            }
            if (conditions.length > 0) {
                sql += ` WHERE ${conditions.join(' AND ')}`;
                sqlNum += ` WHERE ${conditions.join(' AND ')}`;
            }
        const limit = perPage || 20;
        const offset = (page - 1) * limit || 0;
        sql += ` LIMIT ${limit} OFFSET ${offset}`;
        const selectPage = page==undefined?1:page;  
        const prepare = {sql, sqlNum, page:selectPage, perPage:limit} 
        return prepare;
    } catch (error) {
        console.log(error);
    }
};

export const Select_Products_All = async (params) =>{
    const prepare = await Prepare_Products_Sql(params);
    const {sql, sqlNum, page, perPage} = prepare;
    let process = "Select_Products_All";
    let StatusProcess = false;
    try {
        const resultSql = await pool.query(sql);  
        const resultSqlNum = await pool.query(sqlNum);  
        StatusProcess = true;
        return {process, StatusProcess, data:resultSql.rows, page, perPage,  total:resultSqlNum.rows[0].total};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, error};
    } 
}