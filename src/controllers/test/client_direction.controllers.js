import {Insert_Client_Direction,Select_Client_Direction_Id,Select_Client_Direction_All,Update_Client_Direction,Delete_Client_Direction} from "../models/client_direction.controllers.js"


export const Test_Insert = async (req, res) =>{
	try {
        const result = await Insert_Client_Direction(req.body);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
}


export const Test_Select_Id = async (req, res) =>{
    try {
        const result = await Select_Client_Direction_Id(req.params);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
}


export const Test_Select_All = async (req, res) =>{

    try {
		const result = await Select_Client_Direction_All(req.body);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
	
}


export const Test_Update = async (req, res) =>{
    const data = {
        params: req.params,
        body: req.body
    }
    try {
		const result = await Update_Client_Direction(data);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
	
}


export const Test_Delete = async (req, res) =>{

    try {
		const result = await Delete_Client_Direction(req.params);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
	
}
