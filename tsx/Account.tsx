import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Icons, Iconss } from "../src/icons";

export function Account() {
  const [text, onChangeText] = React.useState('Email');
  const [number, onChangeNumber] = React.useState('password');
    return (
        <ScrollView style={styles.ScrollView}>
          <View style={styles.container}>
          <View style={styles.loginContainer}>
            <View style={styles.titleleftspace}>
              <Text style={{fontSize:16,fontWeight:'500' , color:'#494949'}}>メールでログイン</Text>
            </View>
            <View style={styles.leftspace}>
                <View style={{width:'15%', marginBottom:10,alignItems:'center'}}>
                  <Icons type={Iconss.Ionicons} name={'mail'} size={30} color={'#b7b7b7'}></Icons>
                </View>
                  <View style={{width:'80%'}}>
                    <Text style={{marginStart:10,marginTop:10 , color:'#b7b7b7' ,fontSize:15 , fontWeight:'600'}}>メール</Text>
                  <TextInput
                  placeholder="Email"
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}></TextInput>
                </View>
            </View>
            <View style={styles.leftspace}>
            <View style={{width:'15%', marginBottom:15,alignItems:'center'}}><Icons type={Iconss.Entypo} name={'lock'} size={30} color={'#b7b7b7'}></Icons></View>

            <View style={{width:'80%'}}>
            <Text style={{marginStart:10,marginTop:10 , color:'#b7b7b7' ,fontSize:15 , fontWeight:'600'}}>パスワード</Text>
              <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={onChangeNumber}
              value={number}></TextInput>
              </View>
            </View>
            <TouchableOpacity style={styles.titleleftspace}>
              <Text style={{fontSize:14 , color:'grey',textDecorationLine:'underline'}}>パスワードを忘れた場合</Text>
            </TouchableOpacity>
         
          </View>
          <TouchableOpacity style={styles.loginbutton}>
              <Text style={{fontSize:16,fontWeight:'400',color:'#494949'}}>ログイン</Text>
          </TouchableOpacity>

            <View style={styles.loginContainer}>
              <View style={{margin:15,marginTop:20,padding:10}}>
                <Text style={{fontSize:16 , color:'#494949'}}>説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字</Text>
              </View>
              
              <View style={styles.titleleftspace}>
              <Text style={{fontSize:14 , color:'#494949'}}>会員登録がお済みでない方はこちら</Text>
             </View>
             <TouchableOpacity style={styles.signupbutton}>
                <Text>新規会員登録</Text>
             </TouchableOpacity>
             
            </View>
          </View>
          <View style={{width:'100%',height:110,bottom:0}}></View>
        </ScrollView>
    
    );
}

const styles = StyleSheet.create({
  ScrollView:{
    width:'100%',
    height:'100%',
  },
  container:{
    width:'100%'
    ,height:'100%',
    alignItems:"center"
  },
  loginContainer:{
    width:'100%',
    height:250,
    backgroundColor:'white',
    marginTop:15,
    alignItems:'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  input: {
    width:'80%',
    borderColor:'#b7b7b7',
    borderRadius:5,
    height: 37,
    marginTop:5,
    marginStart:10,
    marginBottom:5,
    borderWidth: 1,
    padding: 10,
  },

  titleleftspace:{
    width:'100%',
    height:40,
    marginStart:20,
    padding:10,
    justifyContent:'flex-end'
  },
  leftspace:{
    flexDirection:'row',
    alignItems:"flex-end",
    width:'100%',
    justifyContent:'center'
  },
  loginbutton:{
    width:'90%',
    height:45,
    margin:10,
    backgroundColor:'#c1a38b',
    borderRadius:5,
    justifyContent:"center",
    alignItems:'center',
    shadowRadius:3,
    shadowOpacity:.35,
    elevation:1,
    shadowOffset:{
      width:0,
      height:2
    }
  },
  signupbutton:{
    width:'90%',
    height:40 ,
    borderWidth:1,
    borderColor:'#b7b7b7',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
}) 