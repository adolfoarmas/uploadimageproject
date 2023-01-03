import {useContext, useEffect, useState} from "react";
import getImages from "../services/getImages";
import Context from "../context/imageContext";

export default function useImages (){
    const [loading, setLoading] = useState(false)
    const {images, setImages, imageCreated, imageDeleted, setImageDeleted} = useContext(Context)

    useEffect(function(){
        setLoading(true)
        getImages()
        .then(apiImages =>{
            setImages(apiImages)
            setLoading(false)
        })
    }, [setImages, imageCreated, imageDeleted])

    return {loading, images}
}
