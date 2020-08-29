import React from 'react'
import { StyleSheet, View, TouchableOpacity, ImageBackground, ScrollView, FlatList, Image} from 'react-native'
import _ from 'lodash'; 
import { Layout, Colors, Screens } from '../../constants';
import { Logo, Svgicon, Headers, LoginBackIcon, FooterIcon } from '../../components';
import imgs from '../../assets/images';
import {
  Container,
  Content,
  Icon,
  Spinner,
  Button,
  Text,Toast, Row, Col,
  Header, Left, Body, Title, Right,Footer, FooterTab,
} from 'native-base';
import { connect } from "react-redux";
import * as userActions from "../../actions/user";
import appStyles from '../../theme/appStyles';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import {MypropertiesData}  from './Data.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

  Messages(){
    this.props.navigation.navigate(Screens.Messages.route)
  }

  render(){
    return (

      <Container>
            <Headers {...this.props} />
        <Content enableOnAndroid bounces={false}>
            <View style={styles.headertitle}>
            <Row>
              <Col>
                <Text style={styles.headertitletext}>
                 <Icon type='Entypo' style={styles.topbaricons} name='message' /> 0 TXT Credits
                </Text>
              </Col>
              <Col>
                <Text style={styles.headertitletext}>
                  <Icon type='Entypo' style={styles.topbaricons} name='message' /> 0.00 LIVE Credits
                </Text>
              </Col>
              </Row>
            </View>
            <View>
              <Text style={styles.pagetitle}>Psychics For You</Text>  
            </View>
 
                <FlatList
                data={MypropertiesData}
                contentContainerStyle={styles.scrollViewStyle}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                automaticallyAdjustContentInsets={true}
                removeClippedSubviews={true}
                enableEmptySections={true}
                showsHorizontalScrollIndicator={false}
                style={styles.contentsection}
                legacyImplementation={false}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => 
                <TouchableOpacity onPress={() => this.ViewRoute()} style={styles.boxcontentarea}>  
                       <View>
                       <View style={styles.filtericon}>
                        <Image source={require('../../assets/images/man.jpg')} style={styles.imagesection} />
                        </View>
                        <View style={styles.contentspacingtext}>
                        <View style={styles.symbolgreen} />
                        <Text style={styles.datetitle}>{item.name}</Text>
                        <Text style={styles.positiontitle}>{item.position}</Text>
                        <Text style={styles.pricetitle}>{item.price}</Text>
                        <Row>
                          <Col>
                          <TouchableOpacity style={styles.livechat} onPress={() => this.Messages()}>  
                          <Text style={styles.iconstitle}>LIVE CHAT</Text>
                          </TouchableOpacity>  
                          </Col>
                          <Col>
                          <TouchableOpacity style={styles.livetext}  onPress={() => this.Messages()}> 
                          <Text style={styles.iconstitle}>TEXT</Text>
                          </TouchableOpacity>
                          </Col>
                          
                        </Row>
                         </View>
                       </View>
                </TouchableOpacity> 
              }
              keyExtractor={item => item.id}
            />  


            <View>
              <Text style={styles.pagetitle}>Live Psychics</Text>  
            </View>
 
                <FlatList
                data={MypropertiesData}
                contentContainerStyle={styles.scrollViewStyle}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                automaticallyAdjustContentInsets={true}
                removeClippedSubviews={true}
                enableEmptySections={true}
                showsHorizontalScrollIndicator={false}
                style={styles.contentsection}
                legacyImplementation={false}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => 
                <TouchableOpacity onPress={() => this.ViewRoute()} style={styles.boxcontentarea}>  
                       <View>
                       <View style={styles.filtericon}>
                        <Image source={require('../../assets/images/man.jpg')} style={styles.imagesection} />
                        </View>
                        <View style={styles.contentspacingtext}>
                        <View style={styles.symbolgreen} />
                        <Text style={styles.datetitle}>{item.name}</Text>
                        <Text style={styles.positiontitle}>{item.position}</Text>
                        <Text style={styles.pricetitle}>{item.price}</Text>
                        <Row>
                          <Col>
                          <TouchableOpacity style={styles.livechat} onPress={() => this.Messages()}>  
                          <Text style={styles.iconstitle}>LIVE CHAT</Text>
                          </TouchableOpacity>  
                          </Col>
                          <Col>
                          <TouchableOpacity style={styles.livetext}  onPress={() => this.Messages()}> 
                          <Text style={styles.iconstitle}>TEXT</Text>
                          </TouchableOpacity>
                          </Col>
                          
                        </Row>
                         </View>
                       </View>
                </TouchableOpacity> 
              }
              keyExtractor={item => item.id}
            />  

            <View>
              <Text style={styles.pagetitle}>Featured</Text>  
            </View>
 
              


            <FlatList
              data={MypropertiesData}
                style={styles.contentsection}
            renderItem={ ({item}) =>
              <TouchableOpacity onPress={() => this.ViewRoute()} style={styles.boxcontentareagrid}>  
                       <View>
                       <View style={styles.filtericon}>
                        <Image source={require('../../assets/images/man.jpg')} style={styles.imagesection} />
                        </View>
                        <View style={styles.contentspacingtext}>
                        <View style={styles.symbolgreen} />
                        <Text style={styles.datetitle}>{item.name}</Text>
                        <Text style={styles.positiontitle}>{item.position}</Text>
                        <Text style={styles.pricetitle}>{item.price}</Text>
                        <Row>
                          <Col>
                          <TouchableOpacity style={styles.livechat} onPress={() => this.Messages()}>  
                          <Text style={styles.iconstitle}>LIVE CHAT</Text>
                          </TouchableOpacity>  
                          </Col>
                          <Col>
                          <TouchableOpacity style={styles.livetext}  onPress={() => this.Messages()}> 
                          <Text style={styles.iconstitle}>TEXT</Text>
                          </TouchableOpacity>
                          </Col>
                          
                        </Row>
                         </View>
                       </View>
                </TouchableOpacity>  }
            numColumns={2}
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
  logout: () => dispatch(userActions.logoutUser()),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Home);