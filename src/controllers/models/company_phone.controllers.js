import { pool } from "../../db/db.js";



export const Insert_Company_Phone = async (params) =>{
	const data = params;
    let process = "Insert_company_phone";
    let StatusProcess = false;
    let registeredId = null; 
    try {
        await pool.query(
            `INSERT INTO company_phone 
            (direction, phone) 
            VALUES ($1, $2);`,
            [data.direction, data.phone]
        ); 
        const resultQuery = await pool.query('SELECT lastval()');
        registeredId = resultQuery.rows[0].lastval;
        StatusProcess = true;
        return {process, StatusProcess, registeredId};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, registeredId, error};
    }  
}

export const Select_Company_Phone_Id = async (params) =>{
	const {id} = params;
    let process = "Select_company_phone_Id";
    let StatusProcess = false;
    try {
        const sql = `SELECT * FROM company_phone WHERE id = '${id}'`;
        const result = await pool.query(sql);  
        StatusProcess = true;
        return {process, rows:result.rows, StatusProcess};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, error};
    }  
}

const Prepare_Company_Phone_Sql = (params) => {
    try {
        let sql = 'SELECT *  FROM company_phone';
        let sqlNum = 'SELECT COUNT(1) AS total  FROM company_phone';
        const {direction, Phone,status,   page, perPage } = params;
        const conditions = [];
            if (direction) {
                conditions.push(`direction ='${direction}'`);
            }
            if (Phone) {
                conditions.push(`Phone ='${phone}'`);
            }
            if (status) {
                conditions.push(`active = '${status.active}'`); 
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
export const Select_Company_Phone_All = async (params) =>{
    const prepare = await Prepare_Company_Phone_Sql(params);
    const {sql, sqlNum, page, perPage} = prepare;
    let process = "Select_company_phone_All";
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

export const Update_Company_Phone= async (data) => {  
    const { body, params } = data;
    const {direction, phone, status} = body;
    const {id} = params;
    let sql = null;
    try {
        if (direction) {
            sql =`UPDATE company_phone SET direction = '${direction}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (phone) {
            sql =`UPDATE company_phone SET phone  = '${phone}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (status) {
            sql =`UPDATE company_phone SET active  = '${status.active}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        return { message: "Process Update_company_phone ", id };
    } catch (error) {
        console.log(error);
        return { message: "error Update_company_phone" };
    }
};

export const Delete_Company_Phone= async (params) => {
    const { id } = params;
    let sql = `DELETE FROM company_phone WHERE id = ${id}`;
    try {
        await pool.query(sql);  
        return { message: "Process Delete_company_phone ", id };
    } catch (error) {
        console.log(error);
        return { message: "error Delete_company_phone" };
    }
};