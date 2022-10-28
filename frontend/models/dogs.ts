import Axios from "axios";

export type Dog = {
  id: string;
  url: string;
  created: string;
};

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getDogs = async (): Promise<Dog[]> => {
  const resp = await api.get("/dogs");
  return resp.data as Dog[];
};

export const updateDogs = async (): Promise<void> => {
  await api.put("/dogs");
};
