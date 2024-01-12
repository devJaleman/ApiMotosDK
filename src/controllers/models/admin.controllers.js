import { pool } from "../../db/db.js";




export const Insert_Admin = async (params) =>{
	const data = params;
    let process = "Insert_Admin";
    let StatusProcess = false;
    let registeredId = null; 
    try {
        await pool.query(
            `INSERT INTO admin 
            (username, password, fullname, identification, phone, email, rol, permissions) 
            VALUES ($1, $2, $3, $4, $5, $6 ,$7, $8);`,
            [data.username, data.password, data.fullname, data.identification, data.phone, data.email, data.rol, data.permissions]
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

export const Select_Admin_Id = async (params) =>{
	const {id} = params;
    let process = "Select_Admin_Id";
    let StatusProcess = false;
    try {
        const sql = `SELECT * FROM admin WHERE id = '${id}'`;
        const result = await pool.query(sql);  
        StatusProcess = true;
        return {process, rows:result.rows, StatusProcess};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, error};
    }  
}

const Prepare_Admin_Sql = (params) => {
    try {
        let sql = 'SELECT * FROM admin';
        let sqlNum = 'SELECT COUNT(1) AS total  FROM admin';
        const {username, password, fullname, identification, phone, email, rol, permissions, status, page, perPage  } = params;
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
            if (identification) {
                conditions.push(`identification LIKE '%${identification}%'`);
            }
            if (phone) {
                conditions.push(`phone LIKE '%${phone}%'`);
            }
            if (email) {
                conditions.push(`email LIKE '%${email}%'`);
            }
            if (rol) {
                conditions.push(`rol LIKE '%${rol}%'`);
            }
            if (permissions) {
                conditions.push(`permissions LIKE '%${permissions}%'`);
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

export const Select_Admin_All = async (params) =>{
    const prepare = await Prepare_Admin_Sql(params);
    const {sql, sqlNum, page, perPage} = prepare;
    let process = "Select_Admin_All";
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

export const Update_Admin= async (data) => {  
    const { body, params } = data;
    const {username, password, fullname, identification, phone, email, rol, permissions, description, status} = body;
    const {id} = params;
    let sql = null;
    try {
        if (username) {
            sql =`UPDATE admin  SET username = '${username}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }

        if (password) {
            sql =`UPDATE admin  SET password = '${password}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (fullname) {
            sql =`UPDATE admin  SET fullname = '${fullname}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (identification) {
            sql =`UPDATE admin  SET identification = '${identification}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (phone) {
            sql =`UPDATE admin  SET phone = '${phone}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (email) {
            sql =`UPDATE admin  SET email = '${email}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (rol) {
            sql =`UPDATE admin SET rol = '${rol}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (permissions) {
            sql =`UPDATE admin  SET permissions = '${permissions}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (description) {
            sql =`UPDATE admin  SET description = '${description}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (status) {
            sql =`UPDATE admin  SET active  = '${status.active}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        return { message: "Process update Complete ", id };
    } catch (error) {
        console.log(error);
        return { message: "error update media" };
    }
};

export const Delete_Admin= async (params) => {
    const { id } = params;
    let sql = `DELETE FROM admin WHERE id = ${id}`;
    try {
        await pool.query(sql);  
        return { message: "Process Delete Admin Complete ", id };
    } catch (error) {
        console.log(error);
        return { message: "Error Delete admin" };
    }
};