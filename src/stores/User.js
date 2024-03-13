import { create } from "zustand";
import Request from "services/Request";

export default create((set, get, _state) => ({
	token: null,
	setToken: (token) => set({ token: token }),

	user: null,
	setUser: (user) => set({ user: user }),

	isAuthenticated: false,
	invalidToken: true,
	setUserAuthentication: (result) =>
		set({ isAuthenticated: result, invalidToken: !result }),

	fetchAuthenticate: async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const params = Object.fromEntries(urlParams.entries());
		const token = params.token;

		const { isAuthenticated, user } = get();
		if (isAuthenticated) return async () => user;

		const result = await Request.post("/users/authenticate", { token });
		if (result?.error) throw result;

		set({ user: result, token: token });
		return { user: result, token: token };
	},

	alarm: false,
	setAlarm: () => set({ alarm: !get().alarm }),
}));
