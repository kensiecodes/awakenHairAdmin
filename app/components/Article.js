export default function Article() {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-white dark:text-charcoal">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src="purplethree.jpg"
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500 object-cover"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-storm">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              The oat milk, spirulia, and avocado formula for coily textures
            </a>
            <p className="text-xs dark:text-gray-400">
              By&nbsp;
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline"
              >
                Amelia Link
              </a>
            </p>
          </div>
          <div className="dark:text-charcoal">
            <p>Get the first look at our coily collection</p>
          </div>
        </div>
      </div>
    </div>
  );
}
