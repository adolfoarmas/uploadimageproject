import React, {  useContext, useEffect, useState } from 'react';
import ConfirmationModal from '../modals/confirmationModal.jsx'
import styled from 'styled-components';
import Context from "../context/imageContext";
import deleteImage from '../services/deleteImage';


const Wrapper = styled.div`
    color: #002374;
    border: 2px 0px 2px 0px solid;
    border-color: #002374;
    padding: 2.5px;
    width: 100%;
    height:1.5rem;
    margin: 5px;
    display:flex;
    gap: 0.5rem;

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

    :hover {
        cursor: pointer;
        color: white;
        background-color: #af2727;
    }
`;

const BackGround = styled.div`

  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

`;

const ModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);

`;

const ButtonShowAs = styled.button`
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

export default function ActionsBar() {

    const {imagesChecked, setImagesChecked, imageDeleted, setImageDeleted, imagesViewType, setImagesViewType} = useContext(Context);
    const [confirmation, setConfirmation] = useState(null)
    const [deleteModalConfirmationVisible, setDeleteModalConfirmationVisible] = useState(false)

    useEffect(()=>{
       if(confirmation){
        handleDeleteSelected()
        setConfirmation(false)
       }
    }, [confirmation, deleteModalConfirmationVisible, imagesViewType])

    const openModalConfirmation = (e) => {
        e.preventDefault();;
        setDeleteModalConfirmationVisible(true);
    }
    
    const handleDeleteSelected = async () => {
        const deleteItemsSelected = async () => {
            let data = await Promise.all(imagesChecked.map(async imageId => {
                await deleteImage(imageId)
                return data
            }
        ))
    }

        deleteItemsSelected()
        .then(() => {
            setImageDeleted(imageDeleted + 1)
            setImagesChecked([])
        })
    }

    const handleSetViewType = (viewTypeOnClick) => {
        setImagesViewType(viewTypeOnClick)
        localStorage.setItem('viewType', JSON.stringify(viewTypeOnClick))
    }
    
    const titleText = imagesChecked.length > 1 ? 'Delete Items?' : 'Delete Item?'
        
    return(
        <>
        <Wrapper>

            <ButtonShowAs onClick={() => handleSetViewType(imagesViewType === "list"? "gallery": "list")} >{imagesViewType === "list"? "See as gallery": "See as list"}</ButtonShowAs>
            { imagesChecked.length > 0 ? <ButtonWarning onClick={e => openModalConfirmation(e)}>Delete Selected</ButtonWarning> : <></> }
            { imagesChecked.length > 0 ? <ButtonShowAs onClick={() => setImagesChecked([])} >Deselect All</ButtonShowAs> : <></> }
        </Wrapper>
        {deleteModalConfirmationVisible ? <BackGround><ModalDiv>{ConfirmationModal({'title': titleText, 
                                                            'text': 'Are yo sure you want to delete the selected items?',
                                                            'buttonYes':true,
                                                            'buttonNo': true,
                                                            setConfirmation,
                                                            setDeleteModalConfirmationVisible})}</ModalDiv></BackGround> : <></> }
        </>
)}
