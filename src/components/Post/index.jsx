import React from 'react';
import { GrCluster } from "react-icons/gr";
import { Container } from './styles';

const Post = ({ title, date, description, author, category, image_url }) => {

    console.log(image_url)

    return (
        <Container>
            <img src={image_url} alt="" />
            <div>
                <GrCluster />
                <h5>{category}</h5>
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