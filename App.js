import { exp } from "react-native-reanimated";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/Screens/SearchScreen";
import ResultShowScreen from "./src/Screens/ResultsShowScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultShowScreen,

},{
  initialRouteName: 'Search', 
  
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);