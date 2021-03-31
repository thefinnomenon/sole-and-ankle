import React from 'react';
import styled, { css } from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';

// There are 3 variants possible, based on the props:
//   - new-release
//   - on-sale
//   - default
const TYPES = {
    'new-release': css`
        background-color: hsl(240, 60%, 63%);
        span::before {
            content: "New Release!";
        };
    `,
    'on-sale': css`
        background-color: hsl(340, 65%, 47%);
        span::before {
            content: "Sale";
        }
    `,
    'default': css`
        display: none;
    `
}

const Flag = ({ variant }) => {
    return (
        <Wrapper variant={variant}>
            <span></span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 12px;
    right: -4px;
    height: 32px;
    width: fit-content;
    padding: 8px;
    color: white;
    font-weight: 700;
    ${props => TYPES[props.variant]};
`;

export default Flag;
