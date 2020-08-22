import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Avatar =() => {
    const { avataImage } = useStaticQuery(
        graphql`
            query {
                avataImage: file(relativePath: {eq : "profile-photo.jpg"}) {
                    childImageSharp {
                        fixed(width: 60, height: 60){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }               
            }
        `
    )
    return (
        <>
        <Img fixed={avataImage.childImageSharp.fixed} />
        </>
    )
}

export default Avatar;