import {UsersContext} from "./context/UsersContext";
import {NavigationContainer} from "@react-navigation/native";
import Header from "./screens/Header";
import Main from "./navigators/Main";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {PartysContext} from "./context/PartysContext";

export default function App() {
  return (
    <>
      <UsersContext>
          <PartysContext>


          <NativeBaseProvider>
              <NavigationContainer>
            <Header/>
              <Main/>


              </NavigationContainer>
          </NativeBaseProvider>
          </PartysContext>
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


