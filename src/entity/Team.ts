import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Player} from "./Player"
@Entity()
export class Team {

    @PrimaryGeneratedColumn()
    id: number

    @Column()

    @Column({unique : true})
    name: string

    @Column({unique : true})
    warName: string
    
    @Column({type : "date"})
    birth : string

    @Column({nullable : true})
    flag : string

    @Column()
    description : string

    //relation avec player
    @OneToMany(type => Player, player => player.team)
    players : Player[]


}
