import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Buscar Concessionária'
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: 'Perfil'
            }
        }
    },{
        defaultNavigationOptions:{
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: '#992c32'
            }
        }
    })
);

export default Routes;