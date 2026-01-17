import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming Expo environment
import { getIconByType } from '../utils/Icons';

const NotificationItem = ({ item }) => {
    const { icon, backgroundColor, iconColor } = getIconByType(item.type);

    return (
        <View style={[styles.container, { backgroundColor: item.isRead ? '#FFFFFF' : '#eef4ff' }]}>
            <View style={styles.iconContainer}>
                {/* Circle background isn't strictly in the util, but we can use the color */}
                {/* The image shows a solid circle with an icon inside. */}
                {/* We'll make a circle view. */}
                <View style={[styles.circle, { backgroundColor: '#dceaff' }]}>
                    <MaterialIcons name={icon} size={24} color={iconColor} />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {item.description}
                </Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        alignItems: 'flex-start',
    },
    iconContainer: {
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 4, // Align slightly with text if needed
    },
    circle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
        lineHeight: 20,
    },
    time: {
        fontSize: 12,
        color: '#888',
    },
});

export default NotificationItem;
