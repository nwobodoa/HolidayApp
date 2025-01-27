const mongoose = require("mongoose");
const Event = require("./models/EventModel");

const connectionString = 'mongodb+srv://myuser:mypwd@cluster0.3xdtn2w.mongodb.net/eventsDB';

async function seedData() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const eventsData = [
      {
        id: "1",
        title: "Summer Music Festival",
        category: "Music",
        country: "Canada",
        city: "Vancouver",
        date: "2023-07-15",
        time: "19:00",
        location: "BC Place Stadium",
        description: "Join us for a night of live music featuring top artists from around the world.",
        price: 30,
        rating: 2.5,
        image: "https://travelfreak.com/wp-content/uploads/2018/04/summer-music-festivals-1-770x513.jpg",
      },
      {
        id: "2",
        title: "Outdoor Concert Series",
        category: "Music",
        date: "2023-07-15",
        time: "18:30",
        city: "Vancouver",
        country: "Canada",
        location: "Stanley Park",
        description: "Enjoy an evening of music under the stars with local and international bands.",
        price: 25,
        rating: 4,
        image: "https://a.cdn-hotels.com/gdcs/production118/d485/f880a818-ebe6-4402-b56f-d8ee002a944c.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      },
      {
        id: "3",
        title: "Music in the Park",
        category: "Music",
        date: "2023-07-16",
        time: "19:30",
        location: "Centennial Park",
        country: "Canada",
        city: "Toronto",
        description: "Experience a free outdoor music event with various genres and talented performers.",
        price: 0,
        rating: 4,
        image: "https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/ia549b5935af7218d/version/1554203275/glastonbury-festival-best-summer-music-festivals.jpg",
      },
      {
        id: "4",
        title: "Art Exhibition",
        category: "Art",
        date: "2023-07-17",
        time: "11:00",
        city: "Montreal",
        country: "Canada",
        location: "Gallery of Modern Art",
        description: "Explore a captivating exhibition showcasing contemporary art from renowned artists.",
        price: 15,
        rating: 4,
        image: "https://images.squarespace-cdn.com/content/v1/56f194ec60b5e96a0b015712/1649860559693-7DPM2JHEZJZEGP59HH4F/DSC_7895.jpg?format=1000w",
      },
      {
        id: "5",
        title: "Food Festival",
        category: "Food & Drink",
        date: "2023-07-18",
        time: "12:00",
        country: "Canada",
        location: "Waterfront Park",
        city: "Halifax",
        description: "Indulge in a culinary feast with a wide variety of delicious foods from local vendors.",
        price: 10,
        rating: 3,
        image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
      },
      {
        id: '6',
        title: 'Summer Music Festival',
        category:'Music',
        country: 'United States',
        city: 'Los Angeles',
        date: '2023-07-21',
        time: '18:00',
        location: 'Hollywood Bowl',
        description: 'Join us for a spectacular night of live music featuring top artists from around the world in the iconic Hollywood Bowl amphitheater.',
        price: 35,
        rating: 4,
        image:'https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: '7',
        title: 'Harbourfront Art Exhibition',
        category: 'Art',
        country: 'Australia',
        city: 'Sydney',
        date: '2023-07-22',
        time: '10:30',
        location: 'Sydney Opera House',
        description: 'Immerse yourself in a captivating art exhibition showcasing contemporary and indigenous artworks from renowned Australian artists.',
        price: 20,
        rating: 4.5,
        image: 'https://images.pexels.com/photos/763412/pexels-photo-763412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      { 
        id: '8',
        title: 'Asian Film Festival',
        category: 'Film',
        country: 'Japan',
        city: 'Tokyo',
        date: '2023-07-24',
        time: '14:00',
        location: 'Tokyo International Forum',
        description: 'Immerse yourself in the captivating world of Asian cinema with a diverse selection of films from different Asian countries.',
        price: 12,
        rating:4.5,
        image:'https://images.pexels.com/photos/1378866/pexels-photo-1378866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
     
      {
        id: "9",
        title: "Cultural Carnival",
        category: "Festival",
        date: "2023-08-05",
        time: "17:00",
        country: "Brazil",
        city: "Rio de Janeiro",
        location: "Sambadrome Marquês de Sapucaí",
        description: "Experience the vibrant colors and cultural performances in Rio's famous Sambadrome.",
        price: 20,
        rating: 4.5,
        image: "https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg"},
    
      {
        id: "10",
        title: "Gastronomy Expo",
        category: "Food & Drink",
        date: "2023-08-20",
        time: "13:00",
        country: "Italy",
        city: "Florence",
        location: "Piazza della Signoria",
        description: "Savor the best flavors of Italy with a gastronomic journey in Florence's historic square.",
        price: 15,
        rating: 4,
        image: "https://www.firenzemadeintuscany.com/assets/w=1500&h=740&fit=fill&f=center___images.ctfassets.net_7dc7gq8ix1ml_qQ3k2KQjCXhpVutXNwXIG_bc89189622e9ec946aa67409f309669c_risto-mare"
      },
      {
        id: "11",
        title: "Contemporary Art Exhibition",
        category: "Art",
        date: "2023-08-25",
        time: "10:00",
        country: "Germany",
        city: "Berlin",
        location: "Hamburger Bahnhof - Museum für Gegenwart",
        description: "Discover the creativity of modern artists in Berlin's renowned contemporary art museum.",
        price: 10,
        rating: 5,
        image: "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: "12",
        title: 'New York Music Festival',
        category: 'Music', 
        date: '2023-08-03',
        time: "12:00",
        country:'United States',
        city: 'New York',
        location: 'Central Park',
        description: "Enjoy a summer music festival in New York!",
        price: 25, 
        rating: 4, 
        image: "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      },
      
    ];
    
 
    

   

    await Event.deleteMany({});
    await Event.insertMany(eventsData);

    console.log("Successfully created events in the database.");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

seedData();
