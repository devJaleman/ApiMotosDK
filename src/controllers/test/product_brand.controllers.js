import {Insert_Product_Brand,Select_Product_Brand_Id,Select_Product_Brand_All,Update_Product_Brand,Delete_Product_Brand} from "../models/product_brand.controllers.js"


export const Test_Insert = async (req, res) =>{
	try {
        const result = await Insert_Product_Brand(req.body);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
}


export const Test_Select_Id = async (req, res) =>{
    try {
        const result = await Select_Product_Brand_Id(req.params);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
}


export const Test_Select_All = async (req, res) =>{

    try {
		const result = await Select_Product_Brand_All(req.body);
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
		const result = await Update_Product_Brand(data);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
	
}


export const Test_Delete = async (req, res) =>{

    try {
		const result = await Delete_Product_Brand(req.params);
		res.status(200).json({result});
	} catch (error) {
        console.error(error);
		res.status(500).json({error});
	}
	
}
