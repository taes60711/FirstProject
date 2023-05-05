import React, { useState } from "react";
import {StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Icons, Iconss } from "../../src/icons";
import Modal from 'react-native-modal/dist/modal';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

export function Account({navigation}: {navigation: any}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [authCode, setAuthCode] = useState('');

  async function signIn() {
    try {
      await Auth.signIn(email, password);
      console.log('✅ Success');
      
    } catch (error) {
      let results = (error as Error).message;
      console.log(results)
      if(results=='User is not confirmed.')
          setModalVisible(true)
      console.log('❌ Error signing in...', error);
    }
  }

  const goSignUpPage =()=>{
    navigation.navigate("SignUpPage" as never)
    
  }


  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, authCode);
      console.log('✅ Code confirmed');
      
    } catch (error) {
      console.log(
        '❌ Verification code does not match. Please enter a valid verification code.');
    }
  }

  async function ResendVerification() {
    try{
        await Auth.resendSignUp(email);
        console.log('✅ ResendVerification');
    }
    catch (error) {
        console.log(
          '❌ Verification code does not match. Please enter a valid verification code.');
      }
  }


  const [email, onChangeEmail] = React.useState('taes60711@gmail.com');
  const [password, onChangePassword] = React.useState('toto60711');
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
                  onChangeText={onChangeEmail}
                  value={email}></TextInput>
                </View>
            </View>
            <View style={styles.leftspace}>
            <View style={{width:'15%', marginBottom:15,alignItems:'center'}}><Icons type={Iconss.Entypo} name={'lock'} size={30} color={'#b7b7b7'}></Icons></View>

            <View style={{width:'80%'}}>
            <Text style={{marginStart:10,marginTop:10 , color:'#b7b7b7' ,fontSize:15 , fontWeight:'600'}}>パスワード</Text>
              <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={onChangePassword}
              value={password}></TextInput>
              </View>
            </View>
            <TouchableOpacity style={styles.titleleftspace}>
              <Text style={{fontSize:14 , color:'grey',textDecorationLine:'underline'}}>パスワードを忘れた場合</Text>
            </TouchableOpacity>
         
          </View>


          <Modal 
              isVisible={modalVisible}
              onBackdropPress={()=>setModalVisible(!modalVisible)}
              animationIn='zoomIn'
              animationOut='zoomOut'
              animationInTiming={600}
              animationOutTiming={500}
          >
              <View style={styles.modalView}>
                  <Text style={{margin:10 ,fontWeight:'700',fontSize:18}}>認証コード入力</Text>
                  <Icons type={Iconss.MaterialIcons} name={'mail'} size={40} color={'grey'}></Icons>
                  <Text style={{margin:10}}>送信された認証コードを入力してください
                     
                  </Text>
                 <View style={{width:'100%'}}>
                 <Text style={{justifyContent:'flex-start',paddingStart:42}}>
                      認証コード
                  </Text>
                 </View>
                  <TextInput
                              style={styles.input}
                              keyboardType='number-pad'
                              textAlign={'center'}
                              onChangeText={setAuthCode}
                              value={authCode}>
                  </TextInput>
                  
                  <View style={{flexDirection:'row',marginVertical:5}}>
                  <TouchableOpacity style={{width:120,height:40,margin:10,borderWidth:1,borderRadius:3,borderColor:'#b7b7b7',justifyContent:'center',alignItems:'center'}}
                  onPress={()=>setModalVisible(!modalVisible)}>
                      <Text style={{fontWeight:'400'}}>閉じる</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{width:120,height:40,margin:10,borderRadius:3,borderWidth:1,borderColor:'#b7b7b7',backgroundColor:'#c1a38b',justifyContent:'center',alignItems:'center'}}
                  onPress={confirmSignUp}>
                      <Text style={{color:'white',fontWeight:'600'}}>認証</Text>
                  </TouchableOpacity>            
                  </View>
                  <TouchableOpacity style={{marginVertical:10}} onPress={ResendVerification}>
                      <Text style={{textDecorationLine:'underline'}}>認証コードを再送する</Text>
                  </TouchableOpacity>
              </View>
          </Modal>

          <TouchableOpacity style={styles.loginbutton} onPress={signIn}>
              <Text style={{fontSize:16,fontWeight:'400',color:'#494949'}}>ログイン</Text>
          </TouchableOpacity>

            <View style={styles.loginContainer}>
              <View style={{margin:15,marginTop:20,padding:10}}>
                <Text style={{fontSize:16 , color:'#494949'}}>説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字説明用文字</Text>
              </View>
              
              <View style={styles.titleleftspace}>
              <Text style={{fontSize:14 , color:'#494949'}}>会員登録がお済みでない方はこちら</Text>
             </View>
             <TouchableOpacity style={styles.signupbutton} onPress={goSignUpPage}>
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
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
}) 