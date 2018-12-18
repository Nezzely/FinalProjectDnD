import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo";

//TODO: Make this screen displaying all the data that a NPC has
export default class NPCScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={["#348AC7", "#7474BF"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Text style={styles.headerText}>Rand al'Thor</Text>
          <Image
            style={styles.Picture}
            source={{
              uri: "https://i.stack.imgur.com/sO7Ms.jpg?s=328&g=1"
            }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.Text}>
              <Text>
                ----Stats---- {"\n"} Dexterity: 14{"\n"}Charisma: 12{"\n"}
                Constitution: 12
                {"\n"}Intelligence: 10{"\n"}Wisdom: 10{"\n"}Strength: 15{"\n\n"}
                ----SavingThrows---- {"\n"}Armor Rating: 12{"\n"}Fortitude: 13
                {"\n"}
                Will: 11{"\n"}Reflex: 12
              </Text>
            </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              Description: He has blue-gray eyes and dark reddish, unruly hair
              hanging just past his ears. Rand has the typical tall, broad
              shouldered Aiel physique, although he is more slender and not as
              heavily built as his friend Perrin. He is strong and muscular from
              years of arduous farm work, archery training, sword practice,
              fighting and training with the Aiel.{" "}
            </Text>
          </View>
        </View>
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
    alignItems: "center",
    marginTop: 150
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  Picture: {
    width: 100,
    height: 100
  },
  Text: {
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "serif",
    color: "white",
    fontSize: 14,
    width: 300,
    height: 300
  },
  headerText: {
    fontFamily: "serif",
    color: "white",
    fontSize: 18
  }
});
