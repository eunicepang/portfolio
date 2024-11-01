import { Box, Button, Flex, Input, ChakraProvider, Heading, UnorderedList, ListItem, Link  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function App() {
  return (
    <Box>
      <ChakraProvider>
        <Box
          p={8} 
          bg="purple.100" 
          color="black" 
          textAlign="center" 
          borderRadius="md" 
          maxW="100%" 
          mx="auto" 
          boxShadow="lg"
        >
          <Heading as="h1" size="2xl" fontWeight="bold" mb={4}>
            Eunice Pang
          </Heading>
        </Box>

        <Box
          p={10} 
        >
            <Heading>
              Crowdfunder App
            </Heading>
            <UnorderedList>
              <ListItem>Deployed to Sepolia Testnet</ListItem>
              <ListItem>Transfers ETH from user address to smart contract</ListItem>
              <ListItem>
                <Link href="https://example.com" color="teal.500" isExternal>
                  Link to Project
                </Link>
              </ListItem>
              
            </UnorderedList>
        </Box>
        <Box
          p={10}
        >
            <Heading>
              Staking App
            </Heading>
            <UnorderedList>
              <ListItem>Deployed to Sepolia Testnet</ListItem>
              <ListItem>Users stake ETH and receive RWD tokens based on ERC20 standard</ListItem>
              <ListItem>
                <Link href="https://example.com" color="teal.500" isExternal>
                  Link to Project
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box
            p={10}
          >
            <Heading>
              NFT Minting App
            </Heading>
            <UnorderedList>
              <ListItem>Deployed to Sepolia Testnet</ListItem>
              <ListItem>Users mint an NFT as a proof-of-attendance to events</ListItem>
              <ListItem>
                <Link href="https://example.com" color="teal.500" isExternal>
                  Link to Project
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box
           p={8}>
            <Flex direction="row" justify="center" align="center" gap="4" p="4" >
        <Box w="100px" h="100px" >
          <Link href="https://example.com" color="teal.500" isExternal>
            Resume
          </Link>
        </Box>
        <Box w="100px" h="100px" >LinkedIn</Box>
        <Box w="100px" h="100px" >Item 3</Box>
      </Flex>
          </Box>
      </ChakraProvider>

      
    </Box>
  );
}

export default App;
