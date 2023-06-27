//import { useEffect, useState } from "react";

export const screenDetect = () => {

    //smallImages, largeImages

    // Obtener el tamaño de la pantalla del usuario
    const isSmallScreen = window.innerWidth <= 500;
    let screen = isSmallScreen ? true : false
    //let images = isSmallScreen ? smallImages : largeImages; // Selección de imágenes según el tamaño de pantalla




    return screen  //images
}