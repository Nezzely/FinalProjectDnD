import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image
} from "react-native";
import { LinearGradient } from "expo";

export default class CampaignScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  NextScreenTemp = () => {
    //console.log("Campaign: " + obj.item.name);
    this.props.navigation.navigate("Event");
  };
  renderSectionHeader = ({ section, index }) => {
    return <Text style={styles.campaignTitleText}>{section.title}</Text>;
  };

  renderItem = obj => {
    //TODO: Replace the onPress function of the
    //TouchableOpacity with one passed in from this.props
    return (
      <TouchableOpacity
        onPress={() => {
          this.NextScreenTemp();
        }}
      >
        <View style={styles.campaignItemView}>
          <Image
            style={styles.campaignPicture}
            source={{
              uri: obj.item.image
            }}
          />
          <Text style={styles.campaignTitleText}>{obj.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <SectionList
          sections={[
            {
              title: "Events",
              data: [
                {
                  name: "Parade",
                  image:
                    "http://media.wizards.com/2016/images/daily/cardart_KLD_Commencement-of-Festivities.jpg"
                }
              ]
            },
            {
              title: "Characters",
              data: [
                {
                  name: "Fighter",
                  image:
                    "https://i.pinimg.com/236x/6d/48/82/6d48821aa141c6a5a4c688782a2acdf9.jpg"
                },
                {
                  name: "Witch",
                  image:
                    "https://4.bp.blogspot.com/-RfY-giZUcv4/W8mHmaPVSJI/AAAAAAAAKQ0/SKjFrIJEn94Zll5uMlfRl9n1kDKK5LsbwCLcBGAs/s1600/Fantasy%2BWitch.jpg"
                },
                {
                  name: "Archer",
                  image:
                    "https://gamemakerstuff.files.wordpress.com/2018/05/archer1.jpg?w=545"
                },
                {
                  name: "Priest",
                  image:
                    "https://www.wallpaperup.com/uploads/wallpapers/2016/04/14/929276/5214c4c5b170cba1c2be532495a6cdcd-700.jpg"
                }
              ]
            },
            {
              title: "Monsters",
              data: [
                {
                  name: "Goblin",
                  image:
                    "http://www.enworld.org/forum/attachment.php?attachmentid=96037&cid=24&thumb=1&stc=1"
                },
                {
                  name: "Dragon",
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/DnD_Dragon.png/346px-DnD_Dragon.png"
                },
                {
                  name: "Beholder",
                  image:
                    "https://images-na.ssl-images-amazon.com/images/I/51RtIyjmAbL._SX425_.jpg"
                }
              ]
            }
          ]}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    marginTop: 10
  },
  campaignItemView: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: 360,
    marginRight: 50,
    borderColor: "white",
    borderWidth: 2
  },
  campaignPicture: {
    width: 100,
    height: 100
  },
  campaignTitleText: {
    fontFamily: "serif",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    fontSize: 18,
    marginLeft: 30
  }
});
