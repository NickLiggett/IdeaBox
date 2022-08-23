import React from "react"
import Card from "../Card/Card"
import "./Ideas.css"

function Ideas({ideas, deleteIdea}) {
    let cards = ideas.map(idea => {
    return <Card 
    key={idea.id} 
    id={idea.id} 
    title={idea.title} 
    description={idea.description}
    deleteIdea={deleteIdea}/>
    })
    return (
        <div className="ideas">
            {cards}
        </div>
    )
}

export default Ideas