import React from 'react';
import { GrCluster } from "react-icons/gr";
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

const categoryTranslations = {
    'trainment': 'Treinamento',
    'pet-health': 'Saúde',
    'fun': 'Diversão',
    'care': 'Cuidados',
};

const Post = ({ title, date, description, author, category, image_url, onClick }) => {

    const translatedCategory = categoryTranslations[category] || category;
    const navigate = useNavigate()
    
 

    return (
        <Container onClick={onClick}>
            <img src={image_url} alt="" />
            <div>
                <GrCluster />
                <h5>{translatedCategory}</h5>
                <p>{date}</p>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
                <p>Autor | {author}</p>
            </div>
        </Container>
    );
};

export default Post;