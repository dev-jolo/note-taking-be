import { Router } from 'express'
import { addNote, deleteNoteById, getNoteById, getNotes, updateNoteById } from './notes.controller';

const notesRouter: Router = Router();

notesRouter.get('/', getNotes);
notesRouter.get('/:id', getNoteById);
notesRouter.post('/', addNote);
notesRouter.put('/:id', updateNoteById);
notesRouter.delete('/:id', deleteNoteById)

export default notesRouter;