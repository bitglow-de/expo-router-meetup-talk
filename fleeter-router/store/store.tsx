import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

import importedProfiles from "../repository/profiles.json";

export type Profile = {
  id: string;
  name: string;
  username: string;
  image: string;
  isFollowing: boolean;
};

export type Store = {
  profiles: Profile[];
  setProfiles: (profiles: Profile[]) => void;
};

const context = createContext<Store>({
  profiles: importedProfiles,
  setProfiles: () => {},
});

export const useProfiles = () => {
  return useContext(context).profiles;
};

export const useProfile = (id: string): Profile | undefined => {
  return useProfiles().find((p) => p.id === id);
};

export const useToggleFollow = (id: string) => {
  const profiles = useProfiles();
  const setProfiles = useContext(context).setProfiles;

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
  const setProfiles = useContext(context).setProfiles;

  return (updatedProfile: Profile) => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
  };
};

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>(importedProfiles);
  return (
    <context.Provider value={{ profiles, setProfiles }}>
      {children}
    </context.Provider>
  );
};
