import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import Email from '../../components/Auth/Email';
import Password from '../../components/Auth/Password';
import Infomation from '../../components/Auth/Infomation';



const Register = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'email', title: 'First' },
        { key: 'password', title: 'Second' },
        { key: 'information', title: 'Third' },
    ]);
    const renderScene = ({ route, jumpTo }: any) => {
        switch (route.key) {
          case 'email':
            return <Email jumpTo={jumpTo} />;
          case 'password':
            return <Password jumpTo={jumpTo} />;
          case 'information':
            return <Infomation jumpTo={jumpTo} />;
        }
      };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            swipeEnabled={false}
            renderTabBar={()=>(<View></View>)}
        />
    );
}

export default Register