import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Button
  } from "react-native";
  import { useState } from "react";  
  export default function StartedPage({navigation}) {
    const [example, setExample] = useState("");
  
    
  
  
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/englisch-nachhilfe-finden.jpg")}
          resizeMode="cover"
          style={{ flex: 1, flexDirection: "column" }}
          >
          <ScrollView>
        <SafeAreaView >
          <View
            style={{
              flexDirection: "column",
              paddingTop:340
            }}
          >
            <TouchableOpacity
              style={styles.buttonDesign1}
              onPress={() => navigation.navigate('english')}
            >
              <Text style={styles.txts}> İngilizce Sözlük</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonDesign}
              onPress={() => navigation.navigate('turkish')}
            >
              <Text style={styles.txts}> Türkçe Sözlük</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
      </ScrollView>
        </ImageBackground>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    txts: {
      textAlign: "center",
      paddingTop: 5,
      paddingRight: 2,
      fontSize: 22,
      // fontWeight: "bold",
      color: "white",
    },
    buttonDesign: {
      backgroundColor: "#A21414",
      width: 180,
      height: 45,
      borderColor: "#B70202",
      borderWidth: 1,
      borderRadius: 15,
      marginHorizontal: 115,
      marginVertical:30
    },
    buttonDesign1: {
      borderColor: "green",
      backgroundColor: "green",
      width: 180,
      height: 45,
      borderWidth: 1,
      borderRadius: 15,
      marginHorizontal: 115,
      marginButtom:5
    },
  });
  