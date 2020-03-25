import styled from 'styled-components';

const BREAK_TABLET = '500px';
const BREAK_DESKTOP = '768px';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-gap: 16px;
    padding: 16px;
    @media (min-width: ${BREAK_TABLET}) {
        grid-template-columns: repeat(2, auto);
    }
    @media (min-width: ${BREAK_DESKTOP}) {
        grid-template-columns: repeat(3, auto);
    }
`;
