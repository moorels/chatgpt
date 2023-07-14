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
          distance: 80,
          color: '#fff',
          width: 1, // maximum distance for linking the particles
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 8,
          },
        },

        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 0.5,
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
            area: 120,
          },
          value: 15,
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
