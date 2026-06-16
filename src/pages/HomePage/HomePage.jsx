import GallerySection from '../../components/Gallery/GallerySection'
import Hero from '../../components/Hero/Hero'
import ProcessSection from '../../components/Process/ProcessSection'
import { galleryItems } from '../../data/galleryItems'

const homepageGalleryItems = galleryItems.slice(0, 5)

function HomePage() {
  return (
    <main className="paper-canvas" aria-label="Artist landing page">
      <Hero />
      <GallerySection
        ctaHref="/hall-of-fame"
        ctaLabel="View all drawings"
        includeOrderCard
        items={homepageGalleryItems}
        title="A tiny wall of legends."
      />
      <ProcessSection />
    </main>
  )
}

export default HomePage
