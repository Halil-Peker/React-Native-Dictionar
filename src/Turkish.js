import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    ScrollView
  } from "react-native";
  import { useState } from "react";
  
  export default function Turkish({navigation}) {
    const [input, setInput] = useState("");
    const [checkingWord, setCheckingWord] = useState("");
    const [resault, setResault] = useState("");
    const [example, setExample] = useState("");
    const [egss, setEgss] = useState("");
  
    const wordSearch = (enteredWord) => {
      setInput(enteredWord);
    };
  
    const clear = () => {
      setCheckingWord("");
      setResault("");
      setExample("");
      setInput("");
    };
  
    const getInfo = () => {
      var url = "http://sozluk.gov.tr/gts?ara=" + input;
  
      return fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          var word = response[0].word;
          setCheckingWord(word);
  
          var def = response[0].meanings[0].definitions[0].definition;
          setResault(def);
  
          var eg = response[0].meanings[0].definitions[0].example;
          setExample(eg);
  
          var egs = response[0].meanings[0].partOfSpeech;
          setEgss(egs);
        });
    };
  
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/DJGOWDhV4AAJPYU.jpg")}
          resizeMode="cover"
          style={{ flex: 1, flexDirection: "column" }}
          >
          <ScrollView>
        <SafeAreaView >
          <TextInput
            style={styles.textInputArea}
            placeholder="search a word"
            placeholderTextColor={"gray"}
            textAlign="center"
            clearButtonMode="always"
            onChangeText={wordSearch}
            value={input}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={styles.buttonDesign1}
              onPress={() => {
                getInfo();
              }}
            >
              <Text style={styles.txts}> Ara</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonDesign}
              onPress={() => {
                clear();
              }}
            >
              <Text style={styles.txts}> Temzile</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 7, borderRadius: 15, marginTop: 60 }}>
            <View style={styles.textDesignView}>
              <Text style={styles.textDesign}>{checkingWord} = {egss} </Text>
            </View>
            <View style={styles.textDesignView}>
              <Text style={styles.textDesign}>Açıklama : </Text>
              <Text style={styles.textDesign}>{resault} </Text>
            </View>
            <View style={styles.textDesignView}>
              <Text style={styles.textDesign}>Örnke : </Text>
              <Text style={styles.textDesign}>{example} </Text>
            </View>
          </View>
          </SafeAreaView>
          <TouchableOpacity style={{width:170, backgroundColor:"blue", marginLeft:208, borderRadius:15, height:39, marginVertical:15 }} onPress={() => navigation.goBack()} >
            <Text style={{textAlign:"center", fontSize:22, color:"white", marginTop:3}}>Geri</Text>
          </TouchableOpacity>
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
    textDesignView: {
      // backgroundColor: "#52361b",
      backgroundColor: "#c1141c",
      borderRadius: 15,
      marginBottom: 2,
      fontSize:10
    },
    txts: {
      textAlign: "center",
      paddingTop: 5,
      paddingRight: 2,
      fontSize: 22,
      // fontWeight: "bold",
      color: "white",
    },
    textInputArea: {
      paddingVertical: 12,
      marginBottom: 50,
      marginTop: 170,
      marginHorizontal: 20,
      backgroundColor: "#fff",
      fontSize: 22,
      // fontWeight: "bold",
      borderRadius: 15,
      width: 360,
      textAlign: "center",
      borderWidth: 2,
      borderColor: "#A59C99",
    },
    buttonDesign: {
      backgroundColor: "#A21414",
      width: 140,
      height: 45,
      borderColor: "#B70202",
      borderWidth: 1,
      borderRadius: 15,
      marginHorizontal: 40,
    },
    buttonDesign1: {
      borderColor: "green",
      backgroundColor: "green",
      width: 140,
      height: 45,
      borderWidth: 1,
      borderRadius: 15,
      marginHorizontal: 40,
    },
    textDesign: {
      color: "white",
      borderBottom: 10,
      borderBottomColor: "white",
      fontSize: 25,
      marginTop: 10,
      marginBottom: 10,
      alignSelf: "center",
      paddingHorizontal:16
  
    },
  });
  