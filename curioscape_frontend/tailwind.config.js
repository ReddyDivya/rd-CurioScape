/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: //customizing the theme of the CSS framework or library
  {
    extend: //extending or overriding existing theme configurations
    {
      margin://custom margin size
      {
        320:'320px',
      },
      width://several custom width sizes with specific pixel values
      {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: //several custom height sizes with specific pixel values
      {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',//90% of the viewport heigh
      },
      flex://custom flex value of 0.7 1 0%, which can be used in CSS flexbox layouts.
      {
        0.7: '0.7 1 0%',
      },
      maxHeight://custom maxHeight value
      {
        370:'370px',
      },
      minWidth://several custom minWidth values with specific pixel values
      {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      textColor: //custom text color values
      {
        lightGray: '#F1EFEE',
        primary: '#FAFAFA',
        secColor: '#efefef',
        navColor: '#BEBEBE',
      },
      backgroundColor: //custom background color values
      {
        mainColor: '#FBF8F9',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
      },
      keyframes: //custom keyframes for CSS animations
      {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },//slide-in

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },//slide-fwd
      },//keyframes
      animation: //custom animation values that reference the defined keyframes
      {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-fwd': ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      transitionProperty: //custom transition property for transitioning the height of an element.
      {
        height: 'height',
      },
    },//extend

    cursor: //custom cursor values for different mouse cursor styles.
    {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },//theme
  variants: //customizing the variants of the CSS framework or library
  {
    extend: {},
  },
  plugins: [],//include additional plugins or extensions to enhance the functionality of the CSS framework or library
}

/*
Notes:
Step 1: Above are the customized css properties.
Step 2: To use the customized values in your application.
Step 3: Assuming the configuration object is defined in a file called styles.js, you can import it into your application file
        const styles = require('./styles.js');
Step 4: 
*/