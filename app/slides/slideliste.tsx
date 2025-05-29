import ImageSlider from './slidesItems';

const images = [
    { src: '/slides/Capacitamos.jpeg', alt: 'Imagem 1', title: 'Capacitando Comunidades' },
    { src: '/slides/comunidade.jpeg', alt: 'Imagem 2', title: 'Fortalecendo Comunidades' },
    { src: '/slides/VSLA.jpeg', alt: 'Imagem 3', title: 'Apoiando VSLA' },
  ];
  

const SlideListe = () => {
  return (
    <div className="p-0 mt-[-126px] sm:mt-[-80px]">
      <ImageSlider images={images} />
    </div>
  );
};

export default SlideListe;
