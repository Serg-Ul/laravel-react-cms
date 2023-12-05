export interface IPost {
  [key: string]: string | number;
  id: number;
  userId: number;
  title: string;
  description: string;
}
export type TPosts = IPost[];

declare const a: string | null;

console.log(a);
