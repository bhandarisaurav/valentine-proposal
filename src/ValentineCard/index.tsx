import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
const ValentineCard: React.FC = () => {

    const noResponses = [
        "No",
        "Heyy",
        "My God, ajhai no?",
        "this is your last chance to say yes",
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
    }

    const [noCounter, setNoCounter] = React.useState(0)
    return (
        <div className="box">
            <h1>Will you be my valentine?</h1>
            <div className="flex gap-4 self-center justify-center">
                <button className="inline-flex items-center h-12 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    <span>Yes</span>
                    <svg className="w-6 h-6 ml-3" viewBox="0 0 24 24" fill="red">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>

                </button>
                <button className="inline-flex items-center h-12 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                    onClick={noClicked}
                >
                    {!!noCounter && <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full mr-2">{noCounter}</span>}
                    {noResponses[noCounter]}
                    <svg className="w-6 h-6 ml-3" viewBox="0 0 72 72" fill="red">
                        <path d="m49.5657 15.6092c-4.3218 0-8.187 2.3611-10.1887 6.1814l-3.377 7.8874 7 6.0169-6 8.4238 5 6.8813-3.5852 9.1622 20.462-26.2371c1.4419-1.9653 2.2134-4.3222 2.2134-6.7934 0-6.3535-5.17-11.5225-11.5245-11.5225z" />
                        <path d="m37.0994 50.9843-5.0534-6.9615 5.9387-8.0457-7.0457-5.9463s1.6215-7.5485 1.455-7.8939c-1.9444-4.0263-5.9185-6.5278-10.3711-6.5278-6.3535 0-11.5225 5.169-11.5225 11.5225 0 2.1167.5776 4.185 1.6714 5.9814l.6602.9737 20.4624 26.2299.3502-.449z" />
                    </svg>
                </button>
            </div>
            <ReactAudioPlayer
                className="hidden"
                id='audioPlayer'
                autoPlay
                src={getCurrentAudioPath(noCounter)}
                controls
            />
        </div>
    )
}

export default ValentineCard