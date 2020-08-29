import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../constants/';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  statusBar:{
    flex: 1,
    height:Layout.statusBarHeight,
    backgroundColor: Colors.primary,
  },
  headerbg:{
    backgroundColor: Colors.primary,
  },
  commonHeader: {
    backgroundColor:'transparent', 
  },
  row: {
    flex: 1,
  },
  rowXYcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowXcenter: {
    flex: 1,
    alignItems: 'center'
  },
  rowYcenter: {
    flex: 1,
    justifyContent: 'center',
  },
  fontRegular:{
    fontFamily: 'Font-Regular',
  },
  btnSecontary:{
    backgroundColor: Colors.secondary,
    fontFamily: 'Font-Regular',
  },
  content:{
    backgroundColor: Colors.white, paddingTop: Layout.indent,
  },
  contentBg:{
    backgroundColor: Colors.white,
    padding: Layout.indent,
    flex:1
  },

  setLanguage: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius:0
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  introLangBtn:{
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '50%',
    marginLeft: '25%',
    marginBottom: Layout.halfIndent,
  },
  introLangBtnActive:{
    backgroundColor: Colors.secondary,
  },
  // Slider
  slide:{
    backgroundColor: Colors.primary,
    flex:1
  },
  slideTitle:{
    color: Colors.white,
    fontSize: 30,
    textAlign:'center',
  },
  slideText:{
    textAlign:'center',
    color: Colors.lightWhite
  },
  slideImage: {
    width: 300,
    height: 300,
  },
  slideIcon: {
    backgroundColor: 'transparent', 
    color: Colors.white
  },
  buttonCircle: {
    width: 40,
    height: 40,
    color: Colors.white,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDotStyle:{
    backgroundColor: Colors.secondary
  },

  menuBtn:{
    padding: Layout.indent
  },
  drawerList:{
    margin:0,
    paddingLeft:0
  },
  drawerItem:{
    margin:0,
    padding:0
  },
  drawerIcon:{
    paddingRight: Layout.indent,
  },
  drawerText:{
    fontSize: 17, 
    fontWeight: '600', 
    color: Colors.black,
    paddingLeft: Layout.indent
  },
  profileName:{
    color: Colors.white,
    fontSize: 22
  },
  profileEmail:{
    color: Colors.lightWhite,
    fontSize: 14
  },
  activeDrawerItem:{
    // backgroundColor: Colors.primaryLight
  },
  logo: {

  },
  headerLogo:{
    height: 50, 
    width: 160
  },
  loaderLogo: {
    height: 68, 
    width: 220
  },
  loginLogo: {
    marginTop: Layout.sixIndent,
    height: 60, 
    width: 445
  },
  loginMidText:{
    fontSize: 16,
    fontFamily: 'Font-Light',
    marginLeft: 40,
    marginRight: 40,
    marginTop: -Layout.doubleIndent,
    color:Colors.lightWhite
  },
  loginTitle:{
    fontSize: 30,
    color:Colors.white,
    marginLeft: Layout.indent,
    textAlign:'center',
    fontFamily: 'Font-Regular',
  },
  loginBack:{
    marginTop:Layout.doubleIndent,
    justifyContent:'flex-start',
  },
  loginBackcustom:{
    marginTop:Layout.Indent,
    justifyContent:'flex-start',
  },
  loginBackIcon:{
    color: Colors.white
  },

  // Input
  inputError:{
    color: Colors.red,
    top:0, left:20, height:15,
    fontSize:12
  },
  inputnoError:{
    height:0,
  },
  textbox:{
    marginTop:15,
    color: Colors.white,
    width:100,
    paddingLeft:Layout.indent,
    paddingRight:Layout.indent,
    fontFamily: 'Font-Regular',
    fontSize:14
  },  
  textboxwithouticon:{
    marginTop:10,
    color:'#000000',
    width:100, paddingLeft:15,
    fontSize:15,
  },
  boldfonts: {
    fontWeight:'bold', fontSize:15,
  },
  trademark: {
    fontSize:11, justifyContent:'flex-start',
  },

//custom footer css
  customfooterBg: {
    backgroundColor:'#EDEDED', height:60, paddingTop:10, paddingLeft: Layout.indent, paddingRight: Layout.indent,
  },
  maincontent: { width: Layout.window.width, height: Layout.window.height },
  icontitle: {
    fontSize:9, paddingTop:3,
  },
  footericon: {
    width:32, height:30, color:'#444444', justifyContent:'center',textAlign:'center',
  },
  footericonplus: {
    width:68, height:68, marginTop:-30,
  },
  titlewidth: {width:200},
  listitemtouch: {flex:1, flexDirection:'row'},
});