import React, { useState } from "react";

const Context = React.createContext({})

export function ImageContextProvider ({ children }) {

    const [images, setImages] = useState([]);
    const [imagesViewType, setImagesViewType] = useState(JSON.parse(localStorage.getItem('viewType')) || "gallery");
    const [imagesChecked, setImagesChecked] = useState([]);
    const [imageCreated, setImageCreated]  = useState(0);
    const [imageDeleted, setImageDeleted] = useState(0);

    return  <Context.Provider value={{images, 
                                    setImages, 
                                    imageCreated, 
                                    setImageCreated, 
                                    imagesChecked, 
                                    setImagesChecked,
                                    imageDeleted, 
                                    setImageDeleted,
                                    imagesViewType,
                                    setImagesViewType,}} >
                {/* states sent as Context value parameter*/}
                {children}
            </Context.Provider>
}

export default Context