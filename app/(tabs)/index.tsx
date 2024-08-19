import {Image, StyleSheet, Platform} from 'react-native';

import {Box, Text, NativeBaseProvider, Button} from "native-base";

export default function HomeScreen() {
  return (
      <Box pt={5} px={3}>
        <Text color="white">Kire mama kemon asos</Text>
        <Button  colorScheme="primary">Kire mama</Button>
      </Box>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
