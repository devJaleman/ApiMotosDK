import { pool } from "../../db/db.js";




export const Insert_Company_Direction = async (params) =>{
	const data = params;
    let process = "Insert_company_direction";
    let StatusProcess = false;
    let registeredId = null; 
    try {
        await pool.query(
            `INSERT INTO company_direction 
            (name, country, city, district, direction, resume, map, email, week, saturday, sunday, comment, footer) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`,
            [data.name, data.country, data.city, data.district, data.direction, data.resume, data.map, data.email, data.week, data.saturday, data.sunday, data.comment, data.footer]
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

export const Select_Company_Direction_Id = async (params) =>{
	const {id} = params;
    let process = "Select_company_direction_Id";
    let StatusProcess = false;
    try {
        const sql = `SELECT * FROM company_direction WHERE id = '${id}'`;
        const result = await pool.query(sql);  
        StatusProcess = true;
        return {process, rows:result.rows, StatusProcess};
    } catch (error) {
        console.log(error);
        return {process, StatusProcess, error};
    }  
}

const Prepare_Company_Direction_Sql = (params) => {
    try {
        let sql = 'SELECT *  FROM company_direction';
        let sqlNum = 'SELECT COUNT(1) AS total  FROM company_direction';
        const {name, country, city, district, direction, resume, map, email, week, saturday, sunday, comment, footer, status, page, perPage } = params;
        const conditions = [];
            if (name) {
                conditions.push(`name ='${name}'`);
            }
            if (country) {
                conditions.push(`country ='${country}'`);
            }
            if (city) {
                conditions.push(`city ='${city}'`);
            }
            if (district) {
                conditions.push(`district ='${district}'`);
            }
            if (direction) {
                conditions.push(`direction ='${direction}'`);
            }
            if (resume) {
                conditions.push(`resume ='${resume}'`);
            }
            if (map) {
                conditions.push(`map ='${map}'`);
            }
            if (email) {
                conditions.push(`email ='${email}'`);
            }
            if (week) {
                conditions.push(`week ='${week}'`);
            }
            if (saturday) {
                conditions.push(`saturday ='${saturday}'`);
            }
            if (sunday) {
                conditions.push(`sunday ='${sunday}'`);
            }
            if (comment) {
                conditions.push(`comment ='${comment}'`);
            }
            if (footer) {
                conditions.push(`footer ='${footer}'`);
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
export const Select_Company_Direction_All = async (params) =>{
    const prepare = await Prepare_Company_Direction_Sql(params);
    const {sql, sqlNum, page, perPage} = prepare;
    let process = "Select_company_direction_All";
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

export const Update_Company_Direction= async (data) => {  
    const { body, params } = data;
    const {name, country, city, district, direction, resume, map, email, week, saturday, sunday, comment, footer, status} = body;
    const {id} = params;
    let sql = null;
    try {
        if (name) {
            sql =`UPDATE company_direction SET name = '${name}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (country) {
            sql =`UPDATE company_direction SET country  = '${country}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (city) {
            sql =`UPDATE company_direction SET city  = '${city}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (district) {
            sql =`UPDATE company_direction SET district = '${district}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (direction) {
            sql =`UPDATE company_direction SET direction  = '${direction}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (resume) {
            sql =`UPDATE company_direction SET resume  = '${resume}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (map) {
            sql =`UPDATE company_direction SET map  = '${map}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (email) {
            sql =`UPDATE company_direction SET email = '${email}'  WHERE id = ${id}`;
            await pool.query(sql); 
        }
        if (week) {
            sql =`UPDATE company_direction SET week  = '${week}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (saturday) {
            sql =`UPDATE company_direction SET saturday  = '${saturday}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (sunday) {
            sql =`UPDATE company_direction SET sunday  = '${sunday}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (comment) {
            sql =`UPDATE company_direction SET comment  = '${comment}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (footer) {
            sql =`UPDATE company_direction SET footer  = '${footer}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        if (status) {
            sql =`UPDATE company_direction SET active  = '${status.active}'  WHERE id = ${id}`;
            await pool.query(sql);          
        }
        return { message: "Process Update_company_direction ", id };
    } catch (error) {
        console.log(error);
        return { message: "error Update_company_direction" };
    }
};

export const Delete_Company_Direction= async (params) => {
    const { id } = params;
    let sql = `DELETE FROM company_direction WHERE id = ${id}`;
    try {
        await pool.query(sql);  
        return { message: "Process Delete_company_direction ", id };
    } catch (error) {
        console.log(error);
        return { message: "error Delete_company_direction" };
    }
};