const HowItWorks = () => {
    return (
        <section className="bg-Blue py-20 text-white" data-aos="fade-up">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
                <h2 className="text-4xl font-medium text-center mb-8">
                    How It Works
                </h2>

                {/* Instructions for Donation */}
                <div className="text-lg flex flex-col lg:flex-row justify-between gap-10">
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <h3 className="text-3xl text-lightOrange font-medium mb-4">
                            Instructions for Donation
                        </h3>
                        <p className="mb-4">
                            Donating to WinterAid is simple and straightforward.
                            Follow these steps to make a donation:
                        </p>
                        <ol className="list-decimal list-inside mb-4">
                            <li className="mb-2">
                                Gather your winter clothing and supplies that
                                you wish to donate.
                            </li>
                            <li className="mb-2">
                                Ensure that all items are clean and in good
                                condition.
                            </li>
                            <li className="mb-2">
                                Pack the items securely in a bag or box.
                            </li>
                            <li className="mb-2">
                                Label the bag or box with &quot;WinterAid
                                Donation&quot;.
                            </li>
                            <li className="mb-2">
                                Drop off the donation at one of our designated
                                collection points.
                            </li>
                        </ol>
                    </div>

                    {/* Collection Points */}
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <h3 className="text-3xl text-lightOrange font-medium mb-4">
                            Collection Points
                        </h3>
                        <p className="mb-4">
                            We have several collection points across different
                            divisions where you can drop off your donations.
                            Here are the locations:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li className="mb-2">
                                Dhaka: 123 Winter St, Dhaka
                            </li>
                            <li className="mb-2">
                                Chittagong: 456 Cozy Ave, Chittagong
                            </li>
                            <li className="mb-2">
                                Khulna: 789 Warm Blvd, Khulna
                            </li>
                            <li className="mb-2">
                                Rajshahi: 101 Comfort Rd, Rajshahi
                            </li>
                            <li className="mb-2">
                                Barisal: 202 Heat Ln, Barisal
                            </li>
                            <li className="mb-2">
                                Sylhet: 303 Snug St, Sylhet
                            </li>
                            <li className="mb-2">
                                Rangpur: 404 Toasty Dr, Rangpur
                            </li>
                            <li className="mb-2">
                                Mymensingh: 505 Cozy Ct, Mymensingh
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Supported Divisions */}
                <div className="mt-10 lg:mt-0">
                    <h3 className="text-3xl text-lightOrange font-medium mb-4">
                        Supported Divisions
                    </h3>
                    <p className="mb-4">
                        WinterAid operates in the following divisions of
                        Bangladesh:
                    </p>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">Dhaka</li>
                        <li className="mb-2">Chittagong</li>
                        <li className="mb-2">Khulna</li>
                        <li className="mb-2">Rajshahi</li>
                        <li className="mb-2">Barisal</li>
                        <li className="mb-2">Sylhet</li>
                        <li className="mb-2">Rangpur</li>
                        <li className="mb-2">Mymensingh</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
