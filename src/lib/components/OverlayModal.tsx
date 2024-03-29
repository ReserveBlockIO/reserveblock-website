import styled from "styled-components";
import { isMobile } from "../utils";


interface IContainer {
    visible: boolean;
    onClick: () => void;

}

const Container = styled.div<IContainer>`
    position: fixed;

    ${isMobile() ? `padding-top: 32px; overflow-y:scroll;` : `
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    z-index: 1000;
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    transition: opacity .3s;

    ${(props) => (props.visible ? `opacity:1;` : `pointer-events:none; opacity:0;`)};

    
    ${(isMobile() ? `padding-bottom: 60px;` : ``)}

`;

interface Props {
    visible: boolean;
    onClose: () => void;
    children: JSX.Element | JSX.Element[];
    noScroll?: boolean;

}

const OverlayModal = (props: Props) => {

    return (
        <Container
            visible={props.visible}
            onClick={() => {
                props.onClose();
            }}
        >
            <div style={{ height: '100vh', overflowY: props.noScroll ? 'hidden' : 'scroll' }}>
                <div style={{ height: 60 }} />
                <div className="p-2 p-md-5">
                    {props.children}
                </div>
            </div>
        </Container>)
}

export default OverlayModal;