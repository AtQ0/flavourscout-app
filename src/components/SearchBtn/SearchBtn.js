
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

export default function SearchBtn(props) {

    const navigation = useNavigation();

    function onPressOfSearchIcon() {
        navigation.navigate('SearchScreen')
    }

    return (
        <Pressable

            onPress={onPressOfSearchIcon}
            style={styles.searchIconWrapper}
        >
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <Circle cx="11" cy="11" r="8" />
                <Line x1="21" y1="21" x2="16.65" y2="16.65" />
            </Svg>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    searchIconWrapper: {
        padding: 8,
    },
});
