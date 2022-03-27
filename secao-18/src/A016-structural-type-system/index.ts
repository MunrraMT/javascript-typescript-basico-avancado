const structuralTypeSystem = (): void => {
  type User = { username: string; password: string };
  type VerifyUserFN = (user: User, sentValue: User) => boolean;

  const verifyUser: VerifyUserFN = (user, sentValue) =>
    user.username === sentValue.username &&
    user.password === sentValue.password;

  const bdUser = { username: 'João', password: '123456' };
  const sentUser = { username: 'João', password: '123456' };

  console.log(verifyUser(bdUser, sentUser));

  const sentUser2 = { username: 'João', password: '123' };

  console.log(verifyUser(bdUser, sentUser2));
};

structuralTypeSystem();
