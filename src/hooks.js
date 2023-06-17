import React, { useState, useRef } from "react";
import axios from "axios";
import uuid from "uuid";


const useFlip = (initialState = false) => {
    const [flip, setFlip] = useState(initialState)

    const toggleFlip = () => {
        setFlip(flip => !flip)
    }
    return [flip, toggleFlip]
}

const useAxios = (baseURL) => {
    const [arr, setArr] = useState([]);

    const updateArray = async (name = '') => {
        const url = baseURL + name
        const response = await axios.get(url)
        setArr(arr => [...arr, { ...response.data, id: uuid() }])
    }
    return [arr, updateArray]
}

 export { useFlip, useAxios }