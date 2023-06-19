import { Company, Post, PostComment, User } from "./interfaces";

export const lucas: User = {
  name: "Lucas",
  userName: "lucasgar6",
  email: "lucas@coffstacj.com",
};

export const vitor: User = {
  name: "Vitor",
  userName: "vitor_silva",
  email: "vitor@gmail.com",
};

export const post: Post = {
  title: "My first post",
  imageUrl: "https://picsum.photos/200/200",
  user: lucas,
};

export const comment: PostComment = {
  content: "My first comment",
  likes: 5,
  user: vitor, 
};

export const coffstack: Company = {
  name: "CoffStack",
  cnpj: "123456789",
  website: "https://coffstack.com",
};