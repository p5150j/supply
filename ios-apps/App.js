import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Picker } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class App extends Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert(
      'Data.. and success shit!',
      JSON.stringify(data)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 300, width: 300 }}
            />
        }

        <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 300 }}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="0208b948bc11a5b07c35a919b32fa68017b7e7ce702fcfd03be35454359ffbe4e6" value="0208b948bc11a5b07c35a919b32fa68017b7e7ce702fcfd03be35454359ffbe4e6" />
        <Picker.Item label="022a9126fe0b4f6f2f608feccd8547d1267ba740d15490e59aca26deb197e283a3" value="022a9126fe0b4f6f2f608feccd8547d1267ba740d15490e59aca26deb197e283a3" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
