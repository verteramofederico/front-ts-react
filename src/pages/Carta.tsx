import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
const axios = require('axios').default;

interface UserType {
    user: {
        email: string;
        fullName: string;
        token: string
    };
} 

const Carta = () => {
    const { email } = useSelector((state: UserType) => state.user)
    const [dishTypes, setDishTypes] = useState(["2", "6", "4"]);

    useEffect(() => {
        axios
        //.get(`https://api.spoonacular.com/recipes/complexSearch?type=maincourse?apiKey=${process.env.REACT_APP_API_KEY}`)
        .get(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2?apiKey=fee5ec9fa73f41678b8517cc11bd55f4`)
        .then ((response: { data: any, dishTypes: any }) => setDishTypes(response.data.dishTypes));
    },[]); 

    return (
        <>
        <h1>Bienvenido {email}</h1>
        <div>Carta</div>
        { dishTypes.length >= 1? dishTypes.map((dish: any) => { return console.log(dish)})
        :null}
        </>
        
    )
}

export default Carta