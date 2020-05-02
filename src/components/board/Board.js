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
        this.setState(
            { notes: [...this.state.notes, item] }
        ); 
    }
    render(){
        const notes = this.state.notes;
        return (
            <div className="boardContainer">
                <AddNote addStickyNote={this.addStickyNote}/>
                <div className="board-container">
                    {
                        notes.map(function(item, index){
                            return <Note key={index} noteObject={item}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Board;