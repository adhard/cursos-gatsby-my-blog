import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled'

const Avatar =() => {
    const { avataImage } = useStaticQuery(
        graphql`
            query {
                avataImage: file(relativePath: {eq : "profile-photo.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 60){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )
    return (
        <>
            <S.AvatarWrapper fluid={avataImage.childImageSharp.fluid} />
        </>
    )
}

export default Avatar;