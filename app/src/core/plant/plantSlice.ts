import { createSlice } from "@reduxjs/toolkit";
import { createPlant } from "./plantThunks";

interface IPlantState {
  isLoading: boolean;
  isCreated: boolean;
  error?: string;
}

const initialState: IPlantState = {
  isLoading: false,
  isCreated: false,
};

const plantSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    resetCreatePlantState() {
      return initialState;
    },
    startCreatePlantLoading(state) {
      return { ...state, isLoading: true };
    },
    resetCreatePlantErrorState(state) {
      return { ...state, error: undefined };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPlant.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
      })
      .addCase(createPlant.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(createPlant.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default plantSlice.reducer;

export const {
  resetCreatePlantState,
  startCreatePlantLoading,
  resetCreatePlantErrorState,
} = plantSlice.actions;
