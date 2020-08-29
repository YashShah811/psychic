import {
  Colors, Layout
}
from'../../constants/';
 export default {
  containernew: {
    flex: 1, alignItems: 'center', backgroundColor: Colors.primary, justifyContent: 'center', width: Layout.window.width, height: Layout.window.height
  }
  ,
  contentarea: {
    paddingLeft: Layout.indent, paddingRight: Layout.indent, alignItems:'center'
  },
  contentareacenter:  {
    paddingLeft: Layout.indent, paddingRight: Layout.indent, alignItems:'center'
  },
  newsfeedbox: { marginRight:0, marginBottom:Layout.indent},
  mainimage: {height: 200,  flexDirection:'row', flex: 1},
  newstitle: { fontSize: 18, padding:Layout.indent, },
  newscontent: {fontSize:16, lineHeight:22, paddingLeft:Layout.indent, paddingRight:Layout.indent},
}
;