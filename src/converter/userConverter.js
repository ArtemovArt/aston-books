export const userConverter = {
  toFirestore: (data) => ({
    favorite: data.favourite,
    history: data.history,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return data;
  },
};
