import React from 'react'
import { YesButton, NoButton } from '../Button';
import cupid from '../assets/cupid.gif'
const ValentineCard: React.FC = () => {

    const [noCounter, setNoCounter] = React.useState(0)

    return (
        <div className="box">
            <div className="flex">
                <img src={cupid} alt="valentine" className="rounded-lg h-[14rem]" />
            </div>
            <h1>Will you be my valentine?</h1>
            <div className="flex gap-4 self-center justify-center mt-10">
                <YesButton noCounter={noCounter} setNoCounter={setNoCounter} />
                <NoButton noCounter={noCounter} setNoCounter={setNoCounter} />
            </div>
        </div>
    )
}

export default ValentineCard