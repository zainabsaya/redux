import React, {Component} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { connect, Connect } from "react-redux";
import Header from './Componet/header'
class Category extends Component {
  constructor() {
    super();
   this.state={
     data:[]
   }
  }
 

  render() {
       const navigation = (price, name, url,id) => {
      // this.props.navigation.navigate('ViewCard', {
      //   price: price,
      //   name: name,
      //   url: url,
      // });
    var arr = [];
    arr.push({price:price,name:name,url:url,Id:id})
   this.setState({data:arr})
   console.log("data",this.state.data)
   this.props.onAdd(arr)
    };
    return (
      <View style={{height: '100%'}}>
      <Header navigation={this.props.navigation}/>
        <View
          style={{
            marginHorizontal: 1,
            marginVertical: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}>
          <FlatList
            numColumns={3}
            style={{height: '10%', padding: 10}}
            data={this.props.book}
            renderItem={({item, index}) => (
              <View style={{margin: 5, borderRadius: 2}}>
                <Image
                  source={{uri: item.url}}
                  style={{height: 100, width: 100}}
                />
                <Text style={{textAlign: 'center'}}>{item.name}</Text>
           
               
                <TouchableOpacity
                  style={{
                    backgroundColor: 'orange',
                    padding: 10,
                    borderRadius: 5,
                  }}
                  onPress={() => navigation(item.price, item.name, item.url,item.id)}>
                  <Text style={{textAlign: 'center'}}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const mapStateToprops = (state) => {
  // console.log("tate",state)
  return {
   book:state.books || [],
 };
 };
 
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (book) => {
      addItemToCart:dispatch({ type: 'ADD_TO_CART', payload: book })
    },
  };
}
export default connect(mapStateToprops, mapDispatchToProps)(Category);


