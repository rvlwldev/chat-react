import { create } from "zustand";
import Request from "services/Request";

export default create((set, get, _state) => ({
	publicChannels: [],
	addPublicChannel: (channel) => {
		if (channel instanceof Array)
			set((state) => ({
				publicChannels: [...state.publicChannels, ...channel],
			}));
		else
			set((state) => ({
				publicChannels: [...state.publicChannels, channel],
			}));
	},

	privateChannels: [],
	addPrivateChannel: (channel) => {
		if (channel instanceof Array)
			set((state) => ({
				privateChannels: [...state.privateChannels, ...channel],
			}));
		else
			set((state) => ({
				privateChannels: [...state.privateChannels, channel],
			}));
	},

	activeChannel: {},
	setActiveChannel: () => {},

	fetchChannels: async () => {
		return await Request.get("users/channels").then((res) => res.channels);
	},
}));
