module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		extend: {
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
			}
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
		}
	},
	plugins: [],
};
