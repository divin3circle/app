import React from 'react';
import { Team } from '../context/StepperContext';

interface LearningModalProps {
  team: Team | null; // The team to display in the modal
  handleModal: () => void; // Callback function to close the modal
}

const LearningModal: React.FC<LearningModalProps> = ({ team, handleModal }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
      style={{ backdropFilter: 'blur(5px)' }}
      onClick={handleModal} // Close the modal when the background is clicked
    >
      <div
        className="bg-white p-6 rounded-lg text-black"
        onClick={(e) => e.stopPropagation()} // Prevent the modal box from closing when it's clicked
      >
        {team === null ? (
          <p className="text-red-500 font-bold">
            An error occurred🤕. Reopen the modal
          </p>
        ) : (
          <div>
            <div className="flex items-center justify-center">
              <h2 className="text-2xl font-bold mb-4">
                Welcome to the {team.name} Team
              </h2>
            </div>
            <div>
              <p className="text-lg p-2">{team.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="flex items-center justify-center font-semibold text-xl">
                Learning Content
              </h1>
              <div>
                {team.content.length === 0 ? (
                  <p className="py-10 px-4 text-center">
                    No content uploaded. Try again later.
                  </p>
                ) : (
                  team.content.map((content, index) => (
                    <div
                      key={index}
                      className="flex-col items-center justify-between py-5 px-2 bg-gray-100 rounded-md my-2"
                    >
                      <p className="text-lg font-semibold text-center">
                        {content.title}
                      </p>
                      <div className="flex justify-between mt-2">
                        {' '}
                        <a
                          href={content.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-500"
                        >
                          View
                        </a>
                        <p className="font-bold text-sm">
                          {content.paid ? '⭐️PREMIUM' : '🤩FREE'}
                        </p>
                      </div>
                      <p className="text-gray-500 text-sm text-center">
                        Published: {content.datePublished}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-red-500 rounded-lg hover:bg-red-500/80 text-white py-4 px-16 ease-in duration-150"
            onClick={handleModal}
          >
            close
          </button>
        </div>
        <p className="mt-4 text-center text-gray-300">
          <strong>Members:</strong> {team?.members.length}
        </p>
      </div>
    </div>
  );
};

export default LearningModal;
