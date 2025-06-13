import { Box, Container, Typography } from '@mui/material';
import { advantages } from '../../constants/data.jsx';
import AdvantageCard from '../cards/AdvantageCard';

const AdvantagesSection = () => {
    return (
        <Box sx={{ bgcolor: '#0891B2', py: 8 }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" component="h2" color="white" gutterBottom>
                        Our Advantages
                    </Typography>
                    <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
                        <Typography variant="body1" color="white">
                            You can rely on our experience and the quality of services we provide.
                        </Typography>
                        <Typography variant="body1" color="white">
                            Here are other reasons to book tours at Treat Holidays
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(4, 1fr)'
                    },
                    gap: 4
                }}>
                    {advantages.map((advantage, index) => (
                        <AdvantageCard key={index} advantage={advantage} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default AdvantagesSection;