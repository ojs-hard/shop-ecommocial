import styled from "styled-components";

const LetterCenter = styled.div`
    position: relative;
    color: black;
    box-shadow: var(--shd,0 1px 4px rgba(0,0,0,.6));
    border-radius:5px;
    font-size: 47px;
    width: 480px;
    margin: 0px 0px 10px calc((100% - 980px) * 0.5);
    left: 253px;
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
    align-self: start;
    background-color: var(--container-corvid-background-color,rgba(var(--bg,var(--color_11)),var(--alpha-bg,1)));
    margin-top: -30px;
    border: var(--container-corvid-border-width,var(--brw,1px)) solid var(--container-corvid-border-color,rgba(var(--brd,var(--color_15)),var(--alpha-brd,1)));
`;

export default LetterCenter;