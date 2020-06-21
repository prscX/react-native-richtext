/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { RNRichText } from '@prscx/react-native-richtext';

const HEADING =
        "<h1>Heading 1</h1>" +
                "<h2>Heading 2</h2>" +
                "<h3>Heading 3</h3>" +
                "<h4>Heading 4</h4>" +
                "<h5>Heading 5</h5>" +
                "<h6>Heading 6</h6>"
const BOLD = "<b>Bold</b><br>"
const ITALIC = "<i style=\"color:darkred\">Italic</i><br>"
const UNDERLINE = "<u style=\"color:lime\">Underline</u><br>"
const STRIKETHROUGH = "<s style=\"color:#ff666666\" class=\"test\">Strikethrough</s><br>" // <s> or <strike> or <del>
const ORDERED = "<ol style=\"color:green\"><li>Ordered</li><li>should have color</li></ol>"
const ORDERED_WITH_START = "<h4>Start in 10 List:</h4>" +
        "<ol start=\"10\">\n" +
        "    <li>Ten</li>\n" +
        "    <li>Eleven</li>\n" +
        "    <li>Twelve</li>\n" +
        "</ol>"
const ORDERED_REVERSED = "<h4>Reversed List:</h4>" +
        "<ol reversed>\n" +
        "    <li>Three</li>\n" +
        "    <li>Two</li>\n" +
        "    <li>One</li>\n" +
        "</ol>"
const ORDERED_REVERSED_WITH_START = "<h4>Reversed Start in 10 List:</h4>" +
        "<ol reversed start=\"10\">\n" +
        "    <li>Ten</li>\n" +
        "    <li>Nine</li>\n" +
        "    <li>Eight</li>\n" +
        "</ol>"
const ORDERED_REVERSED_NEGATIVE_WITH_START = "<h4>Reversed Start in 1 List:</h4>" +
        "<ol reversed start=\"1\">\n" +
        "    <li>One</li>\n" +
        "    <li>Zero</li>\n" +
        "    <li>Minus One</li>\n" +
        "</ol>"
const ORDERED_REVERSED_WITH_START_IDENT = "<h4>Reversed Start in 6 List:</h4>" +
        "<ol reversed>" +
        "   <li>Six</li>" +
        "   <li>Five</li>" +
        "   <li>Four</li>" +
        "   <li>Three</li>" +
        "   <li>Two</li>" +
        "   <li>One<ol>" +
        "   <li>One</li>" +
        "   <li>Two</li>" +
        "   <li>Three</li>" +
        "   <li>Four</li>" +
        "   <li>Five</li>" +
        "   <li>Six</li>" +
        "   <li>Seven</li> " +
        "   </ol></li></ol>"
const LINE = "<hr />"
const UNORDERED = "<ul><li style=\"color:darkred\">Unordered</li><li>Should not have color</li></ul>"
const QUOTE = "<blockquote>Quote</blockquote>"
const LINK = "<a href=\"https://github.com/wordpress-mobile/WordPress-Aztec-Android\">Link</a><br>"
const UNKNOWN = "<iframe class=\"classic\">Menu</iframe><br>"
const COMMENT = "<!--Comment--><br>"
const COMMENT_MORE = "<!--more--><br>"
const COMMENT_PAGE = "<!--nextpage--><br>"
const HIDDEN =
        "<span></span>" +
                "<div class=\"first\">" +
                "    <div class=\"second\">" +
                "        <div class=\"third\">" +
                "            Div<br><span><b>Span</b></span><br>Hidden" +
                "        </div>" +
                "        <div class=\"fourth\"></div>" +
                "        <div class=\"fifth\"></div>" +
                "    </div>" +
                "    <span class=\"second last\"></span>" +
                "</div>" +
                "<br>"
const GUTENBERG_CODE_BLOCK = "<!-- wp:core/image {\"id\":316} -->\n" +
        "<figure class=\"wp-block-image\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png\" alt=\"\" />\n" +
        "  <figcaption>The WordPress logo!</figcaption>\n" +
        "</figure>\n" +
        "<!-- /wp:core/image -->"
const PREFORMAT =
        "<pre>" +
                "when (person) {<br>" +
                "    MOCTEZUMA -> {<br>" +
                "        print (\"friend\")<br>" +
                "    }<br>" +
                "    CORTES -> {<br>" +
                "        print (\"foe\")<br>" +
                "    }<br>" +
                "}" +
                "</pre>"
const CODE = "<code>if (value == 5) printf(value)</code><br>"
const IMG = "[caption align=\"alignright\"]<img src=\"https://examplebloge.files.wordpress.com/2017/02/3def4804-d9b5-11e6-88e6-d7d8864392e0.png\" />Caption[/caption]"
const EMOJI = "&#x1F44D;"
const NON_LATIN_TEXT = "测试一个"
const LONG_TEXT = "<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
const VIDEO = "[video src=\"https://examplebloge.files.wordpress.com/2017/06/d7d88643-88e6-d9b5-11e6-92e03def4804.mp4\"]"
const AUDIO = "[audio src=\"https://upload.wikimedia.org/wikipedia/commons/9/94/H-Moll.ogg\"]"
const VIDEOPRESS = "[wpvideo OcobLTqC]"
const VIDEOPRESS_2 = "[wpvideo OcobLTqC w=640 h=400 autoplay=true html5only=true3]"
const QUOTE_RTL = "<blockquote>לְצַטֵט<br>same quote but LTR</blockquote>"

const EXAMPLE =
        IMG +
                HEADING +
                BOLD +
                ITALIC +
                UNDERLINE +
                STRIKETHROUGH +
                ORDERED +
                ORDERED_WITH_START +
                ORDERED_REVERSED +
                ORDERED_REVERSED_WITH_START +
                ORDERED_REVERSED_NEGATIVE_WITH_START +
                ORDERED_REVERSED_WITH_START_IDENT +
                LINE +
                UNORDERED +
                QUOTE +
                PREFORMAT +
                LINK +
                HIDDEN +
                COMMENT +
                COMMENT_MORE +
                COMMENT_PAGE +
                CODE +
                UNKNOWN +
                EMOJI +
                NON_LATIN_TEXT +
                LONG_TEXT +
                VIDEO +
                VIDEOPRESS +
                VIDEOPRESS_2 +
                AUDIO +
                GUTENBERG_CODE_BLOCK +
                QUOTE_RTL


const App: () => React$Node = () => {
  let _onPress = () => {
    RNRichText.Show({
      title: 'Editor',
      content: EXAMPLE,
      onDone: (content) => {
        console.log('on done: ' + content);
      }
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={_onPress}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
