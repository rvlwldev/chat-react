import { create } from "zustand";
import Request from "services/Request";

export default create((set) => ({
	activeChannel: {},
	setActiveChannel: (channel) => set({ activeChannel: channel }),
	
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

	setActivePublicChannelByIndex: (index) => {
		console.log(index);
		set((state) => ({ activeChannel: state.publicChannels[index] }));
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

	setActivePrivateChannelByIndex: (index) => {
		console.log(index);
		set((state) => ({ activeChannel: state.privateChannels[index] }));
	},

	fetchChannels: async () =>
		await Request.get(Request.ROUTES.CHANNEL().ALL).then(
			(res) => res.channels
		),
}));
