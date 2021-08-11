const API_KEY = "E4BZl5HAYDhLRmvOl8xjhO9mqpk2";

export  const getMatches = () => {
     const url = ` https://cricapi.com/api/matches?apikey=${API_KEY}`;

     return fetch(url)
         .then((response) => response.json())
         .catch((error) => console.log("ERROR : ", error));
};

//load match details
 export const getMatchDetail = (id) =>{
      const url = ` https://cricapi.com/api/matches?apikey=${API_KEY}&unique_id=${id}`;

      return fetch(url)
          .then((response) => response.json())
          .catch((error) => console.log("ERROR : ", error));
 }
