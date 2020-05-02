import React from 'react';

class Note extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const note = this.props.noteObject;
        console.log("note", note);
        return(
            <div>
                <ul>
                    {
                        Object.keys(note).map(function(item, index){
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Note;