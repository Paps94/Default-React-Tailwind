module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				"theme-colour": "var(--theme-colour)",
			},
			fontFamily: {
				inter: ['inter', 'serif'],
			},
			keyframes: {
				rotation: {
					'0%': { rotate: '0deg'},
					'100%': { rotate: '360deg'},
				},
				rotationRev: {
					'0%': { rotate: '0deg'},
					'100%': { rotate: '-360deg'},
				},
				bounce: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
					'100%': { transform: 'translateY(0)' }
				},
			},
			animation: {
				'rotate': 'rotation 1.5s linear infinite',
				'point': 'bounce 1s infinite ease-in-out',
			},
			boxShadow: {
				'navbar': '0 3px 5px rgb(0 0 0 / 10%)',
				'main': 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
			}
		},
		screens: {
			'sm': {'max':'640px'},
			'md': {'max':'768px'},
			'lg': {'max':'1024px'},
			'xl': {'max':'1280px'},
		}
	},
	plugins: [],
};
