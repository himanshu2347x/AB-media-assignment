require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Routes
const destinationsRoutes = require('./routes/destinations');
const packagesRoutes = require('./routes/packages');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/destinations', destinationsRoutes);
app.use('/api/packages', packagesRoutes);

// Add some mock data for testing
const Destination = require('./models/destination');
const Package = require('./models/package');

const seedMockData = async () => {
    try {
        // Clear existing data
        await Destination.deleteMany();
        await Package.deleteMany();

        // Seed destinations
        await Destination.create([
            {
                id: 1,
                name: 'JAMMU & KASHMIR',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                price: '₹8999',
                description: 'Paradise on Earth'
            },
            {
                id: 2,
                name: 'HIMACHAL PRADESH',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                price: '₹6999',
                description: 'Land of Gods'
            },
            {
                id: 3,
                name: 'GOA',
                image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                price: '₹9999',
                description: 'Beach Paradise'
            },
            {
                id: 4,
                name: 'ASSAM',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                price: '₹7999',
                description: 'Tea Gardens'
            },
            {
                id: 5,
                name: 'MAHARASHTRA',
                image: 'https://th.bing.com/th/id/OIP.2S23nSTmpwo04RfyY2htyAHaEp?r=0&rs=1&pid=ImgDetMain',
                price: '₹8999',
                description: 'Cultural Heritage'
            },
            {
                id: 6,
                name: 'KERALA',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                price: '₹10999',
                description: 'Gods Own Country'
            }
            // Add more destinations as needed
        ]);

        // Seed packages
        await Package.create([
            {
                name: 'GOLDEN TEMPLE TOUR',
                image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Spiritual Journey',
                location: 'Punjab',
                duration: '4 Days',
                price: '₹12999',
                rating: 4.9,
                reviews: 312,
                sold: 156
            },
            {
                name: 'AMAZING KERALA TOUR',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Backwater Experience',
                location: 'Kerala',
                duration: '6 Days',
                price: '₹15999',
                rating: 4.8,
                reviews: 245,
                sold: 189
            },
            {
                name: 'KASHMIR HOLIDAY TOUR',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Mountain Adventure',
                location: 'Jammu & Kashmir',
                duration: '7 Days',
                price: '₹18999',
                rating: 4.9,
                reviews: 178,
                sold: 134
            },
            {
                name: 'RAJASTHAN TOUR',
                image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Royal Heritage',
                location: 'Rajasthan',
                duration: '8 Days',
                price: '₹16999',
                rating: 4.7,
                reviews: 203,
                sold: 145
            },
            {
                name: 'TRIP TO GOA',
                image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Beach Holiday',
                location: 'Goa',
                duration: '5 Days',
                price: '₹13999',
                rating: 4.8,
                reviews: 289,
                sold: 201
            },
            {
                name: 'NAINITAL ESCAPE',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Hill Station',
                location: 'Uttarakhand',
                duration: '4 Days',
                price: '₹11999',
                rating: 4.7,
                reviews: 167,
                sold: 123
            }
        ]);

        console.log('Mock data seeded successfully');
    } catch (error) {
        console.error('Error seeding mock data:', error);
    }
};

// Seed mock data when the server starts
seedMockData();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
