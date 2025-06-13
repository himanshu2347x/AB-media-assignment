import { Alert, Box, Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { FaPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopSellingPackages } from '../../store/slices/packagesSlice';
import TourPackageCard from '../cards/TourPackageCard';
import { SkeletonCard } from '../shared/SkeletonCard';

const TourPackagesSection = () => {
    const dispatch = useDispatch();
    const { data: tourPackages, loading, error } = useSelector(state => state.packages);

    useEffect(() => {
        dispatch(fetchTopSellingPackages());
    }, [dispatch]);

    return (
        <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
            <Container
                maxWidth="xl"
                sx={{
                    px: { xs: 2, sm: 4, md: 6 },
                    margin: '0 auto',
                    width: '100%',
                    maxWidth: '1400px'
                }}
            >
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
                    <FaPlane />
                    Popular Destinations
                    
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Stay updated with our latest news and happenings through informe
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 4 }}>
                        {error}
                    </Alert>
                )}

                <Grid
                    container
                    spacing={{ xs: 2, sm: 3 }}
                    alignItems="stretch"
                    justifyContent="center"
                    sx={{
                        margin: '0 auto',
                        width: '100%'
                    }}
                >
                    {loading
                        ? Array(6).fill(0).map((_, i) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={i}
                                sx={{
                                    display: 'flex',
                                    padding: { xs: 1, sm: 1.5 }
                                }}
                            >
                                <SkeletonCard />
                            </Grid>
                        ))
                        : tourPackages.map(tour => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={tour.id}
                                sx={{
                                    display: 'flex',
                                    padding: { xs: 1, sm: 1.5 }
                                }}
                            >
                                <Box sx={{ width: '100%', display: 'flex' }}>
                                    <TourPackageCard tour={tour} />
                                </Box>
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TourPackagesSection;
