export type Amigo = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  cost: string;
  meetings: number;
};

export type AmigoWithoutId = Omit<Amigo, 'id'>;
