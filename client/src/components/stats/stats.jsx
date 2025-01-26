import React from 'react';
import "./stats.css";

const Stats = () => {
return (
    <div
    style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        background: '#242424',
    }}
    >
      {/* Menu bar */}
    <div
    style={{
        width: '100%',
        height: '5vh',
        position: 'absolute',
        top: 0,
        display: 'flex',
        alignItems: 'center',
    }}
    ><div
        style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        }}
    ><div
        style={{
            position: 'absolute',
            top: '5px',
            left: '5px',
            width: '100%',
            height: '100%',
            background: '#202020',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
        }}
        ></div>
        <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'white',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
        }}
        ></div>
    </div>
    <div
        style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '1rem',
        }}
    >
        <div
        style={{
            position: 'absolute',
            top: '5px',
            left: '5px',
            width: '30px',
            height: '30px',
            background: '#202020',
            borderRadius: '4px',
        }}
        ></div>
    </div>
    </div>

      {/* Current Statistics */}
    <div
        style={{
            position: 'absolute',
            top: '6vh',
            left: '.5vw',
            width: '30vw',
            height: '20vh',
        }}
    ><div
        style={{
            position: 'absolute',
            top: '5px',
            left: '5px',
            width: '100%',
            height: '100%',
            background: '#202020',
            borderRadius: '8px',
        }}
        ></div>
        <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'white',
            borderRadius: '8px',
            padding: '1rem',
        }}
        ><h3 style={{ color: '#242424', marginBottom: '2rem', marginTop: '0rem', fontSize: 24 }}>Current Statistics</h3>
        {['#FF0000', '#2D8CF0', '#FFBF00'].map((color, index) => (
                <div
                key={index}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                }}
                ><div
                    style={{
                    width: '2rem',
                    height: '2rem',
                    background: color,
                    borderRadius: '50%',
                    marginRight: '1rem',
                    }}
                ></div>
                <div
                    style={{
                    flexGrow: 1,
                    height: '1rem',
                    background: '#D3D3D3',
                    borderRadius: '8px',
                    }}
                ><div
                    style={{
                        width: `${(index + 1) * 30}%`,
                        height: '100%',
                        background: color,
                        borderRadius: '8px',
                    }}
                ></div>
            </div>
            </div>
        ))}
        </div>
    </div>

      {/* Welcome box */}
    <div
        style={{
        position: 'absolute',
        top: '6vh',
        right: '3.5vw',
        width: '30vw',
        height: '25vh',
        }}
    ><div
        style={{
            position: 'absolute',
            top: '5px',
            left: '5px',
            width: '100%',
            height: '100%',
            background: '#202020',
            borderRadius: '8px',
        }}
        ></div>
        <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'white',
            borderRadius: '8px',
            padding: '1rem',
        }}
        >
        <h3 style={{ color: '#D3D3D3', textAlign: 'right', marginBottom: '0rem', marginTop: '0rem', fontSize: 24 }}>Welcome!</h3>
        <textarea
            placeholder="Message [AI bot]"
            style={{
            width: '95%',
            height: '70%',
            borderRadius: '8px',
            border: 'none',
            marginTop: '1rem',
            marginRight: '1rem',
            padding: '0.5rem',
            }}
        ></textarea>
        <button
            style={{
            position: 'absolute',
            bottom: '1.5rem',
            right: '1.5rem',
            width: '3rem',
            height: '3rem',
            background: '#202020',
            borderRadius: '50%',
            border: 'none',
            }}
        >
            ↑
        </button>
        </div>
    </div>

      {/* Title and subtitle */}
    <div
        style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        }}
    >
        <h1 style={{ color: 'white', fontSize: '4vw' }}>[INSERT TITLE HERE]</h1>
        <h2 style={{ color: 'white', fontSize: '2vw' }}>[Insert Subtitle Here]</h2>
    </div>

      {/* Player and Inventory */}
    <div
        style={{
        position: 'absolute',
        bottom: '2vh',
        left: '2vw',
        width: '20vw',
        height: '50vh',
        }}
    >
        <div
        style={{
            position: 'absolute',
            top: '0px',
            left: '5px',
            width: '100%',
            height: '100%',
            background: '#202020',
            borderRadius: '8px',
        }}
        ></div>
        <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'white',
            borderRadius: '8px',
        }}
        ></div>
    </div>

      {/* Quests */}
    <div
        style={{
            position: 'absolute',
            bottom: '2vh',
            right: '3vw',
            width: '24vw',
            height: '15vh',
        }}
    >
        <div
        style={{
            position: 'absolute',
            top: -30,
            left: -20,
            width: '100%',
            height: '100%',
            background: '#202020',
            borderRadius: '8px',
        }}
        ></div>
        <div
        style={{
            position: 'absolute',
            top: -30,
            left: -20,
            width: '100%',
            height: '100%',
            background: 'white',
            borderRadius: '8px',
            padding: '1rem',
        }}
        >
        <h1 style={{ color: '#D3D3D3', textAlign: 'center', marginBottom: '0rem' }}>Oracle</h1>
        <h3 style={{ color: 'black', textAlign: 'center', marginBottom: '0rem' }}>Quests</h3>
        </div>
    </div>
    </div>
    );
};

export default Stats;
