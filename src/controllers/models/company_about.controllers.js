import { pool } from "../../db/db.js";


 


export const Insert_Company_About = async (params) =>{
	const data = params;
    let process = "Insert_company_about";
    let StatusProcess = false;
    let registeredId = null; 
    try {
        await pool.query(
            `INSERT INTO company_about 
            (about, manager, store, product, client, mission, vision) 
            VALUES ($1, $2, $3, $4, $5, $6, $7);`,
            [data.about, data.manager, data.store, data.product, data.client, data.mission, data.vision]
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

export const Select_Company_About_Id = async (params) =>{
	const {id} = params;
    let process = "Select_company_about_Id";
    let StatusProcess = false;
    try {
        const sql = `SELECT * FROM company_about WHERE id = '${id}'`;
        const result = await pool.query(sql);  
        StatusProcess = true;
        return {process, rows:result.rows, StatusProcess};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, error};
    }  
}

const Prepare_Company_About_Sql = (params) => {
    try {
        let sql = 'SELECT *  FROM company_about';
        let sqlNum = 'SELECT COUNT(1) AS total  FROM company_about';
        const {about, manager, store, product, client, mission, vision, status, page, perPage } = params;
        const conditions = [];
            if (about) {
                conditions.push(`about ='${about}'`);
            }
            if (manager) {
                conditions.push(`manager ='${manager}'`);
            }
            if (store) {
                conditions.push(`store ='${store}'`);
            }
            if (product) {
                conditions.push(`product ='${product}'`);
            }
            if (client) {
                conditions.push(`client ='${client}'`);
            }
            if (mission) {
                conditions.push(`mission ='${mission}'`);
            }
            if (vision) {
                conditions.push(`vision ='${vision}'`);
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
export const Select_Company_About_All = async (params) =>{
    const prepare = await Prepare_Company_About_Sql(params);
    const {sql, sqlNum, page, perPage} = prepare;
    let process = "Select_company_about_All";
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

export const Update_Company_About= async (data) => {  
    const { body, params } = data;
    const {about, manager, store, product, client, mission, vision, status} = body;
    const {id} = params;
    let sql = null;
    try {
        if (about) {
            sql =`UPDATE company_about SET about = '${about}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (manager) {
            sql =`UPDATE company_about SET manager  = '${manager}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (store) {
            sql =`UPDATE company_about SET store  = '${store}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (product) {
            sql =`UPDATE company_about SET product = '${product}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (client) {
            sql =`UPDATE company_about SET client  = '${client}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (mission) {
            sql =`UPDATE company_about SET mission  = '${mission}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (vision) {
            sql =`UPDATE company_about SET vision  = '${vision}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (status) {
            sql =`UPDATE company_about SET active  = '${status.active}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        return { message: "Process Update_company_about ", id };
    } catch (error) {
        console.log(error);
        return { message: "error Update_company_about" };
    }
};

export const Delete_Company_About= async (params) => {
    const { id } = params;
    let sql = `DELETE FROM company_about WHERE id = ${id}`;
    try {
        await pool.query(sql);  
        return { message: "Process Delete_company_about ", id };
    } catch (error) {
        console.log(error);
        return { message: "error Delete_company_about" };
    }
};