import { useCallback, useMemo } from 'react'

import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim' // loads tsparticles-slim

//import { loadFull } from "tsparticles"; // loads tsparticles

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/articles.defaultProps = {

const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      fpsLimit: 120,
      autoPlay: true, // enables the particles animation, it's enabled by default
      background: {
        color: '#334155', // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },

      particles: {
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 120,
          color: [
            '#f3b1ff',
            '#4e342e',
            '#2196f3',
            '#b91d47',
            '#f06292',
            '#9b3e71',
            '#c0ca33',
            '#7f8cc2',
            '#8bc34a',
            '#ff9800',
            '#f44336',
            '#1976d2',
            '#ff7043',
            '#e47e5f',
            '#b9f6ca',
            '#ff5252',
            '#1e88e5',
            '#32a8d9',
            '#e91e63',
            '#cddc39',
            '#ffca28',
            '#568074',
            '#8e24aa',
            '#f7a040',
            '#27ae60',
            '#87469b',
            '#ff5722',
            '#009688',
            '#ff5252',
            '#ff5722',
            '#689f38',
            '#9e9d24',
            '#5c6bc0',
            '#78c9a7',
            '#ff9800',
            '#f06292',
            '#ec407a',
            '#4caf50',
            '#ff9800',
            '#b91d47',
            '#c0ca33',
            '#ff7043',
            '#8bc34a',
            '#7e57c2',
            '#ff5722',
            '#9b3e71',
            '#1e88e5',
            '#b14c88',
            '#d84315',
            '#32a8d9',
            '#f44336',
            '#ff00ff',
            '#00ffff',
            '#ff00cc',
            '#cc00ff',
            '#00ffcc',
            '#ffcc00',
            '#00ff00',
            '#ccff00',
            '#ff6600',
            '#6600ff',
            '#00ccff',
            '#ff0099',
            '#99ff00',
            '#00ff99',
            '#cc00cc',
            '#ccff66',
            '#ffcc99',
            '#00cc00',
            '#ff9900',
            '#9900ff',
            '#00ff33',
            '#ff3300',
            '#33ff00',
            '#0033ff',
            '#ff3333',
            '#33ff33',
            '#ccff33',
            '#ff3366',
            '#66ff00',
            '#0066ff',
            '#ff6633',
            '#33ccff',
            '#ff99cc',
            '#cc66ff',
            '#ccffcc',
            '#ffcc33',
            '#66ccff',
            '#ff66cc',
            '#ccff99',
            '#99ff33',
            '#ffcc66',
            '#66ff66',
            '#cc99ff',
            '#66ffff',
            '#ffff00',
            '#ffccff',
            '#ffff33',
            '#ff99ff',
            '#33ffff',
            '#ffff66',
          ],

          width: 1, // maximum distance for linking the particles
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 6,
          },
        },

        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: [0.5],
          straight: true,
        },
        opacity: {
          value: { value: 0.5 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 0, max: 1 },
          // let's randomize the particles size a bit
        },

        number: {
          density: {
            enable: true,
            area: 200,
          },
          value: 10,
        },
      },
    }
  }, [])

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine)
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, [])

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />
}

export default ParticlesComponent
