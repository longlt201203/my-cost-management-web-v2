import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../apis/auth";
import AuthContext from "../contexts/auth.context";
import { PropsWithChildren } from "react";

export default function AuthProvider({ children }: PropsWithChildren) {
  const getProfileQuery = useQuery({
    queryKey: ["getProfile"],
    queryFn: getProfile,
  });

  return (
    <AuthContext.Provider
      value={{
        profile: getProfileQuery.data,
        isLoading: getProfileQuery.isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
