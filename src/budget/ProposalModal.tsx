import React from 'react';
import { Proposal } from '../context/StepperContext';
import { backend } from '../declarations/backend';

interface ProposalsModalProps {
  selectedProposal: Proposal | null; // The proposal to display in the modal
  handleModal: () => void; // Callback function to close the modal
}

const ProposalModal: React.FC<ProposalsModalProps> = ({
  selectedProposal,
  handleModal,
}) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const userKeyFromStorage = localStorage.getItem('userKey');

  const handleVoteFor = async () => {
    setLoading(true);
    if (selectedProposal !== null && userKeyFromStorage !== null) {
      const vote = await backend.voteOnProposal(
        userKeyFromStorage,
        selectedProposal?.id,
        BigInt(1),
      );
    }
    setLoading(false);
  };
  const handleVoteAgainst = async () => {
    setLoading(true);
    if (selectedProposal !== null && userKeyFromStorage !== null) {
      const vote = await backend.voteOnProposal(
        userKeyFromStorage,
        selectedProposal?.id,
        BigInt(0),
      );
    }
    setLoading(false);
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
      style={{ backdropFilter: 'blur(5px)' }}
      onClick={handleModal} // Close the modal when the background is clicked
    >
      <div
        className={`bg-white p-6 rounded-lg text-black ${
          loading ? 'animate-pulse opacity-45 bg-black' : ''
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent the modal box from closing when it's clicked
      >
        {selectedProposal === null ? (
          <p className="text-red-500 font-bold">
            An error occurred🤕. Reopen the modal
          </p>
        ) : (
          <div>
            <div className="flex items-center justify-center">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProposal.title}
              </h2>
            </div>
            <div>
              <p className="text-lg p-2">{selectedProposal.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="flex items-center justify-center font-semibold text-xl">
                Vote
              </h1>
              {selectedProposal.isApproved &&
              selectedProposal.status !== 'completed' ? (
                <div className="flex justify-between p-2 mt-2">
                  <button
                    onClick={handleVoteFor}
                    className="bg-green-500 rounded-md font-bold text-white text-xl px-6 py-2"
                  >
                    VOTE FOR✅
                  </button>
                  <button
                    onClick={handleVoteAgainst}
                    className="bg-red-500 rounded-md font-bold text-white text-xl px-6 py-2"
                  >
                    VOTE AGAINST❌
                  </button>
                </div>
              ) : (
                <p className="text-red-500 font-bold text-center mt-8">
                  This proposal has not been approved for voting yet or voting
                  has ended.
                </p>
              )}
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
          <strong>Votes:</strong> {Number(selectedProposal?.votes)}
        </p>
      </div>
    </div>
  );
};

export default ProposalModal;
