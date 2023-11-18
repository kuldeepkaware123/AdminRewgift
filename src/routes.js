// Pages
import {
  AppBar,
  Autocomplete,
  Avatars,
  BackendError,
  Badges,
  Blank,
  ButtonNavigation,
  Buttons,
  Calendar,
  Cards,
  Charts,
  Chat,
  Chips,
  Detail,
  Dialogs,
  Dividers,
  Drawers,
  Editor,
  ExpansionPanels,
  Google,
  GridList,
  Home,
  Invoice,
  Leaflet,
  Lists,
  Lockscreen,
  Media,
  Menus,
  Messages,
  NotFound,
  Paper,
  PasswordReset,
  Pickers,
  PricingPage,
  Products,
  Progress,
  SelectionControls,
  Selects,
  Signin,
  Signup,
  Snackbars,
  Social,
  Steppers,
  Tables,
  Tabs,
  Taskboard,
  TextFields,
  TimelinePage,
  Tooltips,
  Widgets
} from './pages';

import AppsIcon from '@material-ui/icons/Apps';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EqualizerIcon from '@material-ui/icons/Equalizer';
// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import FaceIcon from '@material-ui/icons/Face';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import NavigationIcon from '@material-ui/icons/Navigation';
import PagesIcon from '@material-ui/icons/Pages';
import PersonIcon from '@material-ui/icons/Person';
import PhotoIcon from '@material-ui/icons/Photo';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

export default {
  items: [
    {
      path: '/',
      name: 'Home',
      type: 'link',
      icon: ExploreIcon,
      component: Home
    },

    {
      path: '/widgets',
      name: 'Coupons',
      type: 'link',
      icon: LocalOfferIcon,
      component: Widgets
    },






  ]
};
