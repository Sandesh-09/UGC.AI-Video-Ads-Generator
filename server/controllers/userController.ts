import { Request, Response } from "express";
import * as Sentry from "@sentry/node";
import { prisma } from "../configs/prisma.js";

// Get user Credits              /* 11*/
export const getUserCredits = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    const { email } = req.body;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existingUserWithEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUserWithEmail && existingUserWithEmail.id !== userId) {
      return res.status(400).json({
        message: "This email is already linked with another account",
      });
    }

    const user = await prisma.user.upsert({
      where: { id: userId },
      update: { email },
      create: {
        id: userId,
        email,
        credits: 20,
      },
    });

    return res.json({ credits: user.credits });

  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

// Get all user projects
export const getAllProjects = async (req: Request, res: Response) => {
    try {
        const {userId} = req.auth();
        
        const projects = await prisma.project.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.json({projects});
    } 
    catch (error : any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.code || error.message})
    }
}

// get project by id 
export const getProjectById = async (req: Request, res: Response) => {
    try {
        const {userId} = req.auth();
        const projectId = req.params.projectId as string;

        const project = await prisma.project.findUnique({
            where: {
                id: projectId, userId
            },          
        });

        if(!project) {
            return res.status(404).json({message: 'Project not found'})
        }
        res.json({project});
    } 
    catch (error : any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.code || error.message})
    }
}

// publish or unpublish project
export const toggleProjectPublic = async (req: Request, res: Response) => {
    try {
        const {userId} = req.auth();
        const projectId = req.params.projectId as string;

        const project = await prisma.project.findUnique({
            where: {
                id: projectId, userId
            },          
        });

        if(!project) {
            return res.status(404).json({message: 'Project not found'})
        }

        if(!project?.generatedImage && !project?.generatedVideo) {
            return res.status(400).json({message: 'Image or Video is not generated yet'})
        }

        await prisma.project.update({
            where: {
                id: projectId
            },
            data: {
                isPublished: !project.isPublished
            }
        });

        res.json({isPublished: !project.isPublished});
    } 
    catch (error : any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.code || error.message})
    }
}