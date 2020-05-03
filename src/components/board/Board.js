import React from 'react';
import AddNote from '../note/AddNote';
import Note from '../note/Note';
class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: []
        };
    }
    addStickyNote = (item) => {
        item.id = this.state.notes.length + 1;
        this.setState(
            { notes: [...this.state.notes, item] }
        ); 
    }
    deleteStickyNote = (e) => {
        var index = e.target.dataset.id,
            currState = [...this.state.notes],
            newArr = currState.splice(index - 1, 1);
        this.setState(
            { notes: newArr }
        );
    }
    render(){
        const notes = this.state.notes;
        console.log("NOTES", notes);
        return (
            <div className="boardContainer">
                <AddNote addStickyNote={this.addStickyNote}/>
                <div className="board-container">
                    {
                        notes.map((item, index) => {
                            return <Note key={index} deleteStickyNote={this.deleteStickyNote} noteObject={item}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Board;