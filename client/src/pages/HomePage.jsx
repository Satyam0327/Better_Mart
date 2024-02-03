import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import HomeCarousel1 from "../components/Carousel/HomeCarousel1";

const HomePage = () => {
  const image1 = [
    {
      text: "shop new arrivals",
      img: "https://images.ctfassets.net/5de70he6op10/4MfksXkQhC9YWJxET6247m/3e5ea7b30338b68f5f513fcb0a6c727c/6UP_NewArrivals.jpg?w=856&q=80&fm=webp",
    },
    {
      text: "shop skirts",
      img: "https://images.ctfassets.net/5de70he6op10/3DsMn29jVovKMfYwOOo3H5/fee9dd32f6b04735234097a152d98646/6UP_Skirts.jpg?w=856&q=80&fm=webp",
    },
    {
      text: "shop shoes",
      img: "https://images.ctfassets.net/5de70he6op10/50hV2n15HQPwLZT0J9EoAF/5b9ffbbe5acf6280805210cc4cbe1ae4/6UP_Shoes.jpg?w=856&q=80&fm=webp",
    },
    {
      text: "shop dresses",
      img: "https://images.ctfassets.net/5de70he6op10/6U1u2B6KWtGqFHdH99XgUW/32687a17d03dd1d8926b8f12c81cd7be/6UP_Dresses.jpg?w=856&q=80&fm=webp",
    },
    {
      text: "shop new accessories",
      img: "https://images.ctfassets.net/5de70he6op10/6fHdf6hZt82wgFbmRIEGan/d4ac6fd4a3bd3a25f18c23ad392d69ef/6UP_NewAccessories.jpg?w=856&q=80&fm=webp",
    },
    {
      text: "shop tops",
      img: "https://images.ctfassets.net/5de70he6op10/75ZPqT2FH1d40ogSLKj1cD/8aa17217c14653cb853d13a31f77ca54/6UP_Tops.jpg?w=856&q=80&fm=webp",
    },
  ];

  const image2 = [
    {
      text: "shop shoes",
      img: "https://images.ctfassets.net/5de70he6op10/1tvJoT22ik3nvINpJ5aFDI/232f2d65245506153bed409796be797a/RR_Shoes.jpg?w=856&q=80&fm=webp",
    },
    {
      text: "shop jeans",
      img: "https://images.ctfassets.net/5de70he6op10/598MH2NP5s3cLDQ8UiNbSG/d1668680dd51f4addac5834086b03d64/RR_Jeans.jpg?w=856&q=80&fm=webp",
    },
    {
      text: "shop candles",
      img: "https://images.ctfassets.net/5de70he6op10/6gih0n8sL6Nei296yMBw1g/8b3197b8943cd443c792f1d6458b3007/RR_Candles.jpg?w=856&q=80&fm=webp",
    },
  ];

  const image3 = [
    {
      text: "shop gift bundles",
      heading: "new! BUNDLE with JOY",
      description:
        "Save time (and $$$) with curated gift sets for everyone on your list.",
      img: "https://images.ctfassets.net/5de70he6op10/4Uq666sNSwxPJkwfkNekwE/229e99ddfcc9ed0f9fb4c1d0d3f63df9/MTE_1.jpg?w=856&q=80&fm=webp",
    },
    {
      text: "shop fragrance gifts,more",
      heading: "The Holiday Beauty Shop",
      description: "Ready, set, let's glow gifting!",
      img: "https://images.ctfassets.net/5de70he6op10/5HxUPMjRhRmYBhDzG7lYb8/8bd8da754c35f286701c479b6fb4885e/LS_MTE_2.jpg?w=856&q=80&fm=webp",
    },
    {
      text: "shop BHLDN weddings",
      heading: "THE ART OF THE DRESS",
      description:
        "Introducing a lovingly curated collection of sculptural silhouettes, enlightened details, and everlasting impressions.",
      img: "https://images.ctfassets.net/5de70he6op10/673WCOKnBlUgppuS7WBHzB/fba4ac8902af41c13345308297b6c9f5/MTE_3.jpg?w=856&q=80&fm=webp",
    },
  ];

  return (
    <>
      <Stack w="100%" px={5}>
        <Box position="relative" w="100%" py={5}>
          <Image
            w="100%"
            src="https://images.ctfassets.net/5de70he6op10/6YcDf5MI12J4gw9cOaz9WP/70f858a9574c2e0ff43b2b7bdc6e61af/LS_M4.jpg?w=2641&q=80&fm=webp"
          />
          <Button
            position="absolute"
            top="95%"
            left="50%"
            transform="translate(-50%,-150%)"
            borderRadius="none"
            fontSize={["10px"]}
          >
            shop dresses
          </Button>
        </Box>
        <Box>
          <HomeCarousel1 />
        </Box>
        <SimpleGrid columns={[1, 2, 3, 3]} spacing={10} py={5}>
          {image1.map((image, i) => (
            <Box key={i} position="relative" w="100%">
              <Image src={image.img} alt="home img" w="100%" />
              <Button
                position="absolute"
                top="95%"
                left="50%"
                transform="translate(-50%,-90%)"
                borderRadius="none"
              >
                {image.text}
              </Button>
            </Box>
          ))}
        </SimpleGrid>
        <Box position="relative" py={5}>
          <Image
            w="100%"
            h="auto"
            src="https://images.ctfassets.net/5de70he6op10/1VNWTi2TIhqy5CeUy5jKZ2/2ce96ec76374b5244e92d2c954788986/M2_Apparel.jpg?w=2648&q=80&fm=webp"
          />

          <Button
            position="absolute"
            top="95%"
            left="50%"
            transform="translate(-50%,-150%)"
            borderRadius="none"
            fontSize={["10px"]}
          >
            explore the edit
          </Button>
        </Box>
        <SimpleGrid columns={[1, 2, 3, 3]} spacing={10} py={5}>
          {image2.map((image, i) => (
            <Box key={i} position="relative">
              <Image src={image.img} alt="home img" w="100%" />
              <Button
                position="absolute"
                top="95%"
                left="50%"
                transform="translate(-50%,-90%)"
                borderRadius="none"
                fontSize={["10px"]}
              >
                {image.text}
              </Button>
            </Box>
          ))}
        </SimpleGrid>
        <Stack>
          <Heading fontSize="2xl" fontWeight="hairline" align="center" mt={10}>
            More to Explore
          </Heading>
          <Divider />
          <SimpleGrid columns={[1, 2, 3, 3]} spacing={10} py={5}>
            {image3.map((item, i) => (
              <VStack align="left" key={i}>
                <Image src={item.img} alt="home img" w="100%" />
                <Text fontSize="xl">{item.heading}</Text>
                <Text>{item.description}</Text>
                <Link color="teal.500" href="#">
                  {item.text}
                </Link>
              </VStack>
            ))}
          </SimpleGrid>
          <HStack w="100%" py={5}>
            <Text align="center" w="100%">
              * Exclusions apply
              <Link color="teal.500" href="#" px="5px">
                See details.
              </Link>
            </Text>
          </HStack>
        </Stack>
      </Stack>
    </>
  );
};

export default HomePage;
