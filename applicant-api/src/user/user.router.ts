/**
 * Required External Modules and Interfaces
 * 
 * 
 * 
 * 
 */

import express, { Request, Response } from "express";
import * as UserService from "./user.service";
import { User } from "./user.interface";
import { Users } from "./users.interface";

/**
 * Router Definition
 * 
 */

export const userRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

userRouter.get("/awesome/applicant", async (req: Request, res: Response) => {
    try {
      const users: User[] = await UserService.findAll();
  
      res.status(200).send(users);
    } catch (message) {
      res.status(500).send(message);
    }
  });



// PUT items/:email

userRouter.get("/awesome/applicant", async (req: Request, res: Response) => {
    try {
      const users: User[] = await UserService.findAll();
  
      res.status(200).send(users);
    } catch (message) {
      res.status(500).send(message);
    }
  });

  userRouter.get("/awesome/applicant/update", async (req: Request, res: Response) => {
    try {
      //const user: User = req.body;
      const user: User = {
        name: "Ravali",
        email: "ravali10sri@gmail.com",
        location: "UnitedKingdom",
        role: "Doctor"
        }
        
    console.log("here")
      const userDet = await UserService.find(user.email);

      if(userDet){
        const updatedItem = await UserService.update(user,user.email);
        res.status(200).json(updatedItem);
      }
  
      
    } catch (e) {
      res.status(500).send(e);
    }
  });


// DELETE items/:id

userRouter.delete("/awesome/applicant/:email", async (req: Request, res: Response) => {
    try {

      //const user: User = req.body;
      const user: User = {
        name: "Ravali",
        email: "ravali10sri@gmail.com",
        location: "UnitedKingdom",
        role: "Doctor"
        }
      
      await UserService.remove(user.email);
  
      res.sendStatus(204);
    } catch (e) {
      res.status(500).send(e);
    }
  });