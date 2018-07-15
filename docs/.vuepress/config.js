module.exports = {
	dest: 'BBLink',
	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'BBLink',
			description: 'Bilibili Connection Established!'
		}
	},
	serviceWorker: true,
	themeConfig: {
		repo: 'Moe-Net/BilibiliLink',
		editLinks: true,
		docsDir: 'docs',
		markdown: {
			lineNumbers: true
		},
		sidebar: [
			{
				title: '简介',
				children: [
					'/Start/',
					'/Start/Design.md'
				]
			},
			{
				title: '全站爬虫',
				children: [
					'/Crawler/',
					'/Crawler/Video.md'

				]
			}
		]
	}
};