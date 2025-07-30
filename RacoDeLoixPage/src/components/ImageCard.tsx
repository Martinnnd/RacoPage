interface ImageCardProps {
  imageUrl: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="relative group cursor-pointer w-full h-[800px] overflow-hidden">
      {/* Imagen con overlay oscuro */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-opacity-10 group-hover:bg-opacity-50 transition duration-300"></div>

      {/* Texto centrado con línea animada */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-center">
        {title}
        <span className="block w-0 group-hover:w-full h-[2px] bg-white transition-all duration-500 mx-auto mt-1"></span>
      </div>
    </div>
  );
};

export default ImageCard;
