import Banner from '../img/react.png';

const section = () => {
  return (
    <div>
      <section>
        <img className='w-full object-cover bg-center' src={Banner} alt="Banner" />
      </section>
      <section className="flex justify-center items-center min-h-screen flex-col bg-purple-500">
        <h2 className="text-center text-white capitalize text-2xl font-bold mb-5">
          About
        </h2>
        <p className="text-center text-white leading-8">
          React is a JavaScript library for building user interfaces that was
          first released by Facebook in 2013. It was created by Jordan Walke, a
          software engineer at Facebook, who wanted to improve the performance
          of the company's advertising system. The story of React begins in
          2011, when Facebook was struggling with the performance of its web
          applications. The company was facing issues with its advertising
          system, which was taking too long to render and causing delays in the
          user experience. Walke proposed a solution that would allow Facebook
          to build complex user interfaces that could update rapidly without
          slowing down the application. Walke's solution was to create a new
          JavaScript library that would handle the rendering of user interfaces
          on the client side. This approach was different from traditional web
          development, which relied on server-side rendering to create HTML
          pages. Instead, React used a virtual DOM (Document Object Model) to
          keep track of changes to the user interface and update only the parts
          that needed to be changed. This allowed for much faster rendering and
          a smoother user experience. React was first released as an open-source
          project in 2013 and quickly gained popularity among developers. Its
          modular architecture and emphasis on reusable components made it easy
          to build complex user interfaces, and its performance benefits were a
          significant selling point. React quickly became the go-to library for
          building modern web applications, and it has since been adopted by
          companies like Netflix, Airbnb, and Dropbox. Over the years, React has
          continued to evolve and improve. The introduction of React Native in
          2015 allowed developers to use the same codebase to build mobile
          applications for iOS and Android, and the adoption of hooks in 2018
          made it even easier to create reusable components. Today, React
          remains one of the most popular and influential libraries in the
          JavaScript ecosystem, and it shows no signs of slowing down.
        </p>
      </section>
      <section>
        <h2 className="text-center text-white capitalize text-2xl font-bold mt-5">
          Requisitos
        </h2>
        <div className="flex justify-around items-center min-h-screen gap-4">
          <div className="bg-orange-400 p-6 w-80 rounded">
            <h3 className="text-center text-white uppercase mb-3">html5</h3>
            <img
              className="flex m-auto"
              src="https://via.placeholder.com/120"
              alt="Card html"
            />
            <p className="text-center mb-4 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, dolores!
            </p>
            <button className="py-1 px-5 bg-white rounded-full text-black flex m-auto mt-4">
              <a
                href="https://www.w3schools.com/html/default.asp"
                target="_blank"
              >
                Learning Html5
              </a>
            </button>
          </div>
          <div className="bg-orange-400 p-6 w-80 rounded">
            <h3 className="text-center text-white uppercase mb-3">Css3</h3>
            <img
              className="flex m-auto"
              src="https://via.placeholder.com/120"
              alt="Card html"
            />
            <p className="text-center mb-4 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, dolores!
            </p>
            <button className="py-1 px-5 bg-white rounded-full text-black flex m-auto mt-4">
              <a
                href="https://www.w3schools.com/css/default.asp"
                target="_blank"
              >
                Learning Css3
              </a>
            </button>
          </div>
          <div className="bg-orange-400 p-6 w-80 rounded">
            <h3 className="text-center text-white uppercase mb-3">
              javascript
            </h3>
            <img
              className="flex m-auto"
              src="https://via.placeholder.com/120"
              alt="Card html"
            />
            <p className="text-center mb-4 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, dolores!
            </p>
            <button className="py-1 px-5 bg-white rounded-full text-black flex m-auto mt-4">
              <a
                href="https://www.w3schools.com/js/default.asp"
                target="_blank"
              >
                Learning JavaScript
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default section;
