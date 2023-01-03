import { IMAGES_END_POINT } from './settings.js'

const fromApiResponseToImages = apiResponse => {
  if (apiResponse){
      const images = apiResponse.map(apiImageElement =>{
        const {id, name, image} = apiImageElement
        return {id, name, image}
  })
  return images
}
return []
}

export default async function getImages(){
  const apiURL = IMAGES_END_POINT
  return fetch(apiURL)
  .then((res) => res.json())
  .then(fromApiResponseToImages)
}