import { Box, Container, Heading, Image, Text, Button, VStack, Link } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading mb={2}>SHEGLAM Brows On Demand 2-In-1 Brow Pencil - Chocolate</Heading>
          <Image src="https://images.unsplash.com/photo-1553452118-621e1f860f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTSEVHTEFNJTIwQnJvd3MlMjBPbiUyMERlbWFuZCUyMDItSW4tMSUyMEJyb3clMjBQZW5jaWwlMjAtJTIwQ2hvY29sYXRlfGVufDB8fHx8MTcxNDQwNzM2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="SHEGLAM Brow Pencil" />
          <Text mt={4}>Experience the ultimate in eyebrow convenience with the SHEGLAM Brows On Demand 2-In-1 Brow Pencil. This Chocolate shade is perfect for creating natural and defined brows. Waterproof, sweat-proof, and anti-oil properties ensure your makeup stays flawless all day.</Text>
          <Text mt={2} fontWeight="bold">
            Price: $12.99
          </Text>
          <Button rightIcon={<FaShoppingCart />} colorScheme="teal" mt={4}>
            Add to Cart
          </Button>
        </Box>
        <Box>
          <Text fontSize="lg" mt={2}>
            Discover more amazing products on{" "}
            <Link href="http://api-shein.shein.com/h5/sharejump/appjump?link=VfNkrc7zBsB&localcountry=LB&url_from=GM7507548790084997120" isExternal color="teal.500">
              SHEIN.com
            </Link>
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
