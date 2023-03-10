import Details from '../Pages/Details/Details';
import Home from '../Pages/Home/Home';
import Movie from '../Pages/Movie/Movie';
import People from '../Pages/People/People';
import PersonDetails from '../Pages/PersonDetails/PersonDetails';
import Search from '../Pages/Search/Search';
import TV from '../Pages/TV/TV';

export const publicRoute = [
  { path: '/', component: Home },
  { path: '/movie', component: Movie },
  { path: '/movie/:id', component: Details },
  { path: '/tv', component: TV },
  { path: '/tv/:id', component: Details },
  { path: '/people', component: People },
  { path: '/people/:id', component: PersonDetails },
  { path: '/search', component: Search },
];
