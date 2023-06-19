import {Post , PostComment, User, Company} from './interfaces';  
import {lucas, vitor, post, comment, coffstack} from './mocksData';

interface  Page<Data> {
  data: Data[];
  count: number;
  nextPage: number | null;
  previousPage: number | null; 
}

function getUserList(): Page<User> {
  return {
    count: 5,
    data: [lucas, vitor,],
    nextPage: 2,
    previousPage: null
  }
}

const users = getUserList();

users.data[0].name;