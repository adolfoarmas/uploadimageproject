import React, { useState, useContext } from "react";
import ListOfImages from '../components/listOfImages.jsx'
import Loading from '../components/loading.jsx'
import useImages from "../hooks/useImages.js"; 
import styled from "styled-components"

const ListOfImagesDiv = styled.div`
    display:flex;
    justify-content: center;

`
export default function Images() {

    const {loading, images} = useImages();

    return(
                
        <ListOfImagesDiv>
            {loading ? <Loading /> : <ListOfImages images={images} />}
        </ListOfImagesDiv>
    
    )

}