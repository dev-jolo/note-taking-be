import { Router } from 'express'
import { createNote, deleteNoteById, getNoteById, getNotes, updateNoteById } from './notes.controller';

const notesRouter: Router = Router();

notesRouter.get('/', getNotes);
notesRouter.get('/:id', getNoteById);
notesRouter.post('/', createNote);
notesRouter.put('/:id', updateNoteById);
notesRouter.delete('/:id', deleteNoteById)

export default notesRouter;