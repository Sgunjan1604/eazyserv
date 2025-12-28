import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async () => {
    const res = await fetch('http://localhost:5000/api/service/getservice')
    const data = await res.json()

    if (!data.success) {
      throw new Error('Failed to fetch services')
    }

    return data.services
  }
)

const serviceSlice = createSlice({
  name: 'services',
  initialState: {
    list: [],
    loading: false,
    error: null,
    fetched: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
        state.fetched = true
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default serviceSlice.reducer
