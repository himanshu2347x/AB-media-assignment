import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { travelApi } from '../../services/api';

// Async thunk for fetching destinations
export const fetchDestinations = createAsyncThunk(
    'destinations/fetchDestinations',
    async (_, { rejectWithValue }) => {
        try {
            const data = await travelApi.getDestinations();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const destinationsSlice = createSlice({
    name: 'destinations',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDestinations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDestinations.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDestinations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default destinationsSlice.reducer;
