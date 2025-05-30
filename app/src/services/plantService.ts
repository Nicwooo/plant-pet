import api from "./api";

export const PlantService = {
  async getAll(): Promise<unknown> {
    const res = await api.get("/plants");

    return res.data;
  },
};
