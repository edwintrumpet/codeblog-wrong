import styled from 'styled-components';
import colors from '../constants/colors';

const BREAK_POINT = '700px';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    height: 60px;
    background-color: ${colors.primary};

    @media (min-width: ${BREAK_POINT}) {
        height: 80px;
        padding: 0 32px;
    }
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
`;

export const DesktopIcon = styled.div`
    display: none;
    @media (min-width: ${BREAK_POINT}) {
        display: initial;
    }
`;

export const MobileIcon = styled.div`
    @media (min-width: ${BREAK_POINT}) {
        display: none;
    }
`;

export const BrandText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
`;

export const Title = styled.h1`
    color: ${colors.lightGray};
    font-size: 16px;

    @media (min-width: ${BREAK_POINT}) {
        font-size: 22px;
    }
`;

export const Subtitle = styled.h2`
    color: ${colors.lightGray};
    font-size: 10px;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media (min-width: ${BREAK_POINT}) {
        font-size: 16px;
    }
`;
