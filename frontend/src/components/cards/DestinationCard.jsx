import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const DestinationCard = ({ destination }) => (
    <Card
        sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }
        }}
    >
        <CardMedia
            component="img"
            height="200"
            image={destination.image}
            alt={destination.name}
            sx={{
                objectFit: 'cover'
            }}
        />
        <CardContent
            sx={{
                p: 2,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <Typography
                variant="h6"
                component="h3"
                sx={{
                    color: '#0891B2',
                    fontWeight: 'bold',
                    mb: 2
                }}
            >
                {destination.name}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{
                    mt: 'auto',
                    width: '100%',
                    borderRadius: '8px'
                }}
            >
                VIEW DETAILS
            </Button>
        </CardContent>
    </Card>
);

export default DestinationCard;
