/**
 * Data Model Interfaces
 */

import { User } from "./user.interface";
import { Users } from "./users.interface";

/**
 * In-Memory Store
 */

let users: Users = {
    1:{
        name: "Ravali",
        email: "ravali10sri@gmail.com",
        location: "UnitedStates",
        role:"Software Engineer"
    }
  };


/**
 * Service Methods
 */

export const findAll = async (): Promise<User[]> => Object.values(users);

export const find = async (email: string): Promise<User | null> =>{

    return Object.values(users).filter((user,index)=>{
        user.email=email
    })[0]

}

export const findIndex = (email: string): any =>{

    Object.values(users).map((user,index)=>{
        if(user.email=email) {
            return index
        }
    })
}

export const update = async (
    userUpdate: User,
    email: string,
  ): Promise<User | null> => {
    const user = await find(email);

    if (!user) {
      return null;
    }

    const id=findIndex(email);
    console.log("++++++++"+id)
  
    users[id] = { ...userUpdate };
  
    return users[id];
  };

  export const remove = async (email: string,): Promise<null | void> => {
    const user = await find(email);
  
    if (!user) {
        return null;
    }
    const id=findIndex(email);
  
    delete users[id];

  };