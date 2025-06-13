import { useEffect, useState } from 'react';

export const useDestinations = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData([
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
                    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    return { data, loading };
};

export const useTourPackages = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData([
                {
                    id: 1,
                    name: 'GOLDEN TEMPLE TOUR',
                    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    description: 'Spiritual Journey'
                },
                {
                    id: 2,
                    name: 'AMAZING KERALA TOUR',
                    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    description: 'Backwater Experience'
                },
                {
                    id: 3,
                    name: 'KASHMIR HOLIDAY TOUR',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    description: 'Mountain Adventure'
                },
                {
                    id: 4,
                    name: 'RAJASTHAN TOUR',
                    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    description: 'Royal Heritage'
                },
                {
                    id: 5,
                    name: 'TRIP TO GOA',
                    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    description: 'Beach Holiday'
                },
                {
                    id: 6,
                    name: 'NAINITAL ESCAPE',
                    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    description: 'Hill Station'
                }
            ]);
            setLoading(false);
        }, 1200);
    }, []);

    return { data, loading };
};
