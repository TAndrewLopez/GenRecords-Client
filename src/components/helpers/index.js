export const formatToUSD = (num) => {
  const numString = `${num}`;
  const dollars = numString.slice(0, numString.length - 2);
  const cents = numString.slice(numString.length - 2);
  return `${dollars}.${cents}`;
};

export const popularityToStart = (num) => {
  return num / 20;
};

export const sortAlbumNames = (inputArray, dir) => {
  const arr = [...inputArray];

  if (dir) {
    arr.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    return arr;
  }
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
  return arr;
};

export const sortArtistName = (inputArray, dir) => {
  const arr = [...inputArray];

  if (dir) {
    arr.sort((a, b) => {
      if (a.artist.name < b.artist.name) {
        return -1;
      }
      return 0;
    });
    return arr;
  }
  arr.sort((a, b) => {
    if (a.artist.name > b.artist.name) {
      return -1;
    }
    return 0;
  });
  return arr;
};

export const sortPopularityScore = (inputArray, dir) => {
  const arr = [...inputArray];

  if (dir) {
    arr.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });
    return arr;
  }
  arr.sort((a, b) => {
    if (a.popularity > b.popularity) {
      return -1;
    }
    return 0;
  });
  return arr;
};

export const sortPriceAmount = (inputArray, dir) => {
  const arr = [...inputArray];

  if (dir) {
    arr.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
    return arr;
  }
  arr.sort((a, b) => {
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  });
  return arr;
};

// export const getLocalOrder = () => {
//   const order = localStorage.getItem("localOrder");
//   if (order) {
//     return JSON.parse(order);
//   } else {
//     localStorage.setItem(
//       "localOrder",
//       JSON.stringify({
//         order: {
//           id: "GUEST",
//           complete: false,
//           createdAt: new Date().toLocaleString(),
//           lineItems: [],
//         },
//       })
//     );
//     const localOrder = localStorage.getItem("localOrder");
//     return JSON.parse(localOrder);
//   }
// };

// export const addLocalLineItem = (vinyl) => {
//   const order = getLocalOrder();
//   const itemExist = checkLocalOrderForItem(vinyl);

//   if (!itemExist) {
//     order.lineItems.push(vinyl);
//     localStorage.setItem("localOrder", JSON.stringify(order));
//   }
// };

// export const removeLocalLineItem = (vinyl) => {
//   const order = getLocalOrder();
//   console.log(order);
// };

// export const checkLocalOrderForItem = (vinyl) => {
//   const order = getLocalOrder();
//   return order.lineItems.some((item) => item.id === vinyl?.id);
// };
