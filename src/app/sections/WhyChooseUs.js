import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row  w-full  text-primary py-10 p-4 lg:p-0">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 relative featureSide">
        <Image
          loading="lazy"
          src="/images/why-choose-us.webp"
          alt="Mechanic Working"
          width={600}
          height={400}
          className="w-full h-full max-h-[500px] rounded-2xl lg:rounded-none"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 p-4 lg:p-10 py-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-2 text-primary">
          <div className="w-10 h-0.5 bg-primary"></div>
          Why Choose Us
        </h2>
        <div className="space-y-10">
          <div className="flex items-start gap-4">
            <Image
              src="/images/icons/Trusted.svg"
              alt="Icon"
              width={50}
              height={50}
              className="bg-primary p-2 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">
                Locally Owned & Operated in Calgary
              </h3>
              <p className="text-gray-400">
                We understand the unique needs of our Calgary community and
                proudly serve with a local touch.
              </p>
            </div>
          </div>
          <div className="ml-10 flex items-start gap-4">
            <Image
              src="/images/icons/Trusted.svg"
              alt="Icon"
              width={50}
              height={50}
              className="bg-primary p-2 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">
                Trusted Healthcare & Staffing Experts
              </h3>
              <p className="text-gray-400">
                Our certified team delivers professional, compassionate care and
                reliable staffing for healthcare and support roles.
              </p>
            </div>
          </div>
          <div className="ml-20 flex items-start gap-4">
            <Image
              src="/images/icons/Fast Service.svg"
              alt="Icon"
              width={50}
              height={50}
              className="bg-primary p-2 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">
                Fast, Flexible, and Dependable Service
              </h3>
              <p className="text-gray-400">
                We respond quickly to your needs with flexible scheduling and
                consistent, high-quality support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
