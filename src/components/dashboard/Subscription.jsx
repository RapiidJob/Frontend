const plans = [
  {
    name: "BASIC",
    price: "300 ETB /Monthly",
    features: [
      "Post 1 Job",
      "Urgents & Featured Jobs",
      "Highlights Job with Colors",
      "Access & Saved 5 Candidates",
      "10 Days Resume Visibility",
      "24/7 Critical Support",
    ],
    buttonColor: "bg-blue-100",
    textColor: "text-blue-500",
  },
  {
    name: "STANDARD",
    price: "600 ETB /Monthly",
    features: [
      "3 Active Jobs",
      "Urgents & Featured Jobs",
      "Highlights Job with Colors",
      "Access & Saved 10 Candidates",
      "20 Days Resume Visibility",
      "24/7 Critical Support",
    ],
    buttonColor: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    name: "PREMIUM",
    price: "1000 ETB /Monthly",
    features: [
      "6 Active Jobs",
      "Urgents & Featured Jobs",
      "Highlights Job with Colors",
      "Access & Saved 20 Candidates",
      "30 Days Resume Visibility",
      "24/7 Critical Support",
    ],
    buttonColor: "bg-blue-100",
    textColor: "text-blue-500",
  },
];

const Subscription = () => {
  return (
    <div className="container mx-auto p-4 mt-40">
      <h1 className="text-3xl font-bold mb-6">
        Buy Premium Subscription to Post a Job
      </h1>
      <p className=" text-gray-600 mb-12">
        Lorem ipsum raesent eget pulvinar orci. Duis ut pellentesque ligula
        convallis.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3"
          >
            {index === 1 && (
              <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center p-1">
                Recommended
              </div>
            )}
            <div
              className={`p-6 pt-10 ${
                index === 1 ? "border border-blue-500" : ""
              }`}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, voluptatem.
              </p>

              <p className={`text-4xl font-bold ${plan.textColor} mb-4`}>
                {plan.price}
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2 text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.707a1 1 0 00-1.414-1.414L9 10.586 6.707 8.293a1 1 0 00-1.414 1.414l3 3a1 0 001.414 0l7-7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg font-semibold ${plan.buttonColor}`}
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
