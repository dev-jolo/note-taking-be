import { Request, Response } from 'express'


export async function getNotes (req: Request, res: Response) {
    res.status(200).send({
        message: 'Get All Notes'
    })
}

export async function getNoteById (req: Request, res: Response) {
    res.status(200).send({
        message: 'Get Note By Id'
    })
}

export async function addNote (req: Request, res: Response) {
    res.status(200).send({
        message: 'Add Note'
    })
}

export async function updateNoteById (req: Request, res: Response) {
    res.status(200).send({
        message: 'Update Note'
    })
}

export async function deleteNoteById (req: Request, res: Response) {
    res.status(200).send({
        message: 'Delete Note'
    })
}

