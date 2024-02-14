import React, { useContext } from 'react';
import './Learning.css';
import { learningTeams } from '../data';
import { iconsImgs, teamImgs } from '../assets/images';
import { DataContext } from '../context/DataContext';
import { backend } from '../declarations/backend';
import { Team } from '../context/StepperContext';
import t1 from '../assets/team1.jpeg';
import t2 from '../assets/team2.webp';
import t3 from '../assets/team3.jpeg';
import Loading from '../components/ui/Loading';
import LearningModal from './LearningModal';

function Learning() {
  const { userData } = useContext(DataContext);
  const userKeyFromStorage = localStorage.getItem('userKey');
  const [teams, setTeams] = React.useState<Team[]>([]);
  const [slectedTeam, setSelectedTeam] = React.useState<Team | null>(null);
  const [toggleModal, setToggleModal] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  // const getUserTeams = async () => {
  //   const userKey = userData.id;
  //   if (userKey === undefined) return;
  //   const user = await backend.getUser(userKey);
  //   if (user.length !== 0) {
  //     setTeams(user[0].teams);
  //   }
  // };
  // getUserTeams();
  const getTeams = async () => {
    const fetchedTeams = await backend.getTeams();
    if (fetchedTeams.length !== 0) {
      setTeams(fetchedTeams);
    }
  };
  getTeams();
  //team click
  const handleTeamClick = async (team: Team) => {
    setLoading(true);
    setSelectedTeam(team);
    const isTeamMember = team.members.find(
      (member) => member.id === userKeyFromStorage,
    );
    console.log(isTeamMember);
    if (isTeamMember === undefined && userKeyFromStorage !== null) {
      const userAdded = await backend.addUserToTeam(
        userKeyFromStorage,
        team.id,
      );
      // console.log(team.id, userKeyFromStorage, userAdded);
    }
    setLoading(false);
    handleModal();
  };

  //handle modal
  const handleModal = () => {
    setToggleModal(!toggleModal);
  };

  if (loading) return <Loading />;
  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Your Teams</h3>

        <button className="grid-c-title-icon hover:cursor-not-allowed">
          <img src={iconsImgs.plus} alt="teams" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-gray-500 p-2 font-semibold">
          Click a team to join or view educatioal material
        </p>
      </div>
      <div className="">
        <div className=" grid grid-cols-1">
          {teams.length === 0 ? (
            <p className="text">No available teams</p>
          ) : (
            teams.map((learningTeam) => (
              <div
                className="grid-item hover:bg-primary-light rounded-md p-2 cursor-pointer hover:bg-primary-dark ease-in-out transition-all duration-300 hover:scale-95"
                key={learningTeam.id}
                onClick={() => handleTeamClick(learningTeam)}
              >
                <div className="grid-item-l">
                  <div className="avatar img-fit-cover">
                    <img src={t1} />
                  </div>
                  <p className="text">
                    {Number(learningTeam.id) % 2 === 0 ? '⭐️' : null}
                    {learningTeam.name}{' '}
                    <span>{learningTeam.description.substring(0, 30)}...</span>
                  </p>
                </div>
                <div className="grid-item-r">
                  <span className="text-gray-400">
                    {learningTeam.members.length} members
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {toggleModal ? (
        <LearningModal team={slectedTeam} handleModal={handleModal} />
      ) : null}
    </div>
  );
}

export default Learning;
