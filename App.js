import {UsersContext} from "./context/UsersContext";
import {NavigationContainer} from "@react-navigation/native";
import Header from "./screens/Header";
import Main from "./navigators/Main";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";

export default function App() {
  return (
    <>
      <UsersContext>
          <NativeBaseProvider>
              <NavigationContainer>
            <Header/>
              <Main/>


              </NavigationContainer>
          </NativeBaseProvider>
      </UsersContext>
    </>
  );
}




// data
// {
//
//
//
//
//
//
//
//
//


