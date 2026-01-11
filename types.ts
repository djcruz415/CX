
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  imageUrl: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
