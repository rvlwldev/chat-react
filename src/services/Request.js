const HOST = process.env.REACT_APP_SERVER;

class RequestByFetch {
	#token;

	ROUTES = {
		/* AUTH */
		SIGN_UP: `${HOST}/users/signup`,
		LOGIN: `${HOST}/users/login`,
		ADMIN_LOGIN: `${HOST}/users/admin/login`,
		AUTHENTICATE: `${HOST}/users/authenticate`,

		/* USER */
		USER: () => ({
			PROFILES: `${HOST}/users/profiles`,
			COMMANDS: {
				INFO: `${HOST}/users/info`,
			},
		}),

		/* SERVICE */
		SERVICE: (ID) =>
			ID
				? {
						BASE: `${HOST}/services/${ID}`,
						USERS: `${HOST}/services/${ID}/users`,
				  }
				: `${HOST}/services`,

		/* CHANNEL */
		CHANNEL: (ID) =>
			ID
				? {
						BASE: `${HOST}/channels/${ID}`,
						USERS: `${HOST}/channels/${ID}/users`,
						READ: `${HOST}/channels/${ID}/read`,
						RENAME: `${HOST}/channels/${ID}/rename`,
						JOIN: `${HOST}/channels/${ID}/join`,
						INVITE: `${HOST}/channels/${ID}/invite`,
						LEAVE: `${HOST}/channels/${ID}`,
				  }
				: {
						BASE: `${HOST}/channels`,
						ALL: `${HOST}/users/channels`,
				  },

		/* MESSAGE */
		MESSAGE: (CHANNEL_ID) => ({
			BASE: `${HOST}/channels/${CHANNEL_ID}/messages`,
			GET: (ID) => `${HOST}/channels/${CHANNEL_ID}/messages/${ID}`,
		}),
	};

	/** @deprecated  */
	parseGetURL(/** @type String  */ rawURL, params = {}) {
		const url = rawURL.startsWith("/")
			? new URL(`${HOST}${rawURL}`)
			: new URL(`${HOST}/${rawURL}`);

		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);

		return url;
	}

	#toURL(rawURL, params = {}) {
		const url = new URL(rawURL);

		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);

		return url;
	}

	setToken = (token) => (this.#token = token);

	get = async (url, params = {}, contentType = "application/json") =>
		await fetch(this.#toURL(url, params), {
			mode: "cors",
			headers: {
				"Content-Type": contentType,
				Authorization: this.#token,
			},
		})
			.then(async (data) => await data.json())
			.catch((err) => err);

	post = async (url, body = {}, contentType = "application/json") =>
		await fetch(this.#toURL(url), {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": contentType,
				Authorization: this.#token,
			},
			body: typeof body == "string" ? body : JSON.stringify(body),
		})
			.then(async (data) => await data.json())
			.catch((err) => err);
}

const RequestSingleton = new RequestByFetch();
export default RequestSingleton;
