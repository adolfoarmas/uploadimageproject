import React, { useState, useContext, useEffect  } from 'react';
import styled from 'styled-components';
import Context from "../context/imageContext";

const Wrapper = styled.div`

    color: #002374;
    background-color:#5787f8;
    border: 1px solid;
    border-radius: 5px;
    border-color: #002374;
    align-content: center;
    padding: 3px;
    height: 3em;
    width: 30em;
    margin: 1px;
    display: grid;
    gap: 10px;
    grid-template-columns: 5% 10% auto;
    grid-auto-flow: row;

`;

const  Img = styled.img`
    border-radius: inherit;
    max-width: 50px;

`;

const Paragraph = styled.p`
    font-size: 15px;
    align-self: center;
    justify-self: left;
    padding: 0.5px;
    margin: 2px;

`;

const imageListTypeElement = ({id, name, image}) => {

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
    })

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

export default imageListTypeElement;