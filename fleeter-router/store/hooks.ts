import { Fleet } from "@/types/fleet";
import { Profile } from "@/types/profile";
import { useContext } from "react";
import { storeContext } from "./store";

export const useFleets = (id?: string) => {
  const allFleets = useContext(storeContext).fleets;

  return id ? allFleets.filter((fleet) => fleet.profileId === id) : allFleets;
};

export const useCreateFleet = () => {
  const fleets = useFleets();
  const setFleets = useContext(storeContext).setFleets;

  return (newFleet: Fleet) => {
    setFleets([newFleet, ...fleets]);
  };
};

export const useProfiles = () => {
  return useContext(storeContext).profiles;
};

export const useProfile = (id: string): Profile | undefined => {
  return useProfiles().find((p) => p.id === id);
};

export const useToggleFollow = (id: string) => {
  const profiles = useProfiles();
  const setProfiles = useContext(storeContext).setProfiles;

  return () => {
    console.log("toggle", id);
    setProfiles(
      profiles.map((profile) =>
        profile.id === id
          ? { ...profile, isFollowing: !profile.isFollowing }
          : profile
      )
    );
  };
};

export const useUpdateProfile = () => {
  const profiles = useProfiles();
  const setProfiles = useContext(storeContext).setProfiles;

  return (updatedProfile: Profile) => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
  };
};
