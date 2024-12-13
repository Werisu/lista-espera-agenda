export type Amigo = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  cost: string;
  encounters: Encounter[];
  birthday: string;
  age: number;
  address: string;
  whatsapp: string;
};

export type AmigoWithoutId = Omit<Amigo, 'id'>;

export type Encounter = {
  createdAt: string;
  date: string;
  id: string;
  amigoId: string;
  location: string;
  description: string;
};
