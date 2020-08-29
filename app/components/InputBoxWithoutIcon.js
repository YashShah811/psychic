import React from "react";
import { View } from "react-native";
import { Item, Input, Text, Icon } from 'native-base';
import { Layout, Colors } from '../constants';
import { getFontIcon } from '../utils/common';

import appStyles from '../theme/appStyles';

const InputBoxWithoutIcon = ({
  input,
  meta:{ touched, error, warning },
  disabled = false,
  placeholder="Please Enter",
  placeholderTextColor= '#999999',
  keyboardType='default',
  autoCapitalize="none",
  maxLength=100,
  numberOfLines=1,
  spellCheck=false,
  autoCorrect=false,
  secureTextEntry=false,
  style={},
  labelType='regular',
  icon='',
  iconStyle={},
}) => {
  let hasError= false;
  let iconImg = getFontIcon(icon,iconStyle)||<Icon/>;
  if(touched && error){
    hasError= true;
  }
  if(disabled){

  }else{
    return(
      <View style= {appStyles.itemInput}>
      <Item error= {hasError}>
        <Input 
          {...input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={[appStyles.textboxwithouticon,style]}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          spellCheck={spellCheck}
          autoCorrect={autoCorrect}
          returnKeyLabel='Done' 
          returnKeyType='done' 
          secureTextEntry={secureTextEntry}
          value={input.value}
        />
        
      </Item>
      {hasError ? <Text style={appStyles.inputError}>{error}</Text> : <Text  style={appStyles.inputnoError} />}
      </View>
      )
  }
}
export default InputBoxWithoutIcon;