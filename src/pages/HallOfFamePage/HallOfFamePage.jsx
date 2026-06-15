import GallerySection from '../../components/Gallery/GallerySection'
import { galleryItems } from '../../data/galleryItems'
import './HallOfFamePage.css'

function HallOfFamePage() {
  return (
    <main className="paper-canvas hall-page" aria-label="Hall Of Fame gallery">
      <GallerySection
        eyebrow="Hall Of Fame"
        items={galleryItems}
        title="Every tiny legend."
        variant="page"
      />
    </main>
  )
}

export default HallOfFamePage
