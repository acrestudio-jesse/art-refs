import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/1point/step1.webp","images/1point/step2.webp","images/1point/step3.webp","images/1point/step4.webp","images/1point/step5.webp","images/1point/step6.webp","images/1point/step7.webp","images/1point/step7.webp~","images/1point/step8-2.webp","images/1point/step8.webp","images/1point/step8.webp~","images/2point/step1.webp","images/2point/step2.webp","images/2point/step3.webp","images/2point/step3.webp~","images/2point/step4.webp","images/2point/step5.webp","images/2point/step6-1.webp","images/2point/step6-2.webp","images/2point/step6-3.webp","images/2point/step7-1.webp","images/2point/step7-2.webp","images/2point/step7.webp","images/2point/step7.webp~","images/2point/step8-1.webp","images/2point/step8-1.webp~","images/2point/step8-2.webp","images/2point/step8-2.webp~","images/2point/step8-3.webp","images/2point/step9-1.webp","images/2point/step9-2.webp","images/2point/step9-3.webp","images/2point/step9-4.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-9d0cca7e.js","imports":["_app/immutable/start-9d0cca7e.js","_app/immutable/chunks/index-0ec07c47.js","_app/immutable/chunks/singletons-724209a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/subjects",
				pattern: /^\/subjects\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/subjects/composition",
				pattern: /^\/subjects\/composition\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/subjects/perspective",
				pattern: /^\/subjects\/perspective\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
