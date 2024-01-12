import { pool } from "../../db/db.js";



export const Insert_Client = async (params) =>{
	const data = params;
    let process = "Create client";
    let StatusProcess = false;
    let registeredId = null; 
    try {
        await pool.query(
            `INSERT INTO client
            (username, password, fullname, typeidentification, identification, phone, email) 
            VALUES ($1, $2, $3, $4, $5, $6, $7);`,
            [data.username, data.password, data.fullname, data.typeidentification, data.identification, data.phone, data.email ]
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


export const Select_Client_Id = async (params) =>{
	const {id} = params;
    let process = "Select_Client_Id";
    let StatusProcess = false;
    try {
        const sql = `SELECT * FROM client WHERE id = '${id}'`;
        const result = await pool.query(sql);  
        StatusProcess = true;
        return {process, rows:result.rows, StatusProcess};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, error};
    }  
}


const Prepare_Client_Sql = (params) => {
    try {
        let sql = 'SELECT * FROM client';
        let sqlNum = 'SELECT COUNT(1) AS total  FROM client';
        const {username, password, fullname, typeidentification, identification, phone, email, page, perPage, status } = params;
        const conditions = [];
            if (username) {
                conditions.push(`username LIKE '%${username}%'`);
            }
            if (password) {
                conditions.push(`password LIKE '%${password}%'`);
            }
            if (fullname) {
                conditions.push(`fullname LIKE '%${fullname}%'`);
            }
            if (typeidentification) {
                conditions.push(`typeidentification LIKE '%${typeidentification}%'`);
            }
            if (identification) {
                conditions.push(`identification LIKE '%${identification}%'`);
            }
            if (phone) {
                conditions.push(`phone LIKE '%${phone}%'`);
            }
            if (email) {
                conditions.push(`email LIKE '%${email}%'`);
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


export const Select_Client_All = async (params) =>{
    const prepare = await Prepare_Client_Sql(params);
    const {sql, sqlNum, page, perPage} = prepare;
    let process = "Select_Client_All";
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


export const Update_Client= async (data) => {  
    const { body, params } = data;
    const {username, password, fullname, typeidentification, identification, phone, email, status} = body;
    const {id} = params;
    let sql = null;
    try {
        if (username) {
            sql =`UPDATE client SET username = '${username}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (password) {
            sql =`UPDATE client SET password  = '${password}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (fullname) {
            sql =`UPDATE client SET fullname = '${fullname}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (typeidentification) {
            sql =`UPDATE client SET typeidentification  = '${typeidentification}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (identification) {
            sql =`UPDATE client SET identification = '${identification}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (phone) {
            sql =`UPDATE client SET phone  = '${phone}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (email) {
            sql =`UPDATE client SET email = '${email}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (status) {
            sql =`UPDATE client SET active  = '${status.active}'  WHERE id = ${id}`;
            console.log(sql);
            await pool.query(sql);          
        }
        return { message: "Process update Complete ", id };
    } catch (error) {
        console.log(error);
        return { message: "error update media" };
    }
};


export const Delete_Client= async (params) => {
    const { id } = params;
    let sql = `DELETE FROM client WHERE id = ${id}`;
    try {
        await pool.query(sql);  
        return { message: "Process Delete client Complete ", id };
    } catch (error) {
        console.log(error);
        return { message: "error delete client" };
    }
};