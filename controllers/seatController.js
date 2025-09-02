import seat from "../models/seat.js";
import { isItAdmin,isItCustomer } from "./userController.js";


export async function addSeat(req,res){
  
    if(isItAdmin(req)){     
    const seatData = req.body;
    const newSeat = new seat(seatData);
try{
    await newSeat.save()
    res.json({message : "seat added successfully"})

}catch(error){
    res.status(404).res.json({message : "seat added failed", error : error.message})
}}else{
    res.status(403).json({message : "only admin can add seat"})
}
}



export async function updateSeat(req,res) {
    
    try{
        const seatNumber = req.params.seatNumber;
        const seatData = req.body;

        if(isItAdmin(req)){
            await seat.updateOne({seatNumber : seatNumber},seatData)
                res.json({message : "seat update succesfully"})
             return;
        }else{
            res.status(403).json({message : "only admin can update seat"})
        }
            
        }catch{
        res.status(500).res.json({message : "faild to update seat"})
    }
    }


    export async function deleteSeat(req,res){
        
          
          try{
             if(isItAdmin(req)){
            const seatNumber = req.params.seatNumber;
            await seat.deleteOne({seatNumber : seatNumber})
                res.json({message : "seat delete succesfully"})
                
             return;
        }else{
            res.status(403).json({message : "only admin can delete seat"})
        }
          } catch (error) {
                     res.status(500).json({ message: "failed to delete seat", error: error.message });
}

    }

export async function  getALLSeat(req,res){
    try{
        if(isItAdmin(req)){
            const seats = await seat.find();
            res.json(seats);
            return;
        }if(isItCustomer(req)){
            const seats = await seat.find({availability : true});
            res.json(seats);
            return;
        }

    }catch(error){
        res.status(500).json({message : "failed to fetch seats", error : error.message})
    }
}

    
