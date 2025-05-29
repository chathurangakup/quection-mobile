import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function Navbar1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(Dimensions.get('window').width < 768);

  const handlePress = (label: string) => {
    console.log(`${label} clicked`);
    setMenuOpen(false);
  };

  const navItems = [
    'AEON',
    'Showcase',
    'Docs',
    'Blog',
    'Analytics',
    'Commerce',
    'Templetes',
    'Enterprice',
  ];

  // 🧠 Listen for screen resize
  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = Dimensions.get('window').width;
      setIsMobile(screenWidth < 768);
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);

    // Cleanup listener on unmount
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.navbar}>
{isMobile ? (
  <View style={styles.mobileIconsContainer}>
    <TouchableOpacity onPress={() => console.log('Search clicked')}>
      <Ionicons name="search" size={24} color="#808080" style={{ marginRight: 10 }} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
      <Ionicons
        name={menuOpen ? 'close' : 'menu'}
        size={28}
        color="#808080"
      />
    </TouchableOpacity>
  </View>
): (
        <>
          <View style={styles.navLinks}>
            {navItems.map((label, index) => (
              <TouchableOpacity key={index} onPress={() => handlePress(label)}>
                <Text style={styles.navText}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search..."
              keyboardType="default"
            />
          </View>
        </>
      )}

      {/* Drawer for mobile */}
      <Modal visible={menuOpen} animationType="slide" transparent>
        <TouchableOpacity
          style={styles.drawerOverlay}
          activeOpacity={1}
          onPress={() => setMenuOpen(false)}
        >
          <View style={styles.drawer}>
            <ScrollView>
              {navItems.map((label, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(label)}
                  style={styles.drawerItem}
                >
                  <Text style={styles.drawerText}>{label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default Navbar1;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    color: '#808080',
    marginRight: 15,
  },
  searchContainer: {
    flexShrink: 1,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
    minWidth: 150,
  },
  drawerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-start',
  },
  drawer: {
    backgroundColor: '#fff',
    width: '70%',
    padding: 20,
    paddingTop: 50,
    elevation: 5,
  },
  drawerItem: {
    paddingVertical: 10,
  },
  drawerText: {
    fontSize: 16,
    color: '#333',
  },
  mobileIconsContainer: {
  flexDirection: 'row',
  alignItems: 'center',
   marginLeft: 'auto',

},
});
