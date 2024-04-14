import { fetchUserProfile } from "@/api/auth";
import jwtService from "@/lib/jwt";
import { UserProfile } from "@/types/auth";
import { useQuery } from "@tanstack/react-query";

export const useFetchUserProfile = () => {
    const handleFetchUserProfile = async () => {
        if (!jwtService.getAccessToken()) {
            throw new Error("No access token");
        }
        const userProfile = await fetchUserProfile();
        return userProfile;
    };
    const query = useQuery<UserProfile>({
        queryFn: handleFetchUserProfile,
        queryKey: ["user-profile"],
        retry: 2,
    });

    return query;
};
