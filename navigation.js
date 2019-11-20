import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
  BottomTabBar
} from "react-navigation";
import ForgetPassword from './screens/ForgetPassword'
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Favourites from './screens/Favourites'
import Messages from './screens/Messages'
import Transactions from './screens/Transactions';
import LandingScreen from './screens/Landing'
import Chat from './screens/MessageChat'
import Cart from './screens/Cart'
import SignUp from './screens/SignupScreen'
import VideoScreen from './screens/VideoScreen';
import Videos from './screens/Videos';
import AddItem from './screens/AddItem';
import Products from './screens/Products';
import Conditions from './screens/TermsCondition';
import AllOrders from './screens/AllOrders';
import Buy from './screens/Buy';
import Notifications from './screens/Notifications';
import RepostClassified from './screens/ReportClassified';
import Classifieds from './screens/Classifieds';
import ClassifiedsItems from './screens/ClassifiedsItems';
import AdSucces from './screens/AdSuccess';
import ProductScreen from './screens/ProductScreen';
import {Icon} from 'react-native-elements'
import {TouchableHighlight , TouchableOpacity} from 'react-native'
import FIcon from 'react-native-vector-icons/Fontisto'
import HIcon from 'react-native-vector-icons/FontAwesome'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
let TabBarComponent = (props)=> 
<TouchableHighlight 
onPress = {()=> console.log(props , 'propsprops') }
style={{backgroundColor : 'blue' , flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
<Icon  type = {'font-awesome'} name = {props.name} color = {'#fff'} size = {30}/>
  </TouchableHighlight>
 
const AuthStack = createStackNavigator({
  Landing: {
    screen: Transactions,
    navigationOptions: {
      headerTitle: "Landing"
    }
  },
  SignIn: {
    screen: Login,
    navigationOptions: {
      headerTitle: "Sign In"
    }
  },
  CreateAccount: {
    screen: SignUp,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  ForgotPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      headerTitle: "Forgot Password"
    }
  },
});

const ClassifiedStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Homje"
    }
  },
  RepostClassified: {
    screen: RepostClassified,
    navigationOptions: {
      headerTitle: "Repost Classified"
    }
  },
  Classifieds: {
    screen: Classifieds,
    navigationOptions: {
      headerTitle: "Classified"
    }
  },
  ClassifiedsItems: {
    screen: ClassifiedsItems,
    navigationOptions: {
      headerTitle: "Classifieds Items"
    }
  },
  AdSucces: {
    screen: AdSucces,
    navigationOptions: {
      headerTitle: "AdSucces"
    }
  },
  
});

const OrderStack = createStackNavigator({
  Order: {
    screen: AllOrders,
    navigationOptions: {
      headerTitle: "Search"
    }
  },
  Details: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const ProductStack = createStackNavigator({
  Products: {
    screen: Products,
    navigationOptions: {
      headerTitle: "Products"
    }
  },
  ManageProductScreen: {
    screen: ProductScreen,
    navigationOptions: {
      headerTitle: "Manage Products"
    }
  },
  AddItem: {
    screen: AddItem,
    navigationOptions: {
      headerTitle: "AddProduct"
    }
  },
});
const VideoStack = createStackNavigator({
  Videos: {
    screen: Videos,
    navigationOptions: {
      headerTitle: "Videos"
    }
  },
  ManageVideoScreen: {
    screen: VideoScreen,
    navigationOptions: {
      headerTitle: "Discover"
    }
  },
  AddItem: {
    screen: AddItem,
    navigationOptions: {
      headerTitle: "AddVideos"
    }
  },
  
});
const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Profile"
    }
  },
  Favourites : {
    screen: Favourites,
    navigationOptions: {
      headerTitle: "Profile"
    }
  },
  Messages : {
    screen: Messages,
    navigationOptions: {
      headerTitle: "Messages"
    }
  }, 
  Chat : {
    screen: Chat,
    navigationOptions: {
      headerTitle: "Chat"
    }
  },
  Cart : {
    screen: Cart,
    navigationOptions: {
      headerTitle: "Cart"
    }
  },
  Buy : {
    screen: Buy,
    navigationOptions: {
      headerTitle: "Buy"
    }
  },
  Conditions : {
    screen: Conditions,
    navigationOptions: {
      headerTitle: "Conditions"
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      headerTitle: "Notifications"
    }
  }
});

const MainTabs = createBottomTabNavigator({
  Video: {
    screen: VideoStack,
    navigationOptions: {
      tabBarIcon : <FIcon  name = {'youtube-play'} size = {25} color = {'#fff'}/>,
    },
    
    
  },
  Order: {
    screen: OrderStack,
    navigationOptions: {
      tabBarIcon : <HIcon   name = {'handshake-o'} size = {25}  color = {'#fff'}/> 
    },

  },
  Product: {
    screen: ProductStack,
    navigationOptions: {
      tabBarIcon : <MIcon   name = {'file-document-box-multiple-outline'} size = {25}  color = {'#fff'}/> 
    },
    
  },
      Home: {
        screen: ClassifiedStack,
        navigationOptions: {
          tabBarIcon :<MIcon   name = {'home'} size = {25}  color = {'#fff'}/> 
        },

  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon :<HIcon   name = {'user'} size = {25}  color = {'#fff'}/> 
    },
  }
}, {
  initialRouteName  : 'Home',
  tabBarOptions  : {
  showLabel : false,
  activeBackgroundColor  : 'blue',
  inactiveBackgroundColor  : 'blue',
  keyboardHidesTabBar  : true,
}});

const SettingsStack = createStackNavigator({
  SettingsList: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Settings List"
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Profile"
    }
  }
});

const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
  Settings: SettingsStack,
});

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    Promotion1: {
      screen: Profile
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const App = createSwitchNavigator({
  Loading: {
    screen: LandingScreen
  },
  Auth: {
    screen: AuthStack
  },
              App: {
                screen: AppModalStack
              },
});

const Routes = createAppContainer(App);

export default Routes;