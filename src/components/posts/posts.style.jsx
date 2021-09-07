import styled from "styled-components";
import { Container } from "react-bootstrap";

export const PostStyled = styled.div`
    --brw: 0px;
    --brd: var(--color_15);
    --bg: var(--color_18);
    --rd: 0px;
    --shd: none;
    --alpha-bg: 1;
    --alpha-brd: 1;
    --boxShadowToggleOn-shd: none;
    --shc-mutated-brightness: 94,45,29;
    border: var(--container-corvid-border-width,var(--brw,1px)) solid var(--container-corvid-border-color,rgba(var(--brd,var(--color_15)),var(--alpha-brd,1)));
    background-color: var(--container-corvid-background-color,rgba(var(--bg,var(--color_11)),var(--alpha-bg,1)));
    border-radius: var(--rd,5px);
    box-shadow: var(--shd,0 1px 4px rgba(0,0,0,.6));
    position: static;
    display: grid;
    height: auto;
    width: 100%;
    min-height: auto;
    grid-template-rows: min-content 1fr;
    grid-template-columns: 100%;
`;

export const PostBack = styled.div`
    width: 100%;
    --column-width: 392px;
    --column-flex: 392;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(254 242 240);
`;