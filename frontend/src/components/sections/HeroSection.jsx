import { useState } from 'react';
import { BookIcon, ClockIcon, ShieldIcon } from '../shared/Icons';

const HeroSection = ({ onBookNow }) => {
    const [bookingLoading, setBookingLoading] = useState(false);

    const handleBookNow = () => {
        setBookingLoading(true);
        onBookNow();
        setTimeout(() => setBookingLoading(false), 2000);
    };

    return (
        <div
            className="relative min-h-[100vh] h-[800px] bg-cover bg-center flex items-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2449&q=80')`
            }}
        >
            <div className="container mx-auto px-6 text-white">
                <div className="max-w-3xl">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                        Discover Your Next Adventure
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                        Choose from our curated experiences, customized for every kind of traveler.
                    </p>
                    <button
                        onClick={handleBookNow}
                        disabled={bookingLoading}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                    >
                        {bookingLoading ? 'BOOKING...' : 'BOOK NOW'}
                    </button>

                    {/* Features */}
                    <div className="flex flex-wrap gap-12 mt-16">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-full">
                                <ClockIcon className="w-6 h-6 text-black" />
                            </div>
                            <span className="text-lg">Easy Booking</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-full">
                                <ShieldIcon className="w-6 h-6 text-black" />
                            </div>
                            <span className="text-lg">Curated Destinations</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-full">
                                <BookIcon className="w-6 h-6 text-black" />
                            </div>
                            <span className="text-lg">Trusted Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
