import { Alert, Box, Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations } from '../../store/slices/destinationsSlice';
import DestinationCard from '../cards/DestinationCard';
import { SkeletonCard } from '../shared/SkeletonCard';

const DestinationsSection = () => {
    const dispatch = useDispatch();
    const { data: destinations, loading, error } = useSelector(state => state.destinations);

    useEffect(() => {
        dispatch(fetchDestinations());
    }, [dispatch]);

    return (
        <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    align="center"
                    color="primary"
                    gutterBottom
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        mb: 3
                    }}
                >
                    <FaMapMarkedAlt /> Top Selling Tour Packages
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Discover the most popular destinations across India
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 4 }}>
                        {error}
                    </Alert>
                )}

                <Grid
                    container
                    spacing={3}
                    alignItems="stretch"
                >
                    {loading
                        ? Array(6).fill(0).map((_, i) => (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <SkeletonCard />
                            </Grid>
                        ))
                        : destinations.map(destination => (
                            <Grid item xs={12} sm={6} md={4} key={destination.id}>
                                <DestinationCard destination={destination} />
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default DestinationsSection;