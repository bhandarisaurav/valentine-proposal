import React, { useEffect } from 'react'
import AnimatedImageGallery from './AnimatedGallery'
import cat_kissing from './assets/cat_kissing.gif'
import confetti from 'canvas-confetti'
const SheSaidYes: React.FC = () => {


  const [displayGif, setDisplayGif] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setDisplayGif(false)
    }, 5000)

    // heart shape from https://thenounproject.com/icon/heart-1545381/
    const heart = confetti.shapeFromPath({
      path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
      // @ts-expect-error Matrix type is not defined in the confetti library
      matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333]
    });

    const defaults = {
      scalar: 4,
      spread: 5000,
      particleCount: 50,
      origin: { y: -0.1 },
      startVelocity: -35
    };

    confetti({
      ...defaults,
      shapes: [heart],
      colors: ['#f00', '#f93963', '#a10864', '#ee0b93']
    });


    const end = Date.now() + (8 * 1000);

    const colors = ['#bb0000', '#f93963'];

    (function frame() {
      confetti({
        particleCount: 2,
        scalar: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        shapes: [heart],
      });
      confetti({
        particleCount: 2,
        scalar: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        shapes: [heart],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

  }, [])

  return (
    displayGif ?
      <div className=" relative flex justify-center place-items-center h-[100vh]">
        <img src={cat_kissing} alt="cat-kissing" className="rounded-lg h-[30rem]" />
      </div> :
      <AnimatedImageGallery />
  )
}

export default SheSaidYes