import {Post , PostComment, User, Company} from './interfaces';  
import {lucas, vitor, post, comment, coffstack} from './mocksData';

// constraints - restrições
// value user: User

interface WithUser {
  user: User
}

function getAuthorName<Type extends WithUser>(value: Type): string {
  return value.user.name
}

const name = getAuthorName(post)