import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Item = ({ item, onPressNavigationBiography, onPressNavigationRaceResult }) => {

    const { givenName, familyName } = item

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.cell, styles.cellTextName]} onPress={onPressNavigationBiography}>
                <Text numberOfLines={1}>{`${givenName} ${familyName}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cell, styles.cellCenter]} onPress={onPressNavigationRaceResult}>
                <Text style={styles.cellResultText}>Result</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cell: {
        paddingVertical: 10,
        borderColor: "#20232a",
        width: '50%',
        borderWidth: 1
    },
    cellTextName: {
        paddingLeft: 5
    },
    cellCenter: {
        alignItems: 'center'
    },
    cellResultText: {
        color: '#2874A6'
    }
})

export default Item