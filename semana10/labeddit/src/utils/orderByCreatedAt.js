const orderByCreatedAt = (anArray) =>
  anArray.sort((itemA, itemB) => itemB.createdAt - itemA.createdAt);

export default orderByCreatedAt;
