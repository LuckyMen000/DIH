import React, { useEffect, useRef } from 'react';
import { Box, Flex, Input, InputGroup, InputRightElement, IconButton, Button } from '@chakra-ui/react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import DIH_Header_Logo from '../../Assets/images/DIH Header Logo.webp';

function Header() {
  const searchInputRef = useRef<HTMLInputElement>(null);  // Ref для поля ввода

  // Обработчик нажатия клавиш для активации поиска
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey && (event.key === 'k' || event.key === 'л')) {
      event.preventDefault();  // Предотвратить стандартное поведение
      searchInputRef.current?.focus();  // Фокус на поле ввода
      console.log('Ctrl+K or Ctrl+Л activated');
    }
  };

  // Подключение и отключение слушателя событий
  useEffect(() => {
    // Добавление слушателя к объекту window для глобальной области видимости
    window.addEventListener('keydown', handleKeyPress);

    // Очистка слушателя
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
        bgGradient="linear(to-r, blue.400, purple.800)"
        overflow="hidden"
    >
      <Flex justify="start" align="center" flex="1">
        <Box as="img" src={DIH_Header_Logo} alt="Logo" h="50px" w="50px" mr={2} />
        <Box fontWeight="bold" fontSize="lg">Digital Innovators Hub</Box>
      </Flex>

      <Flex flex="2" mx={12}>
        <InputGroup>
          <Input ref={searchInputRef} placeholder="Поиск..." bg="white" color="gray.800" _placeholder={{ color: 'gray.500' }} />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} size="md" bg="transparent" _hover={{ bg: 'white' }} />
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Flex justify="end" align="center" flex="1">
        <IconButton aria-label="Change language" icon={<MdLanguage />} size="lg" variant="ghost" mr={2} />
        <IconButton aria-label="Marketplace" icon={<FaShoppingCart />} size="lg" variant="ghost" mr={2} />
        <Button rightIcon={<FaUser />} variant="ghost">Вход</Button>
      </Flex>
    </Box>
  );
}

export default Header;
