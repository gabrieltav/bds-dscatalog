import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { Home, Catalog, ProductDetails } from "../pages";
import { NavBar } from "../components";
import { colors, nav } from "../styles";

const Stack = createNativeStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.leftText}>DS Catalog</Text>;

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: " ",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerLeft: () => <HeaderText />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}

export default Routes;
