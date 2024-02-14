import React from 'react';
import './Proposals.css';
import { iconsImgs } from '../assets/images';
// import { proposals } from '../data';
import { Proposal as AppProposals } from '../context/StepperContext';
import ProposalModal from './ProposalModal';
import { backend } from '../declarations/backend';
import Loading from '../components/ui/Loading';

function Proposal() {
  const userKeyFromStorage = localStorage.getItem('userKey');
  const [proposal, setProposal] = React.useState<AppProposals[]>([]);
  const [slectedProposal, setSelectedProposal] =
    React.useState<AppProposals | null>(null);
  const [toggleModal, setToggleModal] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getProposals = async () => {
    const fetchedProposals = await backend.getProposals();
    if (fetchedProposals.length !== 0) {
      setProposal(fetchedProposals);
    }
  };
  getProposals();

  const handleModal = () => {
    setToggleModal(!toggleModal);
  };
  const selectProposal = (p: AppProposals) => {
    setLoading(true);
    setSelectedProposal(p);
    setLoading(false);
    handleModal();
  };
  if (loading) return <Loading />;
  return (
    <div>
      <div className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
          <h3 className="grid-c-title-text">Proposals</h3>
          <button className="grid-c-title-icon cursor-not-allowed">
            <img src={iconsImgs.plus} />
          </button>
        </div>
        <div className="grid-c-top text-silver-v1">
          <h2 className="text-lg font-bold">Tokens Needed</h2>
          <span className="lg-value">100, 000 WRB</span>
        </div>
        <div className="grid-c4-content bg-jet">
          <div className="grid-items ">
            {proposal.map((proposal) => (
              <div
                className="grid-item cursor-pointer hover:bg-primary-light rounded-md px-2 py-4 ease-in duration-150 hover:scale-95"
                key={proposal.id}
                onClick={() => selectProposal(proposal)}
              >
                <div className="grid-item-l">
                  <div className="icon">
                    <img src={iconsImgs.check} />
                  </div>
                  <p className="text text-silver-v1">
                    {proposal.title} <span>{proposal.status}</span>
                  </p>
                </div>
                <div className="grid-item-r">
                  <span className="text-silver-v1 text-sm">
                    {Number(proposal.votes)} votes
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      )
      {toggleModal && (
        <ProposalModal
          selectedProposal={slectedProposal}
          handleModal={handleModal}
        />
      )}
    </div>
  );
}

export default Proposal;
