import React, { createContext, FC, PropsWithChildren, useState } from "react";
import importedFleets from "../repository/fleets.json";
import importedProfiles from "../repository/profiles.json";
import { Fleet } from "../types/fleet";
import { Profile } from "../types/profile";

export type Store = {
  fleets: Fleet[];
  setFleets: (fleets: Fleet[]) => void;
  profiles: Profile[];
  setProfiles: (profiles: Profile[]) => void;
};

export const storeContext = createContext<Store>({
  fleets: importedFleets,
  setFleets: () => {},
  profiles: importedProfiles,
  setProfiles: () => {},
});

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fleets, setFleets] = useState<Fleet[]>(importedFleets);
  const [profiles, setProfiles] = useState<Profile[]>(importedProfiles);

  return (
    <storeContext.Provider value={{ fleets, setFleets, profiles, setProfiles }}>
      {children}
    </storeContext.Provider>
  );
};
