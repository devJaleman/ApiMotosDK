import path from 'path';
import { fileURLToPath } from 'url';


export const Upload_File = async (req) =>{
	try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return {"message":"not file","status":false};
        }else{
            const productFile = req.files.file;
            const currentModuleFile = fileURLToPath(import.meta.url);
            const rutaAlmacenamiento = path.join(path.dirname(currentModuleFile), productFile.name);
            return new Promise((resolve, reject) => {
                productFile.mv("src/controllers/docs/" + productFile.name, (error) => {
                    if (error) {
                        reject({ error, "message": "error upload file", "status": false });
                    } else {
                        resolve({ "message": "Upload complete", "status": true });
                    }
                });
            });
        }
	} catch (error) {
        console.error(error);
		return{uploadFile:error};
	}
}