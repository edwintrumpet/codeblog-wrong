import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-width: 2px;
    border-style: solid;
    height: 250px;
    border-color: ${({ colors }) => colors.medium};
`;

export const ImageContainer = styled.div`
    flex: 1;
    width: 100%;
`;

export const TextContainer = styled.div`
    width: 100%;
    padding: 8px;
    background-color: ${({ colors }) => colors.background};
`;

export const Category = styled.span`
    font-size: 10px;
    margin-bottom: 8px;
    color: ${({ colors }) => colors.primary};
`;

export const Title = styled.h1`
    font-size: 16px;
    margin-bottom: 8px;
    color: ${({ colors }) => colors.fullContrast};
`;

export const Resume = styled.p`
    font-size: 13px;
    margin-bottom: 8px;
    color: ${({ colors }) => colors.highContrast};
`;

export const AuthorContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const AvatarContainer = styled.div`
    background-color: black;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
`;

export const Author = styled.span`
    font-size: 13px;
    margin-left: 8px;
    color: ${({ colors }) => colors.highContrast};
`;
