import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const TourPackageCard = ({ tour }) => (
    <Card
        sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            margin: '0 auto',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }
        }}
    >
        <CardMedia
            component="img"
            height="200"
            image={tour.image}
            alt={tour.name}
            sx={{
                objectFit: 'cover',
                width: '100%'
            }}
        />
        <CardContent
            sx={{
                p: 2,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%'
            }}
        >
            <Box>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        color: '#0891B2',
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: '1.1rem',
                        height: '2.4em',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                    }}
                >
                    {tour.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        mb: 2,
                        height: '3em',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                    }}
                >
                    {tour.description || 'Explore this amazing tour package'}
                </Typography>
            </Box>
            <Typography
                variant="body1"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 'auto',
                    borderTop: '1px solid #eee',
                    pt: 1,
                    width: '100%'
                }}
            >
                <span>Starting From</span>
                <span style={{ color: '#0891B2', fontWeight: 'bold' }}>
                    {tour.price || '4999'}/-
                </span>
            </Typography>
        </CardContent>
    </Card>
);

export default TourPackageCard;