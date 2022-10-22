import {React,useState} from "react";
import { StyleSheet, Text, Button, View,TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function FirstScreen ({ navigation }){
  const [keberangkatan, setKeberangkatan] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.header}>
              <Entypo name="menu" size={35} color="black" />
              <Text style={styles.text}>Hiling.id</Text>
              <Entypo name="user" size={25} color="black" />
            </View>
            
            <View style={styles.mainbox}>
              <Text>Lokasi keberangkatan</Text>
              <View style={styles.boxinput}>
                <MaterialIcons name="flight-land" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  onChangeText={setKeberangkatan}
                  value={keberangkatan}
                  placeholder="Masukkan Lokasi Keberangkatan"
                />
              </View>
              <Text>Lokasi Tujuan</Text>
              <View style={styles.boxinput}>
                <MaterialIcons name="flight-land" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Masukkan Lokasi Tujuan"
                />
              </View>
              <Text>Tanggal Keberangkatan</Text>
                <View style={styles.boxinput}>
                  <Fontisto name="date" size={24} color="black" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Masukkan Tanggal Keberangkatan"
                  />
                </View>
              <Button
                color= 'darkorange'
                title="CARI"
                onPress={() => navigation.navigate('Second')}
              />
            </View>
            
            <View style={styles.kotakbottom}>
              <Text style={styles.copyright}>Copyright Dhilan Septa Yudha - 120140224</Text>
            </View>
            
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6AB547',
    justifyContent:"center",
    alignItems:"center",
  },
  header: {
    width:"100%",
    flexDirection:'row',
    alignItems: 'center',
    padding:30,
    justifyContent: 'space-between'
  },
  text: {
    marginLeft:-5,
    marginTop:70,
    color: 'black',
    fontSize: 40,
    fontWeight:"bold"
  },
  mainbox: {
    marginTop:50,
    marginBottom:-20,
    backgroundColor: 'white',
    width: '90%',
    padding:20,
    borderRadius:20,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius:3,
  },
  boxinput: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:20,
    marginTop:5,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:10,
  },
  kotakbottom: {
    marginTop:-50,
    flex:1,
    width:"100%",
    justifyContent:"flex-end",
    backgroundColor: '#EEEBE3',
    zIndex:-1,
  },
  copyright: {
    color : 'grey',
    fontSize:20,
    textAlign: 'center',
    marginBottom:100,
  }
});