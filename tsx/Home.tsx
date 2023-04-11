import { useNavigation } from "@react-navigation/native";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { Icons, Iconss } from "../src/icons";
import Slick from 'react-native-slick';
import { OrderPage } from './Order';

const test =()=>{
    setInterval(()=>{
      console.log("sss")
    },3*1000)
  }
  


 

export function Home({navigation}: {navigation: any}) {
    // const navigation = useNavigation() 
    const coupon =()=>{
      navigation.navigate("Kupo" as never)
      
    }
    return (
      <ScrollView style={styles.container}>
        <View style={{alignItems:'center'}}>
          <View style={styles.slickContainer}>
            <Slick showsButtons={false} autoplay={true} dotStyle={{marginLeft:7,marginRight:7}} activeDotStyle={{backgroundColor:"#894f23",marginBottom:7,marginLeft:7}} autoplayTimeout={5}>
              <Image source={require('../img/banner/01.jpg')}
                    resizeMode='cover'
                    style={{width:'100%',height:360 }}/>
              <Image source={require('../img/banner/03.jpg')}
                    resizeMode='cover'
                    style={{width:'100%',height:360 }}/>
              <Image source={require('../img/banner/02.jpg')}
                    resizeMode='cover'
                    style={{width:'100%',height:360 }}/>
            </Slick>
          </View>
        
        <View style={{width:'100%',height:110 ,alignItems:'center',justifyContent:'flex-end'}}>
          <TouchableOpacity onPress={coupon} style={{width:'100%',alignItems:'center'}}>

            <View style={{width:'80%',height:80,borderRadius:7,justifyContent:'center',backgroundColor:'#d12124'}}>
                    <View style={{width:'96%',height:'80%',borderWidth:2,borderRadius:4,borderColor:'#ff8c8c',alignItems:'flex-end'}}>
                      <View style={{width:'68%' ,height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:22,fontWeight:'800',color:'white',
                          textShadowColor: 'rgba(0, 0, 0, 0.55)',
                          textShadowOffset: {width: 0, height: 1},
                          textShadowRadius: 5
                          }}>My優惠卷</Text>
                        <Text style={{fontSize:14,fontWeight:'500',color:'white' ,}}>説明用文字.......</Text>
                      </View>
                    </View>
                    <View style={{position:'absolute',top:20,right:-19,width:38,height:38 ,borderRadius:50,backgroundColor:'#F2F2F2'}}></View>
                    <View style={{position:'absolute',top:22.5,right:-17,width:33,height:33 ,borderRadius:50,backgroundColor:'#d12124',justifyContent:'center',alignItems:'center'}}>
                      <Icons type={Iconss.Ionicons} name={'arrow-redo-outline'} color={'white'} size={16}/>
                    </View>
            </View>

          {/* <View style={{position:'absolute',transform:[{rotate:'-15deg'}],left:20,top:20,width:110,height:70,borderWidth:5,borderRadius:7,shadowColor:'grey',shadowRadius:10,shadowOpacity:.5,elevation:10,shadowOffset:{width:0,height:2}}}></View> */}
          <View style={{position:'absolute',transform:[{rotate:'-15deg'}],left:35,width:110,height:70,borderWidth:5,borderRadius:7,shadowColor:'grey',shadowRadius:10,shadowOpacity:.5,elevation:10,shadowOffset:{width:0,height:2}}}></View>
            {/* <Image source={require('../img/banner/banner1.jpg')} style={{position:'absolute',transform:[{rotate:'-15deg'}],left:20,top:20,width:110,height:70,borderWidth:5,borderRadius:7,borderColor:'#f46464'}}/> */}
            <Image source={require('../img/banner/banner2.jpg')}
                style={{position:'absolute',transform:[{rotate:'-15deg'}],left:35,width:110,height:70,borderWidth:5,borderRadius:7,borderColor:'#f46464'}}/>
          </TouchableOpacity>
        </View>
        


        <View style={{marginTop:15,width:'95%',height:200}}>
          <Text style={{marginBottom:5,fontSize:15,fontWeight:'500',color:'#494949'}}>人氣商品</Text>
         <ScrollView horizontal={true} style={{marginTop:5}}>
          
          <TouchableOpacity onPress={()=>navigation.navigate("test" as never)}>
            <View style={{width:130,height:170,borderRadius:10,marginLeft:10,marginRight:10,backgroundColor:'white',shadowColor:'grey',shadowRadius:10,shadowOpacity:.3,elevation:7,shadowOffset:{width:0,height:2}}}>
                <Image source={require('../img/shop/shop01.jpg')} style={{width:'100%',height:95,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                  <Text style={{fontSize:15,fontWeight:'600',color:'#494949',margin:7}}>商品名商品名商品名商品名商品名</Text>
                    <LinearGradient
                    start={{x: 0, y: .7}} end={{x: 0, y: 1}} locations={[0,0.7,1]} colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                    style={{position:'absolute',width:130,height:100,borderTopEndRadius:10 ,borderTopStartRadius:10 }} >
                    </LinearGradient>

                    <Text style={{position:'absolute',marginLeft:9,bottom:8,fontSize:16,fontWeight:'700',color:'#494949'}}>$500</Text>
                    <View style={{width:70,height:20 ,flexDirection:'row',position:'absolute',bottom:7,right:7,backgroundColor:'white',borderStartWidth:1,borderEndWidth:1,borderBottomWidth:1,borderColor:'#c1a38b',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                      <Icons type={Iconss.FontAwesome} name={'shopping-basket'} color={'#c1a38b'} size={15}/>
                      <Text style={{marginLeft:5,marginTop:2.5,fontSize:14,fontWeight:'500',color:'#c1a38b'}}>追加</Text>
                    </View>
              </View>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={()=>navigation.navigate("test" as never)}>
              <View style={{width:130,height:170,borderRadius:10,marginLeft:10,marginRight:10,backgroundColor:'white',shadowColor:'grey',shadowRadius:10,shadowOpacity:.3,elevation:7,shadowOffset:{width:0,height:2}}}>
                <Image source={require('../img/shop/shop00.jpg')} style={{width:'100%',height:95,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                  <Text style={{fontSize:15,fontWeight:'600',color:'#494949',margin:7}}>商品名</Text>
                    <LinearGradient
                    start={{x: 0, y: .7}} end={{x: 0, y: 1}} locations={[0,0.7,1]} colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                    style={{position:'absolute',width:130,height:100,borderTopEndRadius:10 ,borderTopStartRadius:10 }} >
                    </LinearGradient>
                    <Text style={{position:'absolute',marginLeft:9,bottom:8,fontSize:16,fontWeight:'700',color:'#494949'}}>$50</Text>
                    <View style={{width:70,height:20 ,flexDirection:'row',position:'absolute',bottom:7,right:7,backgroundColor:'white',borderStartWidth:1,borderEndWidth:1,borderBottomWidth:1,borderColor:'#c1a38b',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                      <Icons type={Iconss.FontAwesome} name={'shopping-basket'} color={'#c1a38b'} size={15}/>
                      <Text style={{marginLeft:5,marginTop:2.5,fontSize:14,fontWeight:'500',color:'#c1a38b'}}>追加</Text>
                    </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("test" as never)}>
            <View style={{width:130,height:170,borderRadius:10,marginLeft:10,marginRight:10,backgroundColor:'white',shadowColor:'grey',shadowRadius:10,shadowOpacity:.3,elevation:7,shadowOffset:{width:0,height:2}}}>
              <Image source={require('../img/shop/shop02.jpg')} style={{width:'100%',height:95,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                <Text style={{fontSize:15,fontWeight:'600',color:'#494949',margin:7}}>商品名商品名商品</Text>
                  <LinearGradient
                    start={{x: 0, y: .7}} end={{x: 0, y: 1}} locations={[0,0.7,1]} colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                    style={{position:'absolute',width:130,height:100,borderTopEndRadius:10 ,borderTopStartRadius:10 }} >
                  </LinearGradient>
                  <Text style={{position:'absolute',marginLeft:9,bottom:8,fontSize:16,fontWeight:'700',color:'#494949'}}>$5</Text>
                  
                 
                    <View style={{width:70,height:20 ,flexDirection:'row',position:'absolute',bottom:7,right:7,backgroundColor:'white',borderStartWidth:1,borderEndWidth:1,borderBottomWidth:1,borderColor:'#c1a38b',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                      <Icons type={Iconss.FontAwesome} name={'shopping-basket'} color={'#c1a38b'} size={15}/>
                      <Text style={{marginLeft:5,marginTop:2.5,fontSize:14,fontWeight:'500',color:'#c1a38b'}}>追加</Text>
                    </View>
                  
            </View>
            </TouchableOpacity>
         </ScrollView>
        </View>
        {/* <Text >Home!</Text>
        <Button title="ユーザ" onPress={() => navigation.navigate("Kk" as never)} />
        <Button title="test" onPress={test} /> */}
      </View>
      
     
      
      <View style={{width:'100%',height:110}}></View>
      </ScrollView>
     
      
    );
  }

  
  const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F2'
    },
    slickContainer:{
      width:'100%',
      height:360
    }
  });