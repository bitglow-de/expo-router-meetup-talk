export type FleetMetadata = {
  comments: number;
  likes: number;
  refleets: number;
};

export type Fleet = {
  content: string;
  isoPublishDate: string;
  metadata: FleetMetadata;
  profileId: string;
};
