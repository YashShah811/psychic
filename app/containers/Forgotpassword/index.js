import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Image } from 'react-native'
import _ from 'lodash';
import { NavigationActions } from 'react-navigation';
import {
  Container,
  Content,
  Icon,
  Text,
  Button,
  Form,
  Item,
  Label,
  Input,
  Spinner, Row, Col
} from 'native-base';
import { connect } from "react-redux";
import { submit } from 'redux-form';
import * as Animatable from 'react-native-animatable';

import { Layout, Colors, Screens } from '../../constants';
import { Logo, Statusbar, LoginBackIcon } from '../../components';
import imgs from '../../assets/images';
import * as userActions from "../../actions/user";
import appStyles from '../../theme/appStyles';
import styles from './styles';
import ForgotForm from './form';

class Forgotpassword extends React.Component {
  constructor(props) {
    super(props);
  }

  onSignInButtonPressHandler() {
    this.props.navigation.navigate(Screens.SignIn.route)
  }

  reset(values, dispatch, props) {
    console.warn("Val", values)
    dispatch(userActions.forgotpassword(values))
      .then(res => {
        console.warn("Val00", res.status)
        if (res.status == "success") {
          dispatch(NavigationActions.navigate({ routeName: Screens.OTP.route }));
          //this.props.navigation.navigate(Screens.OTP.route)
        } else {
          showToast(res.message, "danger");
        }
      })
      
  }


  render() {
    const { language } = this.props;
    return (


      <Container>
        <ImageBackground
          source={imgs.bg}
          style={{ width: Layout.window.width, height: Layout.window.height }}>
          <Content enableOnAndroid bounces={false}>

            <View style={appStyles.rowXcenter}>
              <TouchableWithoutFeedback>
                <Logo style={appStyles.loginLogo} />
              </TouchableWithoutFeedback >
            </View>
            <View style={styles.loginboxarea}>
              <View style={appStyles.rowXcenter}>
                <Text style={styles.loginwelcome}>Forgot Password</Text>
              </View>
              <View>
                <Animatable.View
                  animation="fadeInUp"
                  delay={200}
                  style={styles.loginBox}>
                  <ForgotForm onSubmit={this.reset} />
            

                </Animatable.View>
              </View>
              <Row>
                <Col />
                <Col>
                  <Animatable.View
                    animation="fadeIn"
                    delay={1000}
                    style={[styles.loginbutton, { justifyContent: 'center' }]}>
                    {this.props.isLoading ?
                      <Spinner color={Colors.secondary} /> :
                      <Button
                        full
                        primary
                        style={[appStyles.btnSecontary, styles.loginbuttontext, { justifyContent: 'center' }]}
                        onPress={() => this.props.pressReset()}
                      >
                        <Text style={styles.logintext}> {language.reset} </Text>
                      </Button>
                    }
                  </Animatable.View>
                </Col>
                <Col />
              </Row>                     
              <Row>                
                <Col>
                  <Button transparent full
                    onPress={() => this.onSignInButtonPressHandler()}
                    style={[styles.linkTextBtn, { justifyContent: 'center' }]}>
                    <Text style={styles.linkText}> Remember Password? Login </Text>
                  </Button>
                </Col>
              </Row>

            </View>


          </Content>

        </ImageBackground>
      </Container>


    );
  }
}
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  return {
    isLoading: state.common.isLoading,
    language: state.auth.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pressReset: () => dispatch(submit('forgotForm')),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Forgotpassword);
