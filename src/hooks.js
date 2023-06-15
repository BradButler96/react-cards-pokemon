import React, { useState } from "react";
import axios from "axios";
import uuid from "uuid";


const useFlip = (initialState = false) => {
    const [flip, setFlip] = useState(initialState)

    const toggleFlip = () => {
        setFlip(flip => !flip)
    }

    return [flip, toggleFlip]
}




const useAxios = async (url) => {
    const [arr, setArr] = useState([]);
    const res = await axios.get(url);



    return [arr, ]
}



// const [cards, setCards] = useState([]);
// const addCard = async () => {
//   const response = await axios.get(
//     "https://deckofcardsapi.com/api/deck/new/draw/"
//   );
//   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
// };



 export { useFlip, useAxios }