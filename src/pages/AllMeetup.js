function AllMeetupsPage(props){
    return ( <div>
             <h1>All  Meetups Page</h1>
             <ul>
              {dummyData.map((item) =>(
             <div key={item.id}>
             <h2>{item.name}</h2>
             <img src={item.imageUrl} alt={item.name} width="300" />
             <p><strong>Address:</strong> {item.address}</p>
             <p>{item.description}</p>
             </div>
            ))}
            </ul>
    </div>

    );
}

export default AllMeetupsPage;



const dummyData = [
    {
      id: 1,
      name: "Eiffel Tower",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Eiffel_Tower_2020.jpg",
      address: "Champ de Mars, 5 Avenue Anatole, 75007 Paris, France",
      description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It was named after the engineer Gustave Eiffel, whose company designed and built the tower."
    },
    {
      id: 2,
      name: "Great Wall of China",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Great_Wall_of_China_Mutianyu.jpg/1920px-Great_Wall_of_China_Mutianyu.jpg",
      address: "Huairou District, Beijing, China",
      description: "The Great Wall of China is a series of fortifications made of various materials, including stone, brick, tamped earth, and others, built along the northern borders of China to protect against invasions."
    },
    {
      id: 3,
      name: "Statue of Liberty",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Statue_of_Liberty_7.jpg",
      address: "New York Harbor, New York City, USA",
      description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City. It was a gift from France to the United States and symbolizes freedom and democracy."
    },
    {
      id: 4,
      name: "Colosseum",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Colosseo_2020.jpg",
      address: "Piazza del Colosseo, 1, 00184 Rome, Italy",
      description: "The Colosseum is an ancient amphitheater in the center of Rome, Italy, built of concrete and stone. It is the largest amphitheater ever built and was used for gladiatorial contests and public spectacles."
    },
    {
      id: 5,
      name: "Taj Mahal",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/Taj_Mahal%2C_Agra%2C_India.jpg",
      address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
      description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan in memory of his favorite wife."
    }
  ];
  

  