import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { User } from "src/class/user"

@Injectable()
export class UserService {
    
    getUsers(url: string): User[]{
        let datos = fs.readFileSync(url, 'utf-8');

        let lineas = datos.split('\r\n');
        const users = [];

        for(let linea of lineas) {
            let partes = linea.split(',');

            const user= new User(partes[0],parseInt(partes[1]), partes[2]);

            users.push(user);
        }
        console.log(users)
        return users;
    }
}
