import React from 'react'
import { Icon } from 'native-base';
import Strings from './Strings';

export default {
  Title: 'PushBase',
  SignInStack : {
    route: 'SignInStack'
  }, 
  DrawerStack : {
    route: 'DrawerStack'
  },
  Home : {
    route: 'Home',
    icon:'home',
    label: Strings.home,
  },
  Newsfeed : {
    route: 'Newsfeed',
    icon:'settings',
    label: Strings.settings,
  },
  NewsDetail : {
    route: 'NewsDetail',
    icon:'settings',
    label: Strings.settings,
  },
  Horoscope : {
    route: 'Horoscope',
    icon:'settings',
    label: Strings.settings,
  },
  Messages : {
    route: 'Messages',
    icon:'settings',
    label: Strings.messages,
  },
  Chat : {
    route: 'Chat',
    icon:'settings',
    label: Strings.Chat,
  },
  Settings : {
    route: 'Settings',
    icon:'settings',
    label: Strings.settings,
  },

  SignOutStack : {
    route: 'SignOutStack'
  }, 
  SignIn : {
    route: 'SignIn'
  }, 
  SignUp : {
    route: 'SignUp'
  }, 
  ForgotPassword : {
    route: 'ForgotPassword'
  }, 
};