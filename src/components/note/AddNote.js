import React from 'react';

class AddNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {title: '', content: ''};
    }
    handleInputChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    }
    addSticky = (e) => {
        e.preventDefault();
        this.props.addStickyNote(this.state);
    }
    render(){
        return (
            <div id="addNote">
                <form onSubmit={this.addSticky}> 
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" name="title" className="form-control" onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Content</label>
                        <textarea name="content" className="form-control" onChange={this.handleInputChange} required>
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Note</button>
                </form>
            </div>
        );
    }
}

export default AddNote;