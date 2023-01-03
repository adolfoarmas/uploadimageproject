import React, {useState, useEffect, useContext} from "react";
import ImageGalleryTypeElement from "./imageGalleryTypeElement";
import ImageListTypeElement from "./imageListTypeElement"
import styled from 'styled-components';
import Context from "../context/imageContext";

const Gallery = styled.ul`

color: #002374;
/* border: 2px solid;
border-radius: 5px;
border-color: #002374; */
display: grid;
grid: auto-flow / 1fr 1fr 1fr 1fr;
grid-auto-rows: min-content;
grid-column: 1;
grid-column-end: auto;
padding: 2.5px;
margin: 2.5px;
width: fit-content;

`;

const List = styled.ul`

color: #002374;
display: grid;
grid: auto-flow / 1fr;
grid-auto-rows: min-content;
grid-column: 1;
grid-column-end: auto;
padding: 2.5px;
margin: 2.5px;
width: fit-content;
align-self:center;

`;

const ImagesDiv = styled.div`
    display: grid;
    justify-items:center;
`;


export default function ListOfImages({ images }){

    const {imagesViewType, setImagesChecked} = useContext(Context);

    useEffect(() => {
    
    }, [imagesViewType, setImagesChecked])
    
    const galleryContent = images.map((e, indx) =>
        <ImageGalleryTypeElement key={'gal'+indx} id={e.id} name={e.name} image={e.image} />
    )

    const listContent = images.map((e, indx) =>
        <ImageListTypeElement key={'list'+indx} id={e.id} name={e.name} image={e.image} />
    )

    const gallery = 
        <ImagesDiv key='ImagesDiv1'>
            <Gallery key='gallery1'>
                {galleryContent}
            </Gallery>
        </ImagesDiv>

    const list =
        <ImagesDiv key='GalleryDiv1'>
            <List key='list1'>
                {listContent}
            </List>
        </ImagesDiv>

    return imagesViewType === "gallery" ? gallery : list;
} 