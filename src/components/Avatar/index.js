import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Avatar =() => {
    const { avataImage, background } = useStaticQuery(
        graphql`
            query {
                avataImage: file(relativePath: {eq : "profile-photo.jpg"}) {
                    childImageSharp {
                        fixed(width: 60, height: 60){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }

                background: file(relativePath: {eq : "background.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 560, maxHeight: 560){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )
    return (
        <>
        <Img fixed={avataImage.childImageSharp.fixed} />
        <Img fluid={background.childImageSharp.fluid} style={{width:'560px'}}/>
        </>
    )
}

export default Avatar;