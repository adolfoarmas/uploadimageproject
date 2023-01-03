import React from 'react';
import styled from 'styled-components';


const Modal = styled.div`
    width: 250px;
    height: fit-content;
    background: white;
    color: black;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

const Title = styled.h1`
    font-size: 15px;
    padding: 10px;  
    color: white;
    background-color: #5787f8;
    border-radius: 16px 16px 0px 0px;
`;

const MessageText = styled.p`
    font-size: 12px;
    padding: 0px 10px;
`;

const ButtonWarning = styled.button`
    font-size: 15px;
    border-style: solid;
    border-color: #af2727;
    border-radius: 50px;
    border-width: thin;
    width: fit-content;
    height: 30px;
    background-color: transparent;
    color: #af2727;
    padding: 0px 15px;
    align-items: center;
    margin: 0px 15px 10px 10px;

    :hover {
        cursor: pointer;
        color: white;
        background-color: #af2727;
    }
`;

const ButtonNormal = styled.button`
    font-size: 15px;
    border-style: none;
    width: fit-content;
    height: 30px;
    border-radius: 50px;
    color: white;
    background-color: #5787f8;
    padding: 0px 15px;
  
  :hover {
    cursor: pointer;
    color: white;
    background-color: #4b80fd;
  }
`;

const ConfirmationModal = ({title='Critical Action!', text, buttonYes, buttonNo=false, setConfirmation, setDeleteModalConfirmationVisible}) => {

    const handleActions = (confirmation) => {
        setConfirmation(confirmation)
        setDeleteModalConfirmationVisible(false)
    }

    return(
    <Modal>
        <Title>{title}</Title>
        <div>
            <MessageText>{text}</MessageText>
            {buttonYes ? <ButtonWarning onClick={() => {
                handleActions(true)
            }} >Yes</ButtonWarning> : <></>}

            {buttonNo ? <ButtonNormal onClick={() => {
                handleActions(false)
            }} >No</ButtonNormal> : <></>}
        </div>
    </Modal>
    )
}

export default ConfirmationModal