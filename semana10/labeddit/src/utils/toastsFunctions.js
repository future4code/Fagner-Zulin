export const loginSucess = (toast, user) => {
  toast({
    title: 'Login feito com sucesso',
    description: `Seja bem-vindo ${user}`,
    status: 'success',
    duration: 6000,
    isClosable: true,
  });
};

export const signUpSucess = (toast, user) => {
  toast({
    title: 'Conta criada com sucesso',
    description: `Seja bem-vindo ${user}`,
    status: 'success',
    duration: 6000,
    isClosable: true,
  });
};

export const alertError = (toast, message) => {
  toast({
    title: 'Algo deu errado!',
    description: message,
    status: 'error',
    duration: 6000,
    isClosable: true,
  });
};

export const genericError = (toast) => {
  toast({
    title: 'Algo deu errado!',
    description: 'Tente novamente mais tarde',
    status: 'error',
    duration: 6000,
    isClosable: true,
  });
};

export const createPostSucess = (toast) => {
  toast({
    title: 'Post criado com sucesso!',
    description: 'Agora todo mundo verá seu post.',
    status: 'success',
    duration: 6000,
    isClosable: true,
  });
};
