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
            <div>
                <form>
                    <dl>
                        <dt><span>Note Title</span></dt>
                        <dd><input type="text" name="title" onChange={this.handleInputChange}/></dd>
                    </dl>
                    <dl>
                        <dt><span>Note Content</span></dt>
                        <dd><input type="text" name="content" onChange={this.handleInputChange}/></dd>
                    </dl>
                    <button onClick={this.addSticky}>Add Note</button>
                </form>
            </div>
        );
    }
}

export default AddNote;