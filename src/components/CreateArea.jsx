import React from "react";

function CreateArea(props) {
    return (
        <div>
            <form>
                <input
                    onChange={props.text}
                    name="title"
                    placeholder="Title"
                    value={props.title}
                />
                <textarea
                    onChange={props.text}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={props.content}
                />
                <button onClick={props.addNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
