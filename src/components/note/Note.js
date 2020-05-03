import React from 'react';

class Note extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const note = this.props.noteObject;
        return(
            <div id="note">
                <h4>{note.title}</h4>
                <hr></hr>  
                <p>{note.content}</p>
                <hr></hr>
                <button className="btn btn-danger" data-id={note.id} onClick={this.props.deleteStickyNote}>Delete</button>  
            </div>
        )
    }
}

export default Note;