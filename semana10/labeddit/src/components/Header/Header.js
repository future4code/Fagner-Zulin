import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import palette from '../../constants/paletteColors';
import { gotToLoginPage } from '../../routers/coordinate';
import { deleteToken } from '../../utils/localStorageFunctions';
import NewPostModal from '../NewPostModal/NewPostModal';
import Title from '../StyledComponents/Title';
import { ContainerHeader } from './header.styled';

export default function Header({ isToUpdate }) {
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
            bg={palette.darkBlue}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <NewPostModal isToUpdate={isToUpdate} />
            <MenuDivider />
            <Button colorScheme="red" onClick={logout}>
              Logout
            </Button>
          </MenuList>
        </Menu>
      )}

      {!isMobile && (
        <div>
          <NewPostModal isToUpdate={isToUpdate} />
          <Button marginInline="3" colorScheme="red" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </ContainerHeader>
  );
}
