import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Screenshot {
  id: number;
  image: string;
}
const useScreenshots = (slug: string) => {
  const apiClient = new APIClient<Screenshot>("/games");
  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: () => apiClient.getScreenshots(slug),
  });
};

export default useScreenshots;
