import { Box, Container, Typography } from '@mui/material';
import { FaQuoteRight } from 'react-icons/fa';
import TestimonialCard from '../cards/TestimonialCard';

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        designation: "Company / Designation",
        text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        id: 2,
        name: "Jane Smith",
        designation: "Company / Designation",
        text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        id: 3,
        name: "Chris Evans",
        designation: "Company / Designation",
        text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
    }
];

const TestimonialsSection = () => {
    return (
        <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
            <Container maxWidth="xl" sx={{ px: 2 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                        variant="h4"
                        component="h2"
                        color="primary"
                        sx={{
                            mb: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1
                        }}
                    >
                        <FaQuoteRight /> Client Testimonials
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                        What our clients say about their experience with us
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    justifyContent: 'center'
                }}>
                    {testimonials.map((testimonial) => (
                        <Box
                            key={testimonial.id}
                            sx={{
                                width: {
                                    xs: '100%',
                                    sm: 'calc(50% - 12px)',
                                    md: 'calc(33.333% - 16px)'
                                },
                                minWidth: {
                                    sm: '300px',
                                    md: '300px'
                                }
                            }}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default TestimonialsSection;
