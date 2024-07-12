export function applyHeadroom(header) {
	import('headroom.js').then((module) => {
		const Headroom = module.default;
		const headroom = new Headroom(header, {});
		headroom.init();
	});
}
