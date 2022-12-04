export type FleetMetadata = {
  comments: number;
  likes: number;
  refleets: number;
};

export type Fleet = {
  id: string;
  content: string;
  isoPublishDate: string;
  metadata: FleetMetadata;
  profileId: string;
};
