import { create } from "zustand";
import Request from "services/Request";

export default create((set) => ({
	messageList: [],
	setMessageList: (newMessageList) => {
		set((state) => ({
			messageList: [...newMessageList, ...state.messageList],
		}));
	},
	clearMessageList: () => set(() => ({ messageList: [] })),
	resetMessageList: (messageList) => {
		set((state) => ({ messageList: messageList }));
	},

	fetchMessages: async (channelId, params) => {
		return await Request.get(Request.ROUTES.MESSAGE(channelId).BASE, params)
			.then((res) => res.messages)
			.catch(() => null);
	},
}));
