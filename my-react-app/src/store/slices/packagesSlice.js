import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { travelApi } from '../../services/api';

// Async thunk for fetching top selling packages
export const fetchTopSellingPackages = createAsyncThunk(
    'packages/fetchTopSellingPackages',
    async (_, { rejectWithValue }) => {
        try {
            const data = await travelApi.getTopSellingPackages();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const packagesSlice = createSlice({
    name: 'packages',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopSellingPackages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopSellingPackages.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTopSellingPackages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default packagesSlice.reducer;
