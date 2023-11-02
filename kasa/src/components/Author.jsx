import React from 'react'

// Ajouter un call sur le fichier JSON pour récupérer les datas au niveau de l'HOST pour ensuite en extraire le name + picture

const Author = ({ name, picture }) => {
    const fullName = name.split(" ");
    return (
        <div className="author">
            <div className="author-name">
                <span>{fullName.at(0)}</span>
                <span>{fullName.at(-1)}</span>
            </div>

            <img src={picture} alt={name}></img>
        </div>
    );
}

export default Author;