/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './resources/views/**/*.antlers.html',
    './public/assets/js/**/*.js',
    '../../pending/tailwind/atrium-event-venues/layouts/**/*.html',
  ],
  safelist: [
    'form',
    '-mt-9',
    'md:-mt-9',
  ],
  theme: {
     container: {
          center: true,
          padding: '1rem',
        },
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
          'md': '768px',
          // => @media (min-width: 768px) { ... }
          'lg': '992px',
          // => @media (min-width: 1199px) { ... }
          'xl': '1170px',
          // => @media (min-width: 1440px) { ... }
        },
        colors: {
            'black': '#000000',
            'white': '#ffffff',
            'transparent': 'transparent',

            primary: {
                '100': '#ddede8',
                '200': '#abd1c6',
                '300': '#F8EFE8',
                '400': '#F4E8DC',
                '700': '#FBF6F0',
                '800': '#F0E4D6',
                '900': '#E07A3D',
              },
            gray: {
                '100': '#F5F5F5',
                '200': '#F7F3EC',
                '300': '#D9D9D9',
                '400': '#F6F0E8',
              },
            yellow: {
                '500': '#F8E6D4',
                '600': '#C9A36A',
                '900': '#E8925A',
            },
            red: {
                '500': '#F6E4E8',
                '600': '#E87676',
            },

            dark: {
              '700': '#2C2929',
              '800': '#626262',
              '900': '#0E2A47',
            },
        },
        extend: {
            fontFamily: {
                'red-hat-display': ['Red Hat Display', 'sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
            },
            
            fontSize: {
                '1xl': '20px',
                '2xl': '22px',
                '3xl': '35px',
                '4xl': '45px',
                '5xl': '60px',
                '65': '65px',
                '6xl': '75px',
                'md': '16px',
                '30': '30px',
                '25': '25px',
                '15': '15px',
                '13': '13px',
                '12': '12px',
                '10': '10px',
            },
            lineHeight: {
              'md': '21px',
              'xl': '24px',
              '1xl': '29px',
              '2xl': '26px',
              '3xl': '45px',
              '4xl': '59px',
              '5xl': '85px',
              '6xl': '99px',
            },

            spacing: {
                'full': '100%',
                
            },
            boxShadow: {
                'card': '0px 4px 4px rgba(0, 0, 0, 0.25)',
                'card-1': '0px 4px 10px rgba(14, 42, 71, 0.12)',
                'card-2': '0px 4px 10px rgba(0, 0, 0, 0.07)',
                'card-3': '0px 4px 10px rgba(14, 42, 71, 0.13)',
                'box' : '0px 4px 4px rgba(14, 42, 71, 0.1)',
                'box-1' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
                'box-2' : '0px 3px 8px 0px rgba(224, 122, 61, 0.16)',
                'box-3' : '0px 4px 8px 0px rgba(0, 0, 0, 0.10)',
                'box-4' : '0px 4px 8px 0px rgba(0, 0, 0, 0.04)',
                'btn' : '0px 4px 4px 0px rgba(0, 0, 0, 0.10)',
                'input': '0px 2px 8px 0px rgba(14, 42, 71, 0.12)',
                'form-box': '0px 4px 12px 0px rgba(0, 0, 0, 0.10)',
                'select-box': '0px 1px 4px 0px rgba(0, 0, 0, 0.08)',
            },
            borderRadius: {
              '7xl': '50px',
              '6xl': '40px',
              '5xl': '30px',
              '4xl': '20px',
              '2xl': '15px',
              '1xl': '12px',
              'xl': '10px',
            },
            margin: {
                'auto': 'auto',
            },
            zIndex: {
                '-1': '-1',
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
                '6': '6',
                '7': '7',
                '8': '8',
                '9': '9',
            },
            height: {
                '100vw': '100vw',
            },
            content:{

            },
            transitionDuration: {
             '0': '0ms',
             '3000': '3000ms',
            }
        },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ],
}

