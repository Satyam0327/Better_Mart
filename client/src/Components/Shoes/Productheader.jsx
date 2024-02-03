import { Center, Wrap, WrapItem } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import React from "react";

const Productheader = () => {
  return (
    <Center margin="auto" display={["none", "none", "flex", "flex"]}>
      <Wrap mt={10} marginBottom="1rem">
        <WrapItem>
          <Center w="220px" h="50px" bg="red.200">
            <Link to="/products">EMBELLISHED SHOES</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="50px" bg="green.200">
            <Link to="/products">SNEAKERS</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="50px" bg="tomato">
            <Link to="/products">Heels & Wedges</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="50px" bg="blue.200">
            <Link to="/products">COZY STYLES</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="50px" bg="blue.200">
            <Link to="/products">LEATHER BOOTS</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="50px" bg="blue.200">
            <Link to="/products">JEFERY CAMBELL</Link>
          </Center>
        </WrapItem>
      </Wrap>
    </Center>
  );
};

export default Productheader;
