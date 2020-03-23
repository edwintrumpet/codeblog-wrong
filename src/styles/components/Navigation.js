import styled from 'styled-components';
import colors from '../constants/colors';

const BREAK_POINT = '700px';

export const DesktopMenu = styled.nav`
    height: 100%;
    display: none;

    @media (min-width: ${BREAK_POINT}) {
        display: initial;
    }
`;

export const DesktopList = styled.ul`
    display: flex;
    height: 100%;
`;

export const ItemMenuDesktop = styled.li`
    display: flex;
    align-items: center;
    color: ${colors.lightGray};
    height: 100%;
    padding: 0 16px;
    transition: color .3s ease, background-color .3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const MobileMenuIcon = styled.div`
    display: initial;

    @media (min-width: ${BREAK_POINT}) {
        display: none;
    }
`;

export const BackgroundMenu = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    min-height: 100%;
    width: ${({ width }) => width};
    background-color: ${({ background }) => background};
    transition: background-color .3s ease;
`;

export const MobileMenu = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    min-height: 100%;
    width: ${({ width }) => width};
    background-color: ${({ theme }) => theme.background};
    overflow: hidden;
    transition: width .3s ease;
`;

export const MobileList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 32px;
`;

export const MobileItem = styled.li`
    color: ${({ theme }) => theme.fullContrast};
    height: 40px;
    display: flex;
    align-items: center;
`;

export const CloseContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`;
