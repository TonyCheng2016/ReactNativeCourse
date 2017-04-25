import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class Alert extends React.Component {
    render() {
        return (
            <View>

                <TouchableHighlight style={styles.wrapper}
                    onPress={() => Alert.alert(
                        'Alert',
                        '確定送出此訊息?',
                        [
                            { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                            { text: 'OK', onPress: () => console.log('OK Pressed!') },
                        ]
                    )}>

                    <View style={styles.button}>
                        <Text>Alert with two buttons</Text>
                    </View>

                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
        alignItems: 'center'
    },
});
export default Alert;