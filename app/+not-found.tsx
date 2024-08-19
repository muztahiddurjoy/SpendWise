import {Box, Button, Text} from "native-base";

export default function NotFoundScreen() {
  return (
    <>
      <Box minH="100%" w="100%" display="flex" alignItems="center" justifyContent="center">
        <Text _dark={{color:"white"}} color="white">This Page Does Not Exist</Text>
        <Button size="sm" variant='solid' bg="primary.500" mt={3} >Back to Home</Button>
      </Box>
    </>
  );
}
