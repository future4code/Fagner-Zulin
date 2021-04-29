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
import {
  gotToFeedPage,
  gotToHomePage,
  gotToLoginPage,
} from '../../routers/coordinate';
import { deleteToken } from '../../utils/localStorageFunctions';
import NewPostModal from '../NewPostModal/NewPostModal';
import Title from '../StyledComponents/Title';
import { ContainerHeader } from './header.styled';

export default function Header({ isToUpdate, disableModal }) {
  const history = useHistory();
  const [isMobile] = useMediaQuery('(max-width: 575.98px)');

  const logout = () => {
    deleteToken();
    gotToLoginPage(history);
  };

  return (
    <ContainerHeader>
      <Title
        style={{ cursor: 'pointer' }}
        onClick={() => gotToFeedPage(history)}
        fs="2em"
      >
        LabEddit
      </Title>

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
            <Button onClick={() => gotToHomePage(history)} colorScheme="cyan">
              Home
            </Button>
            <MenuDivider />

            {!disableModal && <NewPostModal isToUpdate={isToUpdate} />}
            {disableModal && (
              <Button onClick={() => gotToFeedPage(history)} colorScheme="cyan">
                Voltar
              </Button>
            )}
            <MenuDivider />
            <Button colorScheme="red" onClick={logout}>
              Logout
            </Button>
          </MenuList>
        </Menu>
      )}

      {!isMobile && (
        <div>
          <Button
            mr="3"
            onClick={() => gotToHomePage(history)}
            colorScheme="cyan"
          >
            Home
          </Button>
          {!disableModal && <NewPostModal isToUpdate={isToUpdate} />}
          {disableModal && (
            <Button onClick={() => gotToFeedPage(history)} colorScheme="cyan">
              Voltar
            </Button>
          )}
          <Button marginInline="3" colorScheme="red" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </ContainerHeader>
  );
}
