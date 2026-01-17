export const getIconByType = (type) => {
    switch (type) {
        case 'check':
            return {
                icon: 'check',
                backgroundColor: '#e6f0ff', // Light blue background for check
                iconColor: '#005ce6' // Darker blue for icon
            };
        case 'customer':
            return {
                icon: 'group', // MaterialIcons 'group' looks like people
                backgroundColor: '#e6f0ff',
                iconColor: '#005ce6'
            };
        default:
            return {
                icon: 'info',
                backgroundColor: '#eee',
                iconColor: '#000'
            };
    }
};
