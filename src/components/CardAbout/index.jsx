import React from 'react';
export function Card({ image, title, text }) {
    return (
      <CardContainer>
        <CardImage src={image} alt="Imagem do Card" />
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardContainer>
    );
  }