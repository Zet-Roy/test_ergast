import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Row = ({ name, value }) => {
    return (
        <View style={styles.row}>
            <View style={styles.cell}>
                <Text>{name}</Text>
            </View>
            <View style={styles.cell}>
                <Text>{value}</Text>
            </View>
        </View>
    )
}

const Item = ({ item }) => {

    const { season, raceName, Results } = item
    const { number, position, laps, grid, status } = Results[0]

    return (
        <View style={styles.container}>
            <View style={styles.infoWrap}>
                <Text>{season} {raceName}</Text>
            </View>
            <View style={styles.resultInfoWrap}>
                <Row name={"Pos"} value={position} />
                <Row name={"No"} value={number} />
                <Row name={"Laps"} value={laps} />
                <Row name={"Grind"} value={grid} />
                <Row name={"Status"} value={status} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#20232a",
        borderWidth: 1
    },
    resultInfoWrap: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    row: {
        alignItems: 'center'
    },
    cell: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        borderColor: "#20232a",
        borderWidth: 1
    }
})

export default Item