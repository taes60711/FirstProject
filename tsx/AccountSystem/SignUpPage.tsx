import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { View } from 'react-native-animatable';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icons, Iconss } from '../../src/icons';
import Modal from 'react-native-modal/dist/modal';

Amplify.configure(awsconfig);

export function SignUpPage() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [email, onChangeEmail] = useState('taes60911@gmail.com');
    const [password, onChangePassword] = useState('toto60911');
    const [authCode, setAuthCode] = useState('');
  
  async function signUp() {
    try {
      await Auth.signUp(email, password).then(
        () => setModalVisible(true));
      console.log('✅ Sign-up Confirmed');
    } catch (error) {
      let result = (error as Error).message;
      console.log(result);
      
      try{
        if(result=='An account with the given email already exists.')
          await Auth.signIn(email,password)
      }
      catch(error){
        let results = (error as Error).message;
        console.log(results)
        if(results=='User is not confirmed.')
          setModalVisible(true)
      }
    }
  }

    async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, authCode).then(
        ()=>setModalVisible(!modalVisible));
      console.log('✅ Code confirmed');
      
    } catch (error) {
      console.log('❌ Verification code does not match. Please enter a valid verification code.');
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

    return(
        <ScrollView >
              <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <View style={styles.titleleftspace}>
                        <Text style={{fontSize:16,fontWeight:'500' , color:'#494949'}}>メールで登録</Text>
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
                                    value={email}/>
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
                        <Text style={{fontSize:14 , color:'grey',textDecorationLine:'underline'}}>ユーザーがありますか？</Text>
                    </TouchableOpacity>
                
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
                    <TouchableOpacity style={styles.loginbutton} onPress={signUp}>
                        <Text style={{fontSize:16,fontWeight:'400',color:'#494949'}}>登録</Text>
                    </TouchableOpacity>
                </View>
                
              </View>
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
      height:300,
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
   
    modalView: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
    },
  }) 