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

export const loginError = (toast, message) => {
  toast({
    title: 'Algo deu errado!',
    description: message,
    status: 'error',
    duration: 6000,
    isClosable: true,
  });
};
