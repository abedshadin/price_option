/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect } from "react";
import { use } from "react";

// eslint-disable-next-line no-unused-vars
function PriceOption({option}) {
    const { name, price, duration, features } = option;
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }   
    , []);
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
}

export default PriceOption;