import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icons, Iconss } from "../src/icons";

const DATA = [
  {
    title: 'First Item',
    imgUrl:require('../img/banner/banner0.jpg'),
  },
  {
    title: 'Second Item',
    imgUrl:require('../img/banner/banner1.jpg'),
  },
  {
    title: 'Third Item',
    imgUrl:require('../img/shouuhin/shouhinn02.png'),
  },
];

const imgUrl =`../img/shouuhin/shouhinn02.png`;

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View>
    <Text style={{fontSize:18,fontWeight:'700',marginStart:20}}>{title}</Text>
  </View>
);

function CoupounAll() {
  const navigation = useNavigation() 
    const gohome =()=>{
      navigation.navigate("Home" as never)
    }
    
    return (
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({item}) => 
            <View style={styles.shouhinnContainer}>
              <Image source={item.imgUrl}
                    resizeMode='cover'
                    style={styles.shoushinnImg}/>
              <Item title={item.title}  />
          <View style={{flexDirection:"row" ,alignItems:'center' ,marginStart:10}}>
            <View style={{width:70,height:40,alignItems:"center",justifyContent:'center'}}>
              <Text style={{fontSize:20,fontWeight:'700'}}>$552</Text>
                <View style={{position:'absolute',transform:[{rotateZ: '-25deg'}],width:45,height:3,backgroundColor:'red'}}></View>
              </View>
              
              <View
                style={{
                  borderBottomColor: 'red',
                  borderLeftWidth: 15,
                  borderLeftColor: 'transparent',
                  borderBottomWidth: 15,
                 transform:[{rotateZ:'315deg'}]
                }}
              />
              <View style={{width:100,alignItems:'center'}}>
                <Text style={{fontSize:30, fontWeight:'700',color:'red'}}>$252</Text>
              </View> 

              <TouchableOpacity style={{width:40,height:40,borderRadius:25,borderWidth:1,borderColor:'grey',justifyContent:'center',alignItems:'center',position:'absolute',right:30,top:15,}}>
              <Icons type={Iconss.AntDesign} name={'hearto'} color={'grey'} size={18}/>
              </TouchableOpacity>
            </View>
             

              <View style={{width:'100%',height:50,marginBottom:5}}>
                <View style={{width:120,height:20,backgroundColor:'#b7b7b7',borderRadius:10,marginVertical:7,marginStart:10,alignItems:'center'}}>
                <Text style={{color:'white',fontWeight:'600'}}>一度に２つまで</Text>                  
                </View >

                <Text style={{marginStart:10}}>2023/04/23 PM 12:00 まで有効</Text>
              </View>
              <View style={{justifyContent:'center',alignItems:'center', width:'100%'}}>
              <View style={{flexDirection:'row',marginVertical:3}}>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>               
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>
               <View style={{width:8,height:1.5,borderRadius:10,backgroundColor:'#b7b7b7',marginStart:5,marginEnd:5}}></View>

              </View>
              
                <TouchableOpacity style={{width:'90%',borderRadius:4,height:45,backgroundColor:'#d12124',justifyContent:'center',alignItems:'center',margin:10,   
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 1,}}>
                  <Text style={{color:'white',fontSize:18,fontWeight:'700',}}>クーポンを利用する</Text>
                </TouchableOpacity>
              </View>
            </View>
            }
          />
        </View>

    );

}

function Coupounsuki() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Coupounsuki!</Text>
    </View>
  );
}


const Tab = createMaterialTopTabNavigator();

export function Kupo() {
  return(
    <Tab.Navigator screenOptions={{
      tabBarIndicatorStyle: {
        backgroundColor:'#c1a38b',
      },
    }}>
    <Tab.Screen name="全て" component={CoupounAll} />
    <Tab.Screen name="お気に入り" component={Coupounsuki} />
  </Tab.Navigator>
  );

  }


const styles = StyleSheet.create({
  shouhinnContainer:{
    width:340,
    marginBottom:10,
    backgroundColor:'white',
    borderRadius:10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  shoushinnImg:{
    width:'92%',
    height:170,
    borderRadius:10,
    backgroundColor:'black',
    margin:13,
    marginTop:15,
  },
  container:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
  }
}) 