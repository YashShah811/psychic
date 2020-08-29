  import React from 'react'
import { StyleSheet, TouchableOpacity, View, Animated, ImageBackground, TextInput, Image, TouchableHighlight, Alert, FlatList} from 'react-native'
import _ from 'lodash'; 
import { Layout, Colors, Screens, ActionTypes } from '../../constants';
import { Logo, Statusbar, Headers, Svgicon, LoginBackIcon, FooterIcon, ModalBox, InputBoxWithoutIcon } from '../../components';
import imgs from '../../assets/images';
import {
  Container,
  Content,
  Icon,
  Spinner,
  Button,
  Text, Row, Col, Item, Input,List, ListItem, Form,
  Header, Left, Body, Title, Right, Footer, FooterTab, Thumbnail,
} from 'native-base';
import { connect, Field } from "react-redux";
import * as userActions from "../../actions/user";
import appStyles from '../../theme/appStyles';
import styles from './styles';
import { SearchBar } from 'react-native-elements';
import {NewsFeed}  from './Data.js';

class Chat extends React.Component {



  constructor(props) {
    super(props);
    this.state={
      visibleModal:false,
       data: [
        {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet .Lorem ipsum dolor sit amet"},
        {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
        {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
        {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
        {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        {id:9, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
      ]
    }
  }
   renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }
  
  render(){

    const { search } = this.state;
    return (
      <Container>

            <Header transparent style={appStyles.headerbg}>
          <Left style={appStyles.row}>
            <LoginBackIcon props={this.props} /> 
          </Left>
          <Body style={appStyles.rowXcenter}>
            <Title style={appStyles.titlewidth}>Oswald Cobblepot</Title>
          </Body>
          <Right>
            <Icon type='Entypo' style={styles.iconSend} name='video-camera' /> 
          </Right>
        </Header>
        <Content enableOnAndroid style={appStyles.content} bounces={false}>
         <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            )
          }}/>
       
      </View>
        </Content>
        <Footer>
            <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}/>
          </View>

            <TouchableOpacity style={styles.btnSend}>
              <Icon style={styles.iconSend} name="send" />
            </TouchableOpacity>
        </View>
        </Footer>
        
      </Container>
     
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => dispatch(userActions.logoutUser()),
      showModal: () => {
        dispatch({ type: ActionTypes.SHOWMODAL, showModal: true })
      },
      hideModal: () => {
        dispatch({ type: ActionTypes.SHOWMODAL, showModal: false })
      },
   };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Chat);