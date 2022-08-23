import { createContext, useContext, useState } from 'react';

const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({children}) {
    // Temperature has a default value of 50 degrees
    // Humidity has a default value of 40%
    const [temp, setTemp] = useState(50);
    const [humidity, setHumidity] = useState(40);
    const [newTemp, setNewTemp] = useState(temp);

    return (
        <ClimateContext.Provider
            value={{
                temp, 
                setTemp, 
                humidity, 
                setHumidity,
                newTemp,
                setNewTemp}}
        >
            {children}
        </ClimateContext.Provider>
    )
}