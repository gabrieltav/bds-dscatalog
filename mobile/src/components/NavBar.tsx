import React, { useState } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import menu from "../assets/menu.png";
import { nav } from "../styles";

const NavBar: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={nav.drawer}
      onPress={() => setShow(!show)}
    >
      <Image source={menu} />
      {show ? (
        <View style={nav.options}>
          <Text>Home</Text>
          <Text>Catalogo</Text>
          <Text>ADM</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default NavBar;
