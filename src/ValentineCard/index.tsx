import React from 'react'
import { YesButton, NoButton } from '../Button';
import cupid from '../assets/cupid.gif'
import TypeWriter from '../TypeWriter';
import { useNavigate } from 'react-router-dom';
const ValentineCard: React.FC = () => {

    const [noCounter, setNoCounter] = React.useState(0)
    const [yesClicked, setYesClicked] = React.useState(false)

    const naviagte = useNavigate()

    const handleYesClick = (value: boolean) => {
        setYesClicked(value)
        naviagte('/she-said-yes')
    }

    return (

        yesClicked ? <div></div> :
            <div className="flex flex-col items-center md:mt-[18rem] mt-[12rem]">
                <div className="">
                    <img src={cupid} alt="valentine" className="rounded-lg h-[14rem]" />
                </div>
                <TypeWriter speed={20} text={"Will you be my valentine?"} />
                <div className="flex gap-4 self-center justify-center mt-10">
                    <YesButton noCounter={noCounter} setNoCounter={setNoCounter} handleYesClick={handleYesClick} />
                    <NoButton noCounter={noCounter} setNoCounter={setNoCounter} />
                </div>
            </div>
    )
}

export default ValentineCard