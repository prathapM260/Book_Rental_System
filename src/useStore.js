// src/useStore.js

// import create from 'zustand';

// const useStore = create(set => ({
//   user: null,
//   setUser: (user) => set({ user }),
// }));

// export default useStore;


// src/useStore.js
import create from 'zustand';

const useStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  },
  clearUser: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },
}));

export default useStore;
