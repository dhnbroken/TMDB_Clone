import Home from '../Pages/Home/Home';
import Movie from '../Pages/Movie/Movie';
import People from '../Pages/People/People';
import Search from '../Pages/Search/Search';
import TV from '../Pages/TV/TV';

export const publicRoute = [
  { path: '/', component: Home },
  { path: '/movie', component: Movie },
  { path: '/tv', component: TV },
  { path: '/people', component: People },
  { path: '/search', component: Search },
];
