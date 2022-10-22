import { React } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const DATA = [
    {
      id: '1',
      asal: '(L.Keberangkatan)',
      tujuan: '(L.Tujuan)',
      maskapai: 'Elang',
      waktu : '(Tanggal Keberangkatan)',
    },
    {
      id: '2',
      asal: '(L.Keberangkatan)',
      tujuan: '(L.Tujuan)',
      maskapai: 'Tapis Air',
      waktu : '(Tanggal Keberangkatan)',
    },
    {
      id: '3',
      asal: '(L.Keberangkatan)',
      tujuan: '(L.Tujuan)',
      maskapai: 'Lion Air',
      waktu : '(Tanggal Keberangkatan)',
    },
  ];

export default function SecondScreen ({ navigation }){
    const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
          <View style={styles.isiItem2}>
            <MaterialIcons name="airplanemode-active" size={30} color="black" style={styles.iconMaskapai}/>
            <Text style={styles.textMaskapai}>{item.maskapai}</Text>
            <Text style={styles.textTanggal}>{item.waktu}</Text>
          </View>    
        </View>
        );
    return(
        <View style={styles.container}>
            <View style={styles.header1}>
                <TouchableOpacity onPress={() => navigation.navigate('First')}>
                    <FontAwesome name="long-arrow-left" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.text}>Hiling.id</Text>
                <Entypo name="user" size={25} color="black" />
            </View>
            <Text style={styles.text2}>Hasil Pencarian Penerbangan</Text>
            <Text style={styles.text2}>(Tanggal Keberangkatan)</Text>
            
            <SafeAreaView style={styles.kotak2}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        
            <View style={styles.kotakbottom}>
              <Text style={styles.copyright}>Copyright Dhilan Septa Yudha - 120140224</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6AB547'
  },
  header1: {
    width:"100%",
    flexDirection:'row',
    alignItems: 'center',
    padding:20,
    marginTop:30,
    marginBottom:-15,
    justifyContent: 'space-between'
  },
  text: {
    marginLeft:-5,
    color: 'black',
    fontSize: 40,
    fontWeight:"bold"
  },
  text2:{
    fontWeight:"bold",
    textAlign:"center",
  },
  kotak2:{
    marginTop:25,
    backgroundColor:"#EEEBE3"
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius:20,
  },
  isiItem2:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  iconMaskapai:{
    marginRight:10,
    marginTop:10,
    marginBottom:10,
    fontWeight:"bold"
  },
  textMaskapai:{
    width:100,
    marginTop:10,
    fontSize:20,
    marginBottom:10,
    fontWeight:"bold"
  },
  textTanggal:{
    width:200,
    marginTop:10,
    marginBottom:10,
    color:'blue',
  },
  kotakbottom: {
    marginTop:0,
    flex:1,
    width:"100%",
    justifyContent:"flex-end",
    backgroundColor: '#EEEBE3',
  },
  copyright: {
    color : 'grey',
    fontSize:20,
    textAlign: 'center',
    marginBottom:100,
  },
});