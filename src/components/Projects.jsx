const Projects = () => {
  return (
    <section id="projects" className="flex justify-center">
      <div className="text-white bg-stone-700 bg-opacity-30 p-4 rounded-xl overflow-x-hidden max-w-[1000px]  justify-center inline-flex ">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 p-4">
          <div className="bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[200px] m-2 p-2">
            <a
              href="https://carrito-fundamentos-pedro.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="px-4 flex justify-center text-[40px] text-center">
                <i className="bx bx-cart-alt"></i>{" "}
              </p>
              <p className="px-4 flex justify-center bg-white rounded-xl text-[#495def] font-bold text-center">
                {" "}
                CARRITO DE COMPRAS
              </p>
              <p className="px-4 flex justify-center text-center">
                {" "}
                Proyecto con productos expuestos al usuario y su carrito para
                compras
              </p>
            </a>
          </div>

          <div className="bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[200px] m-2 p-2">
            <a
              href="https://calm-taffy-40d511.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="px-4 flex justify-center text-[40px] text-center">
                <i className="bx bx-cloud-light-rain"></i>{" "}
              </p>
              <p className="px-4 flex justify-center bg-white rounded-xl text-[#495def] font-bold text-center">
                {" "}
                ESTADO DEL TIEMPO
              </p>
              <p className="px-4 flex justify-center text-center">
                Se Muestra información sobre el clima en el lugar donde estás
              </p>
            </a>
          </div>

          <div className="bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[200px] m-2 p-2">
            <a
              href="https://reliable-sfogliatella-535f2d.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="px-4 flex justify-center text-[40px] text-center">
                <i className="bx bxs-user-account"></i>{" "}
              </p>
              <p className="px-4 flex justify-center bg-white rounded-xl text-[#495def] font-bold text-center">
                {" "}
                MANEJANDO UNA API
              </p>
              <p className="px-4 flex justify-center text-center">
                {" "}
                Administrando usuarios a través de un CRUD usando una API
              </p>
            </a>
          </div>

          <div className="bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[200px] m-2 p-2">
            <a
              href="https://famous-blini-a4ca94.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="px-4 flex justify-center text-[40px] text-center">
                <i className="bx bx-book-reader"></i>{" "}
              </p>
              <p className="px-4 bg-white rounded-xl flex justify-center text-[#495def] font-bold text-center">
                {" "}
                LIBRERIA EN NODE.JS
              </p>
              <p className="px-4 flex justify-center text-center">
                {" "}
                Este es mi último proyecto, una libreria publicada en npmjs.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
