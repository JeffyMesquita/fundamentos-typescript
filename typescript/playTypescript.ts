import {Post , PostComment, User, Company} from './interfaces';  
import { vitor, post, coffstack} from './mocksData';

export const lucas: User = {
  name: "Lucas",
  userName: "lucasgar6",
  email: "lucas@coffstacj.com",
};

export const comment: PostComment = {
  content: "My first comment",
  likes: 5,
  user: vitor, 
};

// type ContentType = PostComment['user']


function getUserProperty<Type, Key extends keyof Type>(value:Type, key: Key): Type[Key]{
  return value[key];
}

const value = getUserProperty(comment, 'content');