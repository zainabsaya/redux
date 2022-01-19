import React, {Component, } from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {connect, Connect} from 'react-redux';
import Header from './Componet/header';
import CatList from './reducer/CatList';
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.books,
    };
  }

  render() {
    const navigation = (price, name, url, id) => {
      var arr = [];
      arr.push({price: price, name: name, url: url, Id: id});

      this.props.onAdd(arr);
    };
    const Inc = Id => {
      this.props.onInc(Id);
    };

    console.log('prop', this.props.book);
    console.log('data', this.state.data);
    return (
      <View style={{height: '100%'}}>
        <Header navigation={this.props.navigation} />
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
              <CatList item={item} index={index} navigation={navigation} />
            )}
          />
        </View>
      </View>
    );
  }
}

const mapStateToprops = state => {
  console.log('state==>', state);
  return {
    book: state.books,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: book => {
      addItemToCart: dispatch({type: 'ADD_TO_CART', payload: book});
    },
   
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(Category);
