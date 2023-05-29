const Image = ({ blok }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
        <img
          className="h-auto max-w-full rounded"
          alt={blok.img.alt}
          src={blok.img.filename}
        />
      </div>
    </section>
  );
};
export default Image;