import React, { useState, useEffect } from "react";


const usePlayers = () => {
    const [players, setPlayers] = useState({});


    async function fetchData() {
        const res = await fetch("http://localhost:5000/api/players");
        res
            .json()
            .then(res => setPlayers(res))
            .catch(err => setErrors(err));
        }
    
       useEffect(() => {
        fetchData();
    });

}

export default usePlayers;