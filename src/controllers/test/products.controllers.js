import {Insert_Products,Select_Products_Id,Select_Products_All,Update_Products,Delete_Products} from "../models/products.controllers.js"


export const Test_Insert = async (req, res) =>{
	try {
        const result = await Insert_Products(req.body);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
}


export const Test_Select_Id = async (req, res) =>{
    try {
        const result = await Select_Products_Id(req.params);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
}


export const Test_Select_All = async (req, res) =>{

    try {
		const result = await Select_Products_All(req.body);
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
		const result = await Update_Products(data);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
	
}


export const Test_Delete = async (req, res) =>{

    try {
		const result = await Delete_Products(req.params);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
	
}
