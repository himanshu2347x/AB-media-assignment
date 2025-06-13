import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => (
    <Card
        sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease'
            }
        }}
    >
        <Box
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRight: '1px solid #eee',
                bgcolor: '#f8f9fa',
                width: '120px'
            }}
        >
            <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                    width: 64,
                    height: 64,
                    mb: 1,
                    border: '2px solid #fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
            />
            <Typography variant="subtitle2" color="primary" fontWeight="bold" align="center">
                {testimonial.name}
            </Typography>
            <Typography variant="caption" color="text.secondary" align="center">
                {testimonial.designation}
            </Typography>
        </Box>

        <CardContent sx={{ p: 2, flex: 1 }}>
            <Box sx={{ display: 'flex', mb: 1 }}>
                <FaQuoteLeft color="#0891B2" size={16} />
            </Box>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3
                }}
            >
                {testimonial.text}
            </Typography>
        </CardContent>
    </Card>
);

TestimonialCard.propTypes = {
    testimonial: PropTypes.shape({
        name: PropTypes.string.required,
        designation: PropTypes.string.required,
        text: PropTypes.string.required,
        image: PropTypes.string.required
    }).isRequired
};

export default TestimonialCard;
