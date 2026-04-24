import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../store/actions/noteAction";
import NoteCard from "./NoteCard";

const NotesList = () => {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.note.note);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Notes</h2>
      {note.length === 0 ? (
        <p className="text-gray-500">No notes available.</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {note.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;