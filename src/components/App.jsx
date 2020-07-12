import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    const [notes, setNotes] = useState([]);

    function handleChange(event) {
        const { value, name } = event.target;

        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function addNote(event) {
        setNotes(prevValue => {
            return [...prevValue, inputText];
        });
        setInputText({
            title: "",
            content: ""
        })
        event.preventDefault()
    }

    function deleteNote(id) {
        setNotes(prevValue => {
            return prevValue.filter((note, index) => index !== id)
        })
    }

    return (
        <div>
            <Header />
            <CreateArea
                text={handleChange}
                addNote={addNote}
                title={inputText.title}
                content={inputText.content}
            />
            {notes.map((note, index) => (
                <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
