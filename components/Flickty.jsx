import Flickity from 'react-flickity-component';

const flickityOptions = {
  initialIndex: 0,  // Start at the first slide (index 0)
  wrapAround: true, // Enables looping
  autoPlay: 7000,   // Optional: Automatically move to the next slide every 3 seconds
  prevNextButtons: true,  // Show previous/next buttons
  pageDots: true,         // Show navigation dots
  pauseAutoPlayOnHover: false, // Optional: Prevent autoPlay from pausing on hover
};

export default function Carousel() {
  return (
    <>
      {/* DESKTOP */}
      <Flickity
        className={'carousel mt-4 w-100 h-100 border-0 max-md:hidden'} // Custom class for styling
        elementType={'div'}     // The type of container element (div)
        options={flickityOptions}  // Flickity options
        disableImagesLoaded={false} // Wait until all images are loaded
        reloadOnUpdate={true}  // Reload carousel on update
        static={true}          // Static carousel (no dragging)
      >
        <img src="https://img.freepik.com/free-psd/festival-lights-celebration-youtube-banner_23-2150854513.jpg?t=st=1729951052~exp=1729954652~hmac=5fcd5d6e7c8797eaa6b11dfa45f77b21a2ae978659b014a18b70b115ee89c883&w=1380" alt="Carousel Slide 1" className='h-[400px] border-0 rounded' />
        <img src="https://img.freepik.com/free-psd/food-vlogger-youtube-banner_23-2148959988.jpg?t=st=1729950949~exp=1729954549~hmac=1d4402ffc3a92b6e65dbff7074b32edbae24b149e4ca575b80047cafdf3806b4&w=1380" alt="Carousel Slide 2" className='h-[400px] rounded border-0' />
        <img src="https://img.freepik.com/free-psd/diwali-celebration-youtube-banner-template_23-2150808295.jpg?t=st=1729951122~exp=1729954722~hmac=58505bef5053bbed89466d3701ab54bce1b4ba346ce5404588fecb42fa6de82b&w=1380" alt="Carousel Slide 3" className='h-[400px] rounded border-0' />
        <img src="https://img.freepik.com/free-psd/bubble-tea-youtube-channel-art-template-design_23-2150135968.jpg?t=st=1729951383~exp=1729954983~hmac=63041d89017e837d079816af9653b6545a206de305ede540919d9f4c5c4dfa11&w=1380" alt="Carousel Slide 3" className='h-[400px] rounded border-0' />
      </Flickity>

      {/* APP render */}
      <Flickity
        className={'carousel mt-4 w-100 h-[240px] border-0 md:hidden'}  // Custom class for styling
        elementType={'div'}     // The type of container element (div)
        options={flickityOptions}  // Flickity options
        disableImagesLoaded={false} // Wait until all images are loaded
        reloadOnUpdate={true}  // Reload carousel on update
        static={true}          // Static carousel (no dragging)
      >
        <img src="https://img.freepik.com/free-psd/festival-lights-celebration-youtube-banner_23-2150854513.jpg?t=st=1729951052~exp=1729954652~hmac=5fcd5d6e7c8797eaa6b11dfa45f77b21a2ae978659b014a18b70b115ee89c883&w=1380" alt="Carousel Slide 1" className='h-[240px] border-0' />
        <img src="https://img.freepik.com/free-psd/food-vlogger-youtube-banner_23-2148959988.jpg?t=st=1729950949~exp=1729954549~hmac=1d4402ffc3a92b6e65dbff7074b32edbae24b149e4ca575b80047cafdf3806b4&w=1380" alt="Carousel Slide 2" className='h-[240px] border-0' />
        <img src="https://img.freepik.com/free-psd/diwali-celebration-youtube-banner-template_23-2150808295.jpg?t=st=1729951122~exp=1729954722~hmac=58505bef5053bbed89466d3701ab54bce1b4ba346ce5404588fecb42fa6de82b&w=1380" alt="Carousel Slide 3" className='h-[240px] border-0' />
        <img src="https://img.freepik.com/free-psd/bubble-tea-youtube-channel-art-template-design_23-2150135968.jpg?t=st=1729951383~exp=1729954983~hmac=63041d89017e837d079816af9653b6545a206de305ede540919d9f4c5c4dfa11&w=1380" alt="Carousel Slide 3" className='h-[240px] border-0' />
      </Flickity>
    </>
  );
}
