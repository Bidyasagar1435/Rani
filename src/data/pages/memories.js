import img1 from '../../assets/IMG-1.jpg'
import img2 from '../../assets/IMG-2.jpg'
import img3 from '../../assets/IMG-3.jpg'
import img4 from '../../assets/IMG-4.jpg'
import img5 from '../../assets/IMG-5.jpg'
import img6 from '../../assets/IMG-6.jpg'
import img7 from '../../assets/IMG-7.jpg'
import img8 from '../../assets/IMG-8.jpg'
import img9 from '../../assets/IMG-9.jpg'

const memoriesPage = {
  eyebrow: 'A FEW FAVOURITE THINGS',
  headingFirst: 'Little moments,',
  headingSecond: 'big',
  headingEmphasis: 'heart.',
  intro:
    'A tiny collection of the kind of joy you bring into every room — and every memory.',
  introFooter: 'THE GOOD OLD DAYS & THE ONES AHEAD',
  galleryFooter: 'THE BEST IS STILL TO COME',
  memories: [img1, img2, img3, img4, img5, img6, img7, img8, img9].map((image, index) => ({
    image,
    alt: `Birthday memory ${index + 1}`,
    caption: `A little moment ${String(index + 1).padStart(2, '0')}`,
    className: index === 0 ? 'memory-featured' : '',
  })),
}

export default memoriesPage
