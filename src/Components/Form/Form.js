import React from "react"
import "./Form.css"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitIdea = event => {
        event.preventDefault()
        if (this.state.title !== '' && this.state.description !== '') {
            const newIdea = {
                id: Date.now(),
                ...this.state
            }
            this.props.addIdea(newIdea)
            this.clearInputs()
        }
    }

    clearInputs = () => {
        this.setState({ title: '', description: '' })
    }

    render() {
        return (
        <form>
            <input 
            className="form-input" 
            id="title-input" 
            type="text" 
            placeholder="Title..."
            name="title"
            value={this.state.title}
            onChange={event => this.handleChange(event)}/>
            <input 
            className="form-input" 
            id="description-input" 
            type="text" 
            placeholder="Description..."
            name="description"
            value={this.state.description}
            onChange={event => this.handleChange(event)}/>
            <button onClick={event => this.submitIdea(event)}>Submit</button>
        </form>
        )
    }
}

export default Form