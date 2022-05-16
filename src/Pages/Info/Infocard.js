import React from 'react';

const Infocard = ({info}) => {
    const {title,img,description}=info
    return (
        <div className='card card-side pl-12 bg-gradient-to-r from-secondary to-primary'>
            <figure><img src={img} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default Infocard;