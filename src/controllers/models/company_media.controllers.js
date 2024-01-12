import { pool } from "../../db/db.js";



export const Insert_Company_Media = async (params) =>{
	const data = params;
    let process = "Insert_company_media";
    let StatusProcess = false;
    let registeredId = null; 
    try {
        await pool.query(
            `INSERT INTO company_media 
            (view, description,img) 
            VALUES ($1, $2, $3);`,
            [data.view, data.description, data.img]
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

export const Select_Company_Media_Id = async (params) =>{
	const {id} = params;
    let process = "Select_company_media_Id";
    let StatusProcess = false;
    try {
        const sql = `SELECT * FROM company_media WHERE id = '${id}'`;
        const result = await pool.query(sql);  
        StatusProcess = true;
        return {process, rows:result.rows, StatusProcess};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, error};
    }  
}

const Prepare_Company_Media_Sql = (params) => {
    try {
        let sql = 'SELECT *  FROM company_media';
        let sqlNum = 'SELECT COUNT(1) AS total  FROM company_media';
        const {view, description, img,status,   page, perPage } = params;
        const conditions = [];
            if (view) {
                conditions.push(`view ='${view}'`);
            }
            if (description) {
                conditions.push(`description ='${description}'`);
            }
            if (img) {
                conditions.push(`img ='${img}'`);
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
export const Select_Company_Media_All = async (params) =>{
    const prepare = await Prepare_Company_Media_Sql(params);
    const {sql, sqlNum, page, perPage} = prepare;
    let process = "Select_company_media_All";
    let StatusProcess = false;
    try {
        const resultSql = await pool.query(sql);  
        const resultSqlNum = await pool.query(sqlNum);  
        return {process, StatusProcess, data:resultSql.rows, page, perPage,  total:resultSqlNum.rows[0].total};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, error};
    }  
}

export const Update_Company_Media= async (data) => {  
    const { body, params } = data;
    const {view, description, img, status} = body;
    const {id} = params;
    let sql = null;
    try {
        if (view) {
            sql =`UPDATE company_media SET view = '${view}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (description) {
            sql =`UPDATE company_media SET description  = '${description}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (img) {
            sql =`UPDATE company_media SET img  = '${img}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (status) {
            sql =`UPDATE company_media SET active  = '${status.active}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        return { message: "Process Update_company_media ", id };
    } catch (error) {
        console.log(error);
        return { message: "error Update_company_media" };
    }
};

export const Delete_Company_Media= async (params) => {
    const { id } = params;
    let sql = `DELETE FROM company_media WHERE id = ${id}`;
    try {
        await pool.query(sql);  
        return { message: "Process Delete_company_media ", id };
    } catch (error) {
        console.log(error);
        return { message: "error Delete_company_media" };
    }
};