import React from "react"
import Form from "../Form/Form"
import Ideas from "../Ideas/Ideas"
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      ideas: []
    }
  }

  addIdea = newIdea => {
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }

  deleteIdea = id => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id)
    this.setState({ ideas: filteredIdeas })
}

  render() {
    return (
      <main className="app">
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea}/>
        {!this.state.ideas.length && <h2>Add some ideas!</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>
    )
  }
}

export default App