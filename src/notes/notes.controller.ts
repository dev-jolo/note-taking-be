import { Request, Response } from 'express'
import fs, {  } from 'fs'
import dotenv from 'dotenv'
import Note from './models/note.model'

dotenv.config()

const _notes: string = process.env.NOTES_PATH!

export async function getNotes (req: Request, res: Response) {
    const notes = JSON.parse(fs.readFileSync(_notes, 'utf-8'))

    if (notes) {
        res.json({
            notes
        })
    } else {
        res.status(404).json({
            error: 'No notes found'
        })
    }
}


export async function getNoteById (req: Request, res: Response) {
    const { id } = req.params;
    const notes: Note[] = JSON.parse(fs.readFileSync(_notes, 'utf-8'));
    const note: Note | undefined = notes.find((n: Note) =>  n.id === +id );

    if (note) {
        res.json(note);
    } else {
        res.status(404).json({error: 'Note not found'})
    }
}

export async function createNote (req: Request, res: Response) {
    const notes: Note[] = JSON.parse(fs.readFileSync(_notes, 'utf-8'))

    const { body: newBody, title: newTitle } = req.body

    // Verify if contains correct body and title property
    if (!newBody || !newTitle) {
        return res.status(400).json({
            error: 'Missing or wrong Title or Body in the request body'
        })
    }

    const newNote: Note = {
        id: Date.now(),
        title: newTitle,
        body: newBody
    }

    notes.push(newNote)

    fs.writeFileSync(_notes, JSON.stringify(notes, null, 2))
    res.status(200).json({
        newNote
    })
}

export async function updateNoteById (req: Request, res: Response) {
    const { id } = req.params;

    const notes: Note[] = JSON.parse(fs.readFileSync(_notes, 'utf-8'))
    const noteToUpdateIndex: number = notes.findIndex((n: Note) => n.id === +id)

    // Verify if note exists
    if (noteToUpdateIndex === -1) {
        return res.status(404).json({
            error: 'Note not found'
        })
    }

    const { body: newBody, title: newTitle } = req.body;

    // Verify if property body and title is wrong
    if (!newBody || !newTitle) {
        return res.status(400).json({
            error: 'Missing or wrong Title or Body in the request body'
        })
    }

    const updatedNote: Note = {
        ...notes[noteToUpdateIndex],
        title: newTitle,
        body: newBody
    }

    const updatedNotes = [...notes]
    updatedNotes[noteToUpdateIndex] = updatedNote

    fs.writeFileSync(_notes, JSON.stringify(updatedNotes, null, 2))

    res.json(updatedNote)
}

export async function deleteNoteById (req: Request, res: Response) {
    const { id } = req.params;

    const notes: Note[] = JSON.parse(fs.readFileSync(_notes, 'utf-8'))
    const noteToDelete = notes.find((n: Note) => n.id === +id)

    // Verify if note exists
    if (!noteToDelete) {
        return res.status(404).json({
            error: 'Note not found'
        })
    }

    // Filter out the note with the provided ID
    const updatedNotes = notes.filter((n: Note) => n.id !== +id)  

    fs.writeFileSync(_notes, JSON.stringify(updatedNotes, null, 2))

    res.send({
        message: 'Note deleted successfully'
    })
}

