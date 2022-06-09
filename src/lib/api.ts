const baseUrl = "https://lobste.rs";

async function send({method, path}: {method: string; path: string}) {
	const opts: RequestInit = {method};
	const res = await fetch(`${baseUrl}${path}`, opts);
	const json = await res.json();
	if (res.ok) {
		return json;
	}
	return Promise.reject(json);
}

export function get(path: string) {
	return send({method: "GET", path});
}
