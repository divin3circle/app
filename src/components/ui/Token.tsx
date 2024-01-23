import React from 'react';
import { MdGeneratingTokens } from 'react-icons/md';

function Token() {
  return (
    <div>
      <h1 className=" text-center text-3xl px-2 font-extrabold text-gray-900 sm:text-5xl">
        The Token Poweing Imapct
      </h1>{' '}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Warembo - WRB
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Warembo is Inua DAO's native token, unlocking a world of
                    collective impact and governance. Hold Warembo to invest in
                    impactful projects, vote on key decisions, and shape the
                    future of the DAO
                  </p>
                </header>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  <div className="flex justify-between gap-2 items-center">
                    <MdGeneratingTokens />
                    <p>Get Warembo</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block">
                    <img
                      src="https://images.ctfassets.net/q5ulk4bp65r7/5Dhk0rBQjluyfM7qXWuXC4/d3be5bb4b28724813348f9d8f2de8d56/Learn_Illustration_What_is_a_Token.jpg"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Token Price
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">0.00077 ICP</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/024/092/997/original/internet-computer-icp-glass-crypto-coin-3d-illustration-free-png.png"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        ICP Live Price
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$10.45</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Token;
