import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FileList,
  ScrollView,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux'
class ViewCard extends Component {
  Constructor() {
    Supper();
  }

  render() {
    const {name, url, price} = this.props.route.params;
    console.log('thi', this.props.state);
   const removeProduct =(Id)=>{
      console.log("Id",Id);
      this.props.onRemove(Id);
   }
   
    return (
      <View style={{height: '100%',}}>
      {this.props.state.length>0?
        <FlatList
          data={this.props.state}
          renderItem={({item}) => (
            <View>
              <View style={{margin: 5, borderRadius: 5}}>
                <Image
                  source={{uri: item[0].url}}
                  style={{height: 100, width: 100}}
                />
                <Text style={{textAlign: 'center'}}> Name :{item[0].name}</Text>
                <Text style={{textAlign: 'center'}}> Price :{item[0].price}</Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'orange',
                    padding: 10,
                    borderRadius: 5,
                  }}
                  onPress={()=>removeProduct(item[0].Id)}
                  >
                  <Text style={{textAlign: 'center'}}>Remove item</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />:<Text>No card item found</Text>}
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  
  return{
    state:state.craditem 
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (Id) => {
      Remove:dispatch({ type: 'REMOVE_FROM_CART', payload: Id })
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewCard);




