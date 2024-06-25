import React, { useEffect, useRef, useState } from 'react';
import {
  Box, Flex, Input, InputGroup, InputRightElement, IconButton, Button,
  Menu, MenuButton, MenuList, MenuItem, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalCloseButton, ModalBody, useDisclosure
} from '@chakra-ui/react';
import { FaSearch, FaShoppingCart, FaUser, FaTerminal, FaRegCalendarAlt, FaClipboardList, FaRegEdit } from 'react-icons/fa';
import { MdLanguage, MdMoreVert } from 'react-icons/md';
import DIH_Header_Logo from '../../Assets/images/DIH Header Logo.webp';

function Header() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Хуки для управления открытием и закрытием модального окна

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey && (event.key === 'k' || event.key === 'л')) {
      event.preventDefault();
      searchInputRef.current?.focus();
      console.log('Ctrl+K or Ctrl+Л activated');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Box as="header"
        width="full"
        height="80px"
        display="flex"
        alignItems="center"
        px={4}
        color="white"
        bgGradient="white.300"
        overflow="hidden"
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
    >
      <Flex justify="start" align="center" flex="1">
        <Box as="img" src={DIH_Header_Logo} alt="Logo" h="50px" w="50px" mr={2} />
        <Box fontWeight="bold" fontSize="lg" color={'black'}>Digital Innovators Hub</Box>
      </Flex>

      <Flex flex="2" mx={12}>
        <InputGroup>
          <Input ref={searchInputRef} placeholder="Поиск..." bg="white" color="gray.800" _placeholder={{ color: 'gray.500' }} />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} size="md" bg="transparent" _hover={{ bg: 'white' }} />
          </InputRightElement>
        </InputGroup>
        <Box ml={4}>
          <Menu>
          <MenuButton as={Button} rightIcon={<MdMoreVert />} colorScheme="green" bg="green.400"  color="white"  borderRadius="md" _hover={{ bg: "green.500" }}  _active={{ bg: "green.600" }}
          >
          Опубликовать
          </MenuButton>
            <MenuList>
              <MenuItem color={'black'} icon={<FaRegEdit size="20px" />}>Пост</MenuItem>
              <MenuItem color={'black'} icon={<FaRegCalendarAlt size="20px" />}>Мероприятие</MenuItem>
              <MenuItem color={'black'} icon={<FaClipboardList size="20px" />}>Вакансию</MenuItem>
              <MenuItem color={'black'} icon={<FaTerminal size="20px" />}>Технологическую задачу</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      <Flex justify="end" align="center" flex="1">
        <Menu>
          <MenuButton as={IconButton} icon={<MdLanguage />} size="lg" variant="ghost" mr={2}>
            Language
          </MenuButton>
          <MenuList>
            <MenuItem color={'gray.900'}>RU</MenuItem>
            <MenuItem color={'gray.900'}>KZ</MenuItem>
            <MenuItem color={'gray.900'}>EN</MenuItem>
          </MenuList>
        </Menu>
        <IconButton aria-label="Marketplace" icon={<FaShoppingCart />} size="lg" variant="ghost" mr={2} />
        <Button rightIcon={<FaUser />} variant="ghost" onClick={onOpen}>Вход</Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Вход в систему</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Форма для входа пользователя...
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Header;
