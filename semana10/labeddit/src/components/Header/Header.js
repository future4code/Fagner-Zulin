import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  // MenuItem,
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import palette from '../../constants/paletteColors';
import { gotToLoginPage } from '../../routers/coordinate';
import { deleteToken } from '../../utils/localStorageFunctions';
import Title from '../StyledComponents/Title';
import { ContainerHeader } from './header.styled';

export default function Header() {
  const history = useHistory();
  const [isMobile] = useMediaQuery('(max-width: 575.98px)');

  const logout = () => {
    deleteToken();
    gotToLoginPage(history);
  };

  return (
    <ContainerHeader>
      <Title fs="2em">LabEddit</Title>

      {isMobile && (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
          />
          <MenuList
            bg={palette.lightBlue}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Button colorScheme="cyan">Criar um novo post</Button>
            <MenuDivider />
            <Button colorScheme="red" onClick={logout}>
              Logout
            </Button>
          </MenuList>
        </Menu>
      )}

      {!isMobile && (
        <div>
          <Button colorScheme="cyan" mr="3">
            Criar um novo post
          </Button>
          <Button colorScheme="red" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </ContainerHeader>
  );
}
