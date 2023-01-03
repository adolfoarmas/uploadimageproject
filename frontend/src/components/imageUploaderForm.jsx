import React, {useState, useContext} from "react";
import { useForm  } from "react-hook-form"
import Context from "../context/imageContext";
import createImage from "../services/createImage.js"
import styled from 'styled-components';

const TextInput = styled.input`
  height: 30px;
  font-size: 18px;
  border-style: none;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: transparent;
  outline:none;
`;

const ImageInput = styled.input`
  position: relative;
  display: inline-block;
  opacity: 0;
  position: absolute;
  z-index: -1;
  /* height: 50px; */
`;

const FieldSet = styled.fieldset`
    width: 500px;
`;

const FieldSetDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: inherit;
  margin: 8px;
  display: grid;
  grid-gap: 10px;
  align-content: center;
  justify-content: center;
  .submitButton {
    font-size: 20px;
    border-style: none;
    height: 30px;
    border-radius: 50px;
    color: white;
    background-color: #5787f8;
  }
  .submitButton:hover {
    cursor: pointer;
    color: white;
    background-color: #4b80fd;
  }
`;

const ImageLabel = styled.label`
  cursor: pointer;
  justify-self: center;
`;

export default function ImageUploadderForm() {

    const {imageCreated, setImageCreated} = useContext(Context)
    const [selectedImage, setSelectedImage] = useState("")
    const {register, reset, handleSubmit} = useForm();
    

    const onSubmit = data => {
      
        data['image'] = data.image[0]

        let formData = new FormData()
        formData.append('name', data.name)
        formData.append('image', data.image)

        createImage(formData)
        .then(res =>{
          if(res.ok){
            setImageCreated(imageCreated + 1)
            setSelectedImage("")
            reset(formValues => ({ 
              ...formValues, 
              name: '',
            }))
          }
        })
    }

    return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <TextInput placeholder="Click here to insert a name for you image" title="name" type="text" {...register("name")} />
          <FieldSet>
            <legend>Choose an image to upload</legend>
            <FieldSetDiv>
              <ImageLabel for="up">Click here to browse...</ImageLabel>
              <ImageInput id="up" title="image" type="file" {...register("image",{
                onChange: e => {
                  setSelectedImage(URL.createObjectURL(e.target.files[0]))
                  return e.target.files[0]
                }
              })} />
              <img src={selectedImage} alt={register['image']}/>
            </FieldSetDiv>
           </FieldSet>
          <input  className="submitButton" value="Upload Image" type="submit"/>
        </Wrapper>
      </form>

    )
}