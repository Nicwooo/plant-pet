import { PlantService } from "@/services/plantService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPlants = createAsyncThunk(
  "plants/get",
  async (_, { rejectWithValue }) => {
    try {
      const plants = await PlantService.getAll();

      return plants;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createPlant = createAsyncThunk(
  "plants/create",
  async (data: unknown, { rejectWithValue }) => {
    try {
      const isCreated = await PlantService.getAll();

      return isCreated;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
