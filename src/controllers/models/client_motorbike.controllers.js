import { pool } from "../../db/db.js";





export const Insert_Client_Motorbike = async (params) =>{
	const data = params;
    let process = "Insert_Client_Motorbike";
    let StatusProcess = false;
    let registeredId = null; 
    try {
        await pool.query(
            `INSERT INTO client_motorbike 
            (client, brand, brandname,  model, reference, motorbikename, plate) 
            VALUES ($1, $2, $3, $4, $5, $6, $7);`,
            [data.client, data.brand, data.brandname,  data.model, data.reference, data.motorbikename, data.plate]
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

export const Select_Client_Motorbike_Id = async (params) =>{
	const {id} = params;
    let process = "Select_Client_Motorbike_Id";
    let StatusProcess = false;
    try {
        const sql = `SELECT * FROM client_motorbike WHERE id = '${id}'`;
        const result = await pool.query(sql);  
        StatusProcess = true;
        return {process, rows:result.rows, StatusProcess};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, error};
    }  
}

const Prepare_Client_Motorbike_Sql = (params) => {
    try {
        let sql = 'SELECT * FROM client_motorbike';
        let sqlNum = 'SELECT COUNT(1) AS total  FROM client_motorbike';
        const {client, brand, brandname,  model, reference, motorbikename, plate, page, perPage, status } = params;
        const conditions = [];
            if (client) {
                conditions.push(`client LIKE '%${client}%'`);
            }
            if (brand) {
                conditions.push(`brand LIKE '%${brand}%'`);
            }
            if (brandname) {
                conditions.push(`brandname LIKE '%${brandname}%'`);
            }
            if (model) {
                conditions.push(`model LIKE '%${model}%'`);
            }
            if (reference) {
                conditions.push(`reference LIKE '%${reference}%'`);
            }
            if (motorbikename) {
                conditions.push(`motorbikename LIKE '%${motorbikename}%'`);
            }
            if (plate) {
                conditions.push(`plate LIKE '%${plate}%'`);
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
export const Select_Client_Motorbike_All = async (params) =>{
    const prepare = await Prepare_Client_Motorbike_Sql(params);
    const {sql, sqlNum, page, perPage} = prepare;
    let process = "Select_Client_Motorbike_All";
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

export const Update_Client_Motorbike= async (data) => {  
    const { body, params } = data;
    const {client, brand, brandname,  model, reference, motorbikename, plate, status} = body;
    const {id} = params;
    let sql = null;
    try {
        if (client) {
            sql =`UPDATE client_motorbike SET client = '${client}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (brand) {
            sql =`UPDATE client_motorbike SET brand  = '${brand}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (brandname) {
            sql =`UPDATE client_motorbike SET brandname = '${brandname}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (model) {
            sql =`UPDATE client_motorbike SET model  = '${model}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (reference) {
            sql =`UPDATE client_motorbike SET reference  = '${reference}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (motorbikename) {
            sql =`UPDATE client_motorbike SET motorbikename  = '${motorbikename}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (plate) {
            sql =`UPDATE client_motorbike SET plate  = '${plate}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
     
        if (status) {
            sql =`UPDATE company_social SET active  = '${status.active}'  WHERE id = ${id}`;
            console.log(sql);
            await pool.query(sql);          
        }
        return { message: "Process Update_Client_Motorbike ", id };
    } catch (error) {
        console.log(error);
        return { message: "error Update_Client_Motorbike" };
    }
};

export const Delete_Client_Motorbike= async (params) => {
    const { id } = params;
    let sql = `DELETE FROM client_motorbike WHERE id = ${id}`;
    try {
        await pool.query(sql);  
        return { message: "Process Delete_Client_Motorbike ", id };
    } catch (error) {
        console.log(error);
        return { message: "error Delete_Client_Motorbike" };
    }
};