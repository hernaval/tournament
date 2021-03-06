import {Request,Response} from "express"
import {getRepository} from "typeorm"

import { Player } from "../entity/Player"
import { Team } from "../entity/Team"

export  class PlayerController{

    static add = async(req:Request,res:Response) =>{
        let {firstname,lastname,description} = req.body

        
         const playerRepo = getRepository(Player)

        let player = new Player()
        player.firstname = firstname
        player.lastname = lastname
        player.description  = description

        //ajout de sa team
        let team = new Team()
        team.id = 4
        player.team = team

        await playerRepo.save(player)
        .then(() =>res.json({"success":"player added !"}))
        .catch(err => res.json(err.message)) 
    }
}