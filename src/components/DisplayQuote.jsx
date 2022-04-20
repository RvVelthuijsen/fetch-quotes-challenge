import React from 'react';
import '../App.css';

function DisplayQuote({quote}) {
    return (
    quote && (
        <figure className='DisplayQuote'>
        <img src={quote.image} alt={quote.character} />
        <figcaption>
        <blockquote>{quote.quote}</blockquote>
        <cite>{quote.character}</cite>
        </figcaption>
        </figure>
    ))
}

export default DisplayQuote;