import React from 'react';

import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

import * as S from './styled'

const Profile = () => {
    const {site: { siteMetadata: {author, position, description}}} = useStaticQuery(graphql`
    query MySiteMetadata {
        site {
            siteMetadata {
                position
                description
                author
            }
        }
    }
`)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar />
                <S.ProfileAuthor>
                    {author}
                    <S.ProfileAuthor>{position}</S.ProfileAuthor>
                </S.ProfileAuthor>
                <S.ProfileDescription>{description}</S.ProfileDescription>
            </S.ProfileLink>
        </S.ProfileWrapper>
    )
}

export default Profile;