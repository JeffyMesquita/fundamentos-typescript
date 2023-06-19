import {Post , PostComment, User, Company} from './interfaces';  
import { vitor, post, comment, coffstack} from './mocksData';

export const lucas: User = {
  name: "Lucas",
  userName: "lucasgar6",
  email: "lucas@coffstacj.com",
};

function getUserProperty<Type>(user:Type, key: keyof Type){
  return user[key];
}


const value = getUserProperty(comment, 'content');

console.log(value);