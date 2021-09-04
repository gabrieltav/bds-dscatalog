import React from "react";
import { View, TextInput } from "react-native";
import { text, theme } from "../styles";

interface SearchPros {
  placeholder: string;
  search: string;
  setSearch: Function;
}

const SearchInput: React.FC<SearchPros> = ({
  search,
  setSearch,
  placeholder,
}) => {
  return (
    <View style={theme.inputContainer}>
      <TextInput
        style={theme.searchInput}
        placeholder={placeholder}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  );
};
export default SearchInput;
