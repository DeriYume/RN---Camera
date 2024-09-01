import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import Header from '@/components/header';
import Wrap from "@/components/wrap";
import Logo from "@/components/logo";
import Footer from "@/components/footer";
import Copyright from "@/components/copyright";

const IndexScreen = () => {
  return (
    <Wrap>
      <Header><View /></Header>
      <View style={Styles.body}>
        <Logo />
        <Text style={Styles.title}>Try me!</Text>
        <View style={Styles.formContainer}>
          <TouchableOpacity style={Styles.button} onPress={() => router.push("/CameraScreen")}>
            <Text style={Styles.btnText}>Open Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer><Copyright /></Footer>
    </Wrap>
  );
};

const Styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A1BAC9',
    marginBottom: 15,
  },
  formContainer: {
    width: '80%',
    alignItems: 'center'
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#009FE3',
    shadowColor: 'black',
    shadowOffset: { height: 5, width: 0 },
    elevation: 5,
    margin: 15,
    padding: 5
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF'
  }
})

export default IndexScreen;