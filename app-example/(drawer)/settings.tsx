import { StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function SettingsTab() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={<Ionicons size={310} name="settings" style={styles.headerImage} />}
        >
            <Text>Test</Text>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
})