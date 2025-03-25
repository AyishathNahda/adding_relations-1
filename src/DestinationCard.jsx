import React from "react";
import './App.css';


const destinations = [
    {
      id: 1,
      name: "Bali",
      location: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      description: "Tropical paradise with beautiful beaches and vibrant culture",
      price: "$1,200"
    },
    {
      id: 2,
      name: "Paris",
      location: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      description: "City of love, art, and exquisite cuisine",
      price: "$1,500"
    },
    {
      id: 3,
      name: "Santorini",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      description: "Stunning sunsets and white-washed architecture",
      price: "$1,800"
    },
    {
      id: 4,
      name: "Tokyo",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      description: "Modern city with rich traditions and amazing food",
      price: "$2,000"
    }
  ];


  const DestinationCard=({destination})=>{
    return(
        <div>
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <h2>{destination.name}</h2>
            <p>{destination.name}</p>
            <p>{destination.location}</p>
            <p>{destination.description}</p>
            <p>{destination.price}</p>
        </div>
    );
  };

  const DestinationContainer=()=>{
    return(
        <div>
            {destinations.map((destination)=>(
                <DestinationCard key={destination.id} destination={destination}/>

            ))}
        </div>
    );
  };

  export default DestinationContainer;