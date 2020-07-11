import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function CharacterItem({
    character: { name, status, image }
}) {
    return (
        <div className="card">
            <img className="image" src={image} />
            <div>
                <h3>{name}</h3>
                <p>Status: {status}</p>
            </div>
        </div>

    )
}