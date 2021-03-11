import React, { forwardRef, useRef, useImperativeHandle, useState, useEffect } from 'react';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableHighlight,
    ScrollView, PermissionStatus,
    Modal, PermissionsAndroid
} from 'react-native';
import Voice from '@react-native-community/voice';
import mike from "../assets/imgs/microphone.png";
import cancel from "../assets/imgs/cancel.png";
import Constants from "../utility/Constant";

const SpeechText = forwardRef((props, ref) => {
    const { visible, submit, close } = props;
    const [results, setResults] = useState([]);
    const [started, setStarted] = useState(false);
    const [partialResults, setPartialResults] = useState([]);
    const [pitch, setPitch] = useState('');
    const [error, setError] = useState('');
    const [end, setEnd] = useState('');

    useImperativeHandle(
        ref,
        () => ({
            start() {
                _startRecognizing();
            }
        }),
    )

    useEffect(() => {

        function onSpeechStart(e) {
            console.log('onSpeechStart: ', e);
            setStarted(true)
        };

        function onSpeechResults(e) {
            console.log('onSpeechResults: ', e);
            setResults(e.value)
        };

        function onSpeechPartialResults(e) {
            console.log('onSpeechPartialResults: ', e);
            setPartialResults(e.value)
        };

        function onSpeechVolumeChanged(e) {
            console.log('onSpeechVolumeChanged: ', e);
            setPitch(e.value)
        };

        function onSpeechEnd(e) {
            console.log('onSpeechEnd: ', e);
            // setPitch(e.value)
        };

        function onSpeechError(e) {
            console.log('onSpeechError: ', e);
            // setPitch(e.value)
        };

        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const _startRecognizing = async () => {
        setPitch('')
        setError('')
        setStarted('')
        setResults([])
        setPartialResults([])
        setEnd('')
        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error(e);
        }
    };

    const _stopRecognizing = async () => {
        //Stops listening for speech
        try {
            await Voice.stop();
            setStarted(false);
        } catch (e) {
            console.error(e);
        }
    };

    const _cancelRecognizing = async () => {
        //Cancels the speech recognition
        try {
            await Voice.cancel();
            setStarted(false);
            setPartialResults([]);
            close();
        } catch (e) {
            console.error(e);
        } error(e);
    }

    const _destroyRecognizer = async () => {
        //Destroys the current SpeechRecognizer instance
        try {
            await Voice.destroy();
        } catch (e) {
            console.error(e);
        }
        setPitch('')
        setError('')
        setStarted('')
        setResults([])
        setPartialResults([])
        setEnd('')
    };

    return (
        <Modal visible={visible} transparent={true}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.instructions}>
                        Press mike to record your voice
          </Text>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
                        {partialResults.map((result, index) => {
                            return (
                                <Text
                                    key={`partial-result-${index}`}
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 16,
                                        color: "black",
                                        marginBottom: 1,
                                        fontWeight: '500',
                                    }}>
                                    {result}
                                </Text>
                            );
                        })}
                    </ScrollView>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'space-between',
                            position: 'absolute',
                            bottom: 0,
                        }}>

                        <TouchableHighlight
                            onPress={_cancelRecognizing}
                            style={{ flex: 1, backgroundColor: 'red' }}>
                            <Text style={styles.action}>Cancel</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                if (started) {
                                    _stopRecognizing();
                                } else {
                                    _startRecognizing();
                                }
                            }}
                            style={{ margin: 20 }}>
                            <Image
                                style={styles.button}
                                source={started ? cancel : mike}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                            _destroyRecognizer();
                            if (!partialResults.length) {
                                setPartialResults(["Please record something to submit the feedback"]);
                                return;
                            } else {
                                setStarted(false);
                                submit(partialResults);
                                _stopRecognizing();
                            }
                        }}
                            style={{ flex: 1, backgroundColor: Constants.color }}>
                            <Text style={styles.action}>SEARCH</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
});

export default SpeechText;

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    action: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        paddingVertical: 8,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    stat: {
        textAlign: 'center',
        color: '#B0171F',
        marginBottom: 1,
        marginTop: 30,
    },
});