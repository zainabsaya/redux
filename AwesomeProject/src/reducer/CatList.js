import React, {Component, useState} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const CatList = ({item, index,navigation}) => {
  const [quantity, setQuantity] = useState(item.qty);
  const dispatch=useDispatch();
  let {books} = useSelector(state => state);
  const mapDispatchToProps = value => {
    dispatch({type: 'UPDATEVALUE', payload: value});
  };

  const onChangeQual = (i, type) => {
    let cantd = books[i].qty;

    if (type) {
      cantd = cantd + 1;
      books[i].qty = cantd;
      setQuantity(cantd);
      mapDispatchToProps({ books: books })
    } else if (type == false && cantd >= 2) {
      cantd = cantd - 1;
      books[i].qty = cantd;
      setQuantity(cantd);
      mapDispatchToProps({ books: books })
    }
  };
  return (
    <View style={{margin: 5, borderRadius: 2}}>
      <Image source={{uri: item.url}} style={{height: 100, width: 100}} />
      <Text style={{textAlign: 'center'}}>{item.name}</Text>
      <View style={{borderWidth: 5, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{padding: 5, backgroundColor: 'orange', borderRadius: 5}}
          onPress={() => onChangeQual(index, true)}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text>{quantity}</Text>
        <TouchableOpacity
          onPress={() => onChangeQual(index, false)}
          style={{padding: 5, backgroundColor: 'orange', borderRadius: 5}}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigation(item.price, item.name, item.url, item.id)}>
        <Text style={{textAlign: 'center'}}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CatList;
