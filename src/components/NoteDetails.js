import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import NotesService from "../services/NotesService";

const NoteDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const [currentNote, setCurrentNote] = useState('');

    useEffect(() => {
        NotesService.get(id).then(response => {
            setCurrentNote(response.data);
        }).catch(error => {
            console.log('something went wrong', error);
        });
    }, [id]);

    const handleDelete = () => {
        NotesService.remove(id).then(response => {
            history.push('/')
        }).catch(error => {
            console.log('something went wrong', error);
        });
    }
    const handleEdit = () => {
        history.push(`/notes/edit/${id}`)
    }
    return (
        <div className="note-details main-content">
            <article>
                <h5 className="text-capitalize primary-color">{currentNote.title}</h5>
                <div className="mb-3 font-italic metadata">
                    <span>{currentNote.updatedAt}</span>
                    <span className="text-capitalize">{currentNote.category}</span>
                </div>
                <div className="mb-3">
                    {currentNote.body}
                </div>
            </article>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete} className="ml-3">Delete</button>
        </div>
    );
}

export default NoteDetails;