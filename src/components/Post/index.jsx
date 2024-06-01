import React from 'react';
import { GrCluster } from "react-icons/gr";
import { Container } from './styles';

const categoryTranslations = {
    'trainment': 'Treinamento',
    'pet-health': 'Saúde',
    'fun': 'Diversão',
    'care': 'Cuidados',
};

const Post = ({ title, date, description, author, category, image_url }) => {

    const translatedCategory = categoryTranslations[category] || category;

    return (
        <Container>
            <img src={image_url} alt="" />
            <div>
                <GrCluster />
                <h5>{translatedCategory}</h5>
                <p>{date}</p>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
                <p>{author}</p>
            </div>
        </Container>
    );
};

export default Post;