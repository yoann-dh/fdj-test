export interface PlayerModel {
  name: string;
  position: string;
  thumbnail: string;
  born: Date
  signin: {
    amount: number;
    currency: string;
  }
}
