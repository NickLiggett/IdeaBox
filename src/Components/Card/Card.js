import React from "react"
import "./Card.css"

const Card = ({ title, description, id, deleteIdea }) => {
    return (
        <div className="card">
                <div className="card-innards">
                <h2>{title}</h2>
                <p>{description}</p>
                <button className="delete-button" onClick={() => deleteIdea(id)}>🗑</button>
                </div>
            </div>
        )
    }
    

export default Card