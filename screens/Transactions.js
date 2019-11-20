import React, { Fragment } from 'react';
import {
    StyleSheet,FlatList,
    View,TouchableOpacity,
    Text,ScrollView,
    Image
} from 'react-native';
import CustomHeader from '../Component/header'
import { Picker } from "native-base";
import {withNavigation} from 'react-navigation'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import {Icon} from 'react-native-elements'


const Card = (props)=>{
return(
<View key = {props.index} style = {[styles.cardContainer , {borderColor : props.obj.status  === 'Approved' ? '#37D67A' : '#FF8F8F'}]}>
                   <View style = {styles.number}>
                     <View >
                       <Text style = {{fontSize : 12 , fontWeight : 'bold'}}>MT LOGIN</Text>
                       <Text style = {{fontSize : 15 , color : '#000'}}>{props.obj.mtLogin}</Text>
                      </View>
                       <Text style = {{fontSize : 16 , color : '#89A1CF' }}>{props.obj.amount} </Text>
                     </View>
                      {
                        props.obj.Note ? 
                        <View style = {{flexDirection : "row" , paddingLeft  : 12 }}>
                          <Text style = {{fontSize : 14 , fontWeight : 'bold'}}>Note :</Text>
                          <Text style = {{fontSize : 14 }}> {props.obj.Note}</Text>
                          </View>
                          :
                          props.obj.toMtLogin ? 
                          <View style = {{ paddingLeft  : 12 }}>
                          <Text style = {{fontSize : 12 , fontWeight : 'bold'}}>TO MT LOGIN</Text>
                          <Text style = {{fontSize : 15 , color : "#000" }}> {props.obj.toMtLogin}</Text>
                          </View>
                          :
                          null
                      } 
                       <View style = {styles.status}> 
                       <View style = {{flexDirection : 'row' , alignItems : 'center'}}>
                         <Icon type = {'font-awesome'} name = {'circle'} 
                         color = { props.obj.status  === 'Approved' ? 'green' : 'red'}
                          size = {12} containerStyle = {{paddingRight : 8}} /> 
                          <Text>{props.obj.status} </Text>
                          </View>
                      <Text style = {{fontSize : 14  }}>{props.obj.createdDate}</Text>
                         </View>
                </View>
)
}


 class Transactions extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        selected: "deposit",
        depositTable : [{
          mtLogin : '123456788',
          amount : '$1200',
          status : "Approved",
          createdDate : new Date().toLocaleDateString()
        } ,
        {
          mtLogin : '123456788',
          amount : '$1200',
          status : "Canceled",
          createdDate : new Date().toLocaleDateString()
        } ,
        {
          mtLogin : '123456788',
          amount : '$1200',
          status : "Approved",
          createdDate : new Date().toLocaleDateString()
        } ,
        ] ,
        withdrawelTable : [{
          mtLogin : '123456788',
          amount : '$1200',
          status : "Approved",
          Note : 'wd',
          createdDate : new Date().toLocaleDateString()
        } ,
        {
          mtLogin : '123456788',
          amount : '$1200',
          status : "Canceled",
          Note : 'WD',
          createdDate : new Date().toLocaleDateString()
        } ,
        {
          mtLogin : '123456788',
          amount : '$1200',
          status : "Approved",
          Note : 'WDDSDSF',
          createdDate : new Date().toLocaleDateString()
        } ,
        ]
       , transferTable : [{
          mtLogin : '123456788',
          toMtLogin : '2345672323',
          amount : '$1200',
          status : "Approved",
          createdDate : new Date().toLocaleDateString()
        } ,
        {
          mtLogin : '123456788',
          toMtLogin : '2345672323',
          amount : '$1200',
          status : "Canceled",
          createdDate : new Date().toLocaleDateString()
        } ,
        {
          mtLogin : '123456788',
          toMtLogin : '2345672323',
          amount : '$1200',
          status : "Approved",
          createdDate : new Date().toLocaleDateString()
        } ,
        ]

      }
  }
  static navigationOptions = {
    header: null,
};

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
    render() {
        let {depositTable , withdrawelTable , transferTable} = this.state
        let style = {backgroundColor : "#FC4A1A"}
        return (
          <View style={styles.container}>
              <CustomHeader  title = {'Transactions'} openMenu = {()=> this.props.navigation.navigate('Home')} />
          <Tabs>
            <Tab 
            tabStyle = {style} 
            activeTabStyle = {style}
            textStyle = {{color : '#fff'}}
            heading="DEPOSITS">
              <FlatList 
              data = {depositTable}
              renderItem = {({item , index})=> <Card index= {index} obj = {item} />}
              />
            </Tab>
            <Tab 
            tabStyle = {style} 
            activeTabStyle = {style}
            textStyle = {{color : '#fff'}}
            heading="WITHDRAWELS">
               <FlatList 
              data = {withdrawelTable}
              renderItem = {({item , index})=> <Card index= {index} obj = {item} />}
              />
            </Tab>
            <Tab 
            tabStyle = {style} 
            activeTabStyle = {style}
            textStyle = {{color : '#fff'}}
            tabStyle = {style} heading="TRANSFERS">
               <FlatList 
              data = {transferTable}
              renderItem = {({item , index})=> <Card index= {index} obj = {item} />}
              />
            </Tab>
          </Tabs>
        
     
          </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      cardContainer : {minHeight : 85 , marginHorizontal : 12  ,  marginTop : 12,
        backgroundColor  : '#fff' , borderColor : '#FF8F8F' , borderWidth : 0.5},
        number : {flexDirection : 'row' , paddingHorizontal : 12 , padding : 8,
        justifyContent : 'space-between'},
        status : {flexDirection : "row" , height : 30 , alignItems : 'center' ,
        justifyContent : 'space-between' , paddingHorizontal : 12 ,}
    })
    export default withNavigation(Transactions)
