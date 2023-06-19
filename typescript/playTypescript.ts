import {Post , PostComment, User} from './interfaces';  
import {lucas, vitor, post, comment, coffstack} from './mocksData';

function identify<Type>(value: Type): Type{
  return value;
}

const value = identify<User>(lucas);

console.log(value);