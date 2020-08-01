import React from 'react';
import Particles from 'react-particles-js';

const ParticlesImpl = () => (
    <Particles
        params={{
            move: {
                enable: true
            },
            particles: {
                number: {
                    value: 50
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            }
        }}
        width={'90%'}
        height={'90%'}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            pointerEvents: 'none'
        }}
    />
)

export { ParticlesImpl as Particles }
