export type Amigo = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
};

export type AmigoWithoutId = Omit<Amigo, 'id'>;
