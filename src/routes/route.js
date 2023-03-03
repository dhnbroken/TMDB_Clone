import Home from '../Pages/Home/Home';
import Movie from '../Pages/Movie/Movie';
import People from '../Pages/People/People';
import TV from '../Pages/TV/TV';

export const publicRoute = [
  { path: '/', component: Home },
  { path: '/movie', component: Movie },
  { path: '/tv', component: TV },
  { path: '/people', component: People },
];