import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Context from "../context/imageContext";


const Wrapper = styled.div`

color: #002374;
background-color:#5787f8;
border: 2px solid;
border-radius: 5px;
border-color: #002374;
display: block;
padding: 2.5px;
width: fit-content;
margin: 5px;
display: grid;

`;

const  Img = styled.img`
    border-radius: inherit;
    max-width: 250px;

`;

const Paragraph = styled.p`
    font-size: 15px;
    align-self: center;
    justify-self: center;
    padding: 0.5px;
    margin: 2px;

`;

const imageGalleryTypeElement = ({id, name, image}) => {

    const {imagesChecked, setImagesChecked} = useContext(Context);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(()=>{
        if(imagesChecked.length > 0){
            setIsChecked(()=> {
                return imagesChecked.includes(id)
            })
        }
        else
        {
            setIsChecked(false)
        }
    }, [imagesChecked])    

    const handleChange = () => {
        let imagesCheckedCopy = [...imagesChecked]
        
        if(!isChecked){
            imagesCheckedCopy.push(id)
            setImagesChecked(imagesCheckedCopy)
        }
        else
        {
            const elementIdToUncheck = imagesCheckedCopy.indexOf(id)
            imagesCheckedCopy.splice(elementIdToUncheck, 1)
            setImagesChecked(imagesCheckedCopy)
        }
        setIsChecked(!isChecked)
    }

    return(
        <div>
        <Wrapper>
            <input type="checkbox" checked={isChecked} onChange={handleChange} />
            <Img src={image} alt={name} />
            <Paragraph>{name}</Paragraph>
        </Wrapper>
        </div>
        
    )
}

export default imageGalleryTypeElement