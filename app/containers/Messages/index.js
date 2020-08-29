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

class Messages extends React.Component {

 state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  constructor(props) {
    super(props);
    this.state={
      visibleModal:false
    }
  }
  

 Chat(){
    this.props.navigation.navigate(Screens.Chat.route)
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
            <Title style={appStyles.titlewidth}>Messages</Title>
          </Body>
          <Right/>
        </Header>
        <Content enableOnAndroid style={appStyles.content} bounces={false}>
          <View style={styles.searcharea}>
            <View style={styles.searchSection}>
              <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
              <TextInput
              style={styles.input}
              placeholder="Search Users"
              onChangeText={(searchString) => {this.setState({searchString})}} />
            </View>
          </View>
         
            <FlatList
              data={NewsFeed}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => 
              <ListItem avatar style={styles.listitem} >
              <TouchableOpacity style={appStyles.listitemtouch} onPress={() => this.Chat()}>

              <Left>
                <Thumbnail source={require('../../assets/images/man.jpg')} style={{width:50,}} />
                <View style={styles.symbolgreen} />
              </Left>
              <Body>
                <Text>{item.title}</Text>
                <Text note>{item.message}</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
              </TouchableOpacity>
              </ListItem> 
              }
              keyExtractor={item => item.id}
            />  
           
        </Content>
        <Footer style={appStyles.customfooterBg}>
          <FooterIcon />
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
export default connect(mapStateToProps, mapDispatchToProps)(Messages);