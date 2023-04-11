import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Icons, Iconss } from "../src/icons";

export function PointPage() {
    return (
      
        <View style={styles.container}>
          <View style={{width:'100%',height:130,borderBottomEndRadius:40,borderBottomStartRadius:36,backgroundColor:'#c1a38b',justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'85%' ,height:80,justifyContent:"center" ,flexDirection:'row',}}>
              <View style ={{ width:70,height:100,marginStart:15,marginEnd:7.5,bottom:7,alignItems:'center'}}>
                <View style={{width:50,height:50,backgroundColor:'#d16e6e',borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                  <Icons type={Iconss.MaterialIcons} name={'confirmation-num'} size={27} color={'white'}/>
                </View>
                <Text style={{fontSize:14,fontWeight:'500',color:'white'}}>My優惠卷</Text>
              </View>
              
              <View style ={{ width:70,height:100,marginStart:7.5,marginEnd:7.5,bottom:7,alignItems:'center'}}>
                <View style={{width:50,height:50,backgroundColor:'#efba5d',borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                  <Icons type={Iconss.MaterialCommunityIcons} name={'alpha-p-circle'} size={27} color={'white'}/>
                </View>
                <Text style={{fontSize:14,fontWeight:'500',color:'white'}}>Point履歴</Text>
              </View>

              <View style ={{ width:70,height:100,marginStart:7.5,marginEnd:15,bottom:7,alignItems:'center'}}>
                <View style={{width:50,height:50,backgroundColor:'#697fef',borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                  <Icons type={Iconss.MaterialCommunityIcons} name={'basket'} size={27} color={'white'}/>
                </View>
                <Text style={{fontSize:14,fontWeight:'500',color:'white'}}>購物車</Text>
              </View>
            </View>
            
            
            <View style={{width:'85%',height:100,backgroundColor:'white',position:'absolute',left:'8.5%',bottom:-60,borderRadius:7,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 1,justifyContent:'center'}}>
             <View style={{flexDirection:'row',width:'100%',justifyContent:'center',marginEnd:10}}>

              <Icons type={Iconss.MaterialCommunityIcons} name={'alpha-p-circle-outline'} size={60} color={'#b7b7b7'}/>
              <View style={{flexDirection:'column',top:5,marginStart:10}}>
                <Text style={{fontSize:13 ,color:'#494949'}}>利用可能ポイント</Text>
                <Text style={{fontSize:18,fontWeight:'700',color:'#d16e6e'}}>1000Pt</Text>
                <Text style={{fontSize:13,color:'#494949'}}>有効期限12/30 12:00PM まで</Text>
              </View>
             </View>
            </View>
          </View>
          <View style={{height:70}}/>
          
          <View style={{width:'95%',height:500,borderRadius:7,backgroundColor:'white',
          shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 1,}}>
            <ScrollView>
              <View style={styles.container}>
                <View style={{marginTop:15,marginHorizontal:15,width:'95%',height:120,borderRadius:10,backgroundColor:'#d6ab8b',flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:'85%',height:'100%',flexDirection:'row'}}>
                    <View style={{width:'35%',height:'90%',margin:5,borderRadius:5}}>
                      <Image source={require('../img/shouuhin/shouhinn02.png')}
                      resizeMode='cover'
                      style={{ width:'100%',
                      height:'100%',
                    borderRadius:5}}
                    />
                    </View>
                    <View style={{width:'60%',height:'100%'}}>
                      <View style={{height:'80%'}}>
                        <Text style={{fontSize:18,fontWeight:'700',color:'white',marginTop:10}}>商品名商品名商品名商品名</Text>
                        <Text style={{fontSize:12,color:'white',margin:3}}>説明用文字説明用文字説明用文字</Text>
                      </View>
                      <View style={{flexDirection:'row' ,alignItems:'center',height:'20%',bottom:10}}>
                        <Icons type={Iconss.MaterialCommunityIcons} name={'alpha-p-circle-outline'} size={25} color={'#f46b6b'}/>
                        <Text style={{fontWeight:'700',color:'#f46b6b',marginTop:3,marginStart:5}}>50ポイント</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{width:'15%',height:'80%',justifyContent:'center',alignItems:'center',}}>
                    <Icons type={Iconss.MaterialIcons} name={'add-shopping-cart'} size={35} color={'white'}></Icons>
                  </View>
                </View>

                <View style={{marginTop:15,marginHorizontal:15,width:'95%',height:120,borderRadius:10,backgroundColor:'#d1b2ad',flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:'85%',height:'100%',flexDirection:'row'}}>
                    <View style={{width:'35%',height:'90%',margin:5,borderRadius:5}}>
                      <Image source={require('../img/shop/shop02.jpg')}
                      resizeMode='cover'
                      style={{ width:'100%',
                      height:'100%',
                    borderRadius:5}}
                    />
                    </View>
                    <View style={{width:'60%',height:'100%'}}>
                      <View style={{height:'80%'}}>
                        <Text style={{fontSize:18,fontWeight:'700',color:'white',marginTop:10}}>商品名商品名商品名商品名</Text>
                        <Text style={{fontSize:12,color:'white',margin:3}}>説明用文字説明用文字説明用文字</Text>
                      </View>
                      <View style={{flexDirection:'row' ,alignItems:'center',height:'20%',bottom:10}}>
                        <Icons type={Iconss.MaterialCommunityIcons} name={'alpha-p-circle-outline'} size={25} color={'#f46b6b'}/>
                        <Text style={{fontWeight:'700',color:'#f46b6b',marginTop:3,marginStart:5}}>50ポイント</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{width:'15%',height:'80%',justifyContent:'center',alignItems:'center',}}>
                    <Icons type={Iconss.MaterialIcons} name={'add-shopping-cart'} size={35} color={'white'}></Icons>
                  </View>
                </View>

                <View style={{marginTop:15,marginHorizontal:15,width:'95%',height:120,borderRadius:10,backgroundColor:'#d6ab8b',flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:'85%',height:'100%',flexDirection:'row'}}>
                    <View style={{width:'35%',height:'90%',margin:5,borderRadius:5}}>
                      <Image source={require('../img/shop/shop00.jpg')}
                      resizeMode='cover'
                      style={{ width:'100%',
                      height:'100%',
                    borderRadius:5}}
                    />
                    </View>
                    <View style={{width:'60%',height:'100%'}}>
                      <View style={{height:'80%'}}>
                        <Text style={{fontSize:18,fontWeight:'700',color:'white',marginTop:10}}>商品名商品名商品名商品名</Text>
                        <Text style={{fontSize:12,color:'white',margin:3}}>説明用文字説明用文字説明用文字</Text>
                      </View>
                      <View style={{flexDirection:'row' ,alignItems:'center',height:'20%',bottom:10}}>
                        <Icons type={Iconss.MaterialCommunityIcons} name={'alpha-p-circle-outline'} size={25} color={'#f46b6b'}/>
                        <Text style={{fontWeight:'700',color:'#f46b6b',marginTop:3,marginStart:5}}>50ポイント</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{width:'15%',height:'80%',justifyContent:'center',alignItems:'center',}}>
                    <Icons type={Iconss.MaterialIcons} name={'add-shopping-cart'} size={35} color={'white'}></Icons>
                  </View>
                </View>
              </View>
              <View style={{width:'100%',height:170}}></View>
            </ScrollView>
          </View>
        </View>
        

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

}) 