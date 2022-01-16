import React, {Component} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { connect, Connect } from "react-redux";
 class Header extends Component {
    constructor(){
        super();
    }
    render (){
        // console.log("length",this.props?.cartItems?.craditem?.length)
        return(
            <TouchableOpacity style={{backgroundColor:'orange',height:'5%'}} onPress={()=>this.props.navigation.navigate('ViewCard',{carditem:this?.props?.cartItems?.craditem})}>
                <Text style={{ color: 'white', fontWeight: 'bold',position:'absolute',right:'5%' }}>total :{this.props.cartItems.craditem.length}</Text>
            </TouchableOpacity>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("state",state.craditem)
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps)(Header);