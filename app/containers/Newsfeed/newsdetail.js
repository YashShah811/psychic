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
  Button,Card,CardItem,
  Text, Row, Col, Item, Input,List, ListItem, Form,
  Header, Left, Body, Title, Right, Footer, FooterTab, Thumbnail,
} from 'native-base';
import { connect, Field } from "react-redux";
import * as userActions from "../../actions/user";
import appStyles from '../../theme/appStyles';
import styles from './styles';
import { SearchBar } from 'react-native-elements';
import {NewsFeedDetails}  from './Data.js';

class NewsDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      visibleModal:false
    }
  }
  
  render(){
    return (
      <Container>

            <Header transparent style={appStyles.headerbg}>
          <Left style={appStyles.row}>
            <LoginBackIcon props={this.props} /> 
          </Left>
          <Body style={appStyles.rowXcenter}>
            <Title style={appStyles.titlewidth}>News Detail</Title>
          </Body>
          <Right/>
        </Header>
        <Content enableOnAndroid bounces={false}>

            <FlatList
              data={NewsFeedDetails}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => 
              <View style={styles.newsfeedbox}>
              <View>
              <TouchableOpacity style={appStyles.listitemtouch} onPress={() => this.ViewRoute()}>
                <Image  source={require('../../assets/images/nature.jpg')} style={styles.mainimage}/>
              </TouchableOpacity>

              <TouchableOpacity style={appStyles.listitemtouch} onPress={() => this.ViewRoute()}>
                <Text style={styles.newstitle}>{item.title}</Text>
              </TouchableOpacity>

                <Text style={styles.newscontent} note>{item.description}</Text>
              </View>
              <View>
                <Button transparent>
                  <Text>{item.date}</Text>
                </Button>
              </View>
              </View> 
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
   };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);