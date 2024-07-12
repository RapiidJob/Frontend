const NotFoundScreen = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-4">Page Not Found</p>
      <a href="/" className="text-primary hover:underline">Go back to Home</a>
    </div>
  );
};

export default NotFoundScreen;
