import React, { useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { ButtonProps } from './_types'
import { isMobile } from 'react-device-detect';

const NoButton: React.FC<ButtonProps> = (props) => {

    const { noCounter, setNoCounter } = props

    const [canMove, setCanMove] = React.useState(true)

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (canMove) {
            intervalId = setInterval(() => {
                setCanMove(false);
            }, 2000);
        } else {
            intervalId = setInterval(() => {
                setCanMove(true);
            }, 1000);
        }

        return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component unmounts or when the dependency changes
    }, [canMove]);

    const noResponses = [
        "No",
        "Heyy",
        "My God, ajhai no?",
        "Are you sure?",
        "Really Sure?",
        "Bebe Please?",
        "Just this once?",
        "If you say no, i will be sad",
        "I will be very sad",
        "I will be very very sad",
        "I will be very very very sad",
        "I will be very very very very",
    ]

    const audioPaths = [
        "no.mp3",
        "heyy.mp3",
        "my_god_ajhai_no.mp3"
    ]

    const getCurrentAudioPath = (index: number) => {
        return "audio/" + audioPaths[index]
    }

    const noClicked = () => {
        setNoCounter(noCounter + 1)
        const audio = document.getElementById('audioPlayer') as HTMLAudioElement
        audio.play()

        audio.onplaying = () => {
            onMouseOver()
        }
    }

    const onMouseOver = () => {
        const button = document.querySelectorAll('button')[1]
        if (button && canMove && !isMobile) {
            button.style.position = 'absolute'
            button.style.left = `${Math.random() * 100}rem`
            button.style.top = `${Math.random() * 100}rem`
            if (parseFloat(button.style.left) > 100) {
                button.style.left = '100rem';
            }
            if (parseFloat(button.style.top) > 50) {
                button.style.top = '50rem';
            }
        }
    }

    return (
        <>
            <button
                onMouseOver={onMouseOver}
                className="no-button inline-flex items-center h-14 px-5 text-indigo-100 bg-indigo-700 rounded-lg focus:shadow-outline text-3xl"
                onClick={noClicked}
            >
                {!!noCounter && <span className="text-xs inline-flex items-center justify-center px-2 py-1 font-bold leading-none text-red-100 bg-red-600 rounded-full mr-2">{noCounter}</span>}
                {/* {noResponses[noCounter]} */}

                {/* get no Respoinse from the array based on the noCounter and if the array is off limit then get the last one
                 */}

                {noCounter < noResponses.length ? noResponses[noCounter] : noResponses[noResponses.length - 1]}
                <svg className="w-6 h-8 ml-3 text-3xl" viewBox="0 0 72 72" fill="red">
                    <path d="m49.5657 15.6092c-4.3218 0-8.187 2.3611-10.1887 6.1814l-3.377 7.8874 7 6.0169-6 8.4238 5 6.8813-3.5852 9.1622 20.462-26.2371c1.4419-1.9653 2.2134-4.3222 2.2134-6.7934 0-6.3535-5.17-11.5225-11.5245-11.5225z" />
                    <path d="m37.0994 50.9843-5.0534-6.9615 5.9387-8.0457-7.0457-5.9463s1.6215-7.5485 1.455-7.8939c-1.9444-4.0263-5.9185-6.5278-10.3711-6.5278-6.3535 0-11.5225 5.169-11.5225 11.5225 0 2.1167.5776 4.185 1.6714 5.9814l.6602.9737 20.4624 26.2299.3502-.449z" />
                </svg>
            </button>

            <ReactAudioPlayer
                className="hidden"
                id='audioPlayer'
                autoPlay
                src={getCurrentAudioPath(noCounter)}
            />
        </>
    )
}

export default NoButton