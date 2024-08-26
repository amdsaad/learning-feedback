export const useShared = () => {
  let openModal = useState('openModal', () => false);
  let openTeamModal = useState('openTeamModal', () => false);
  const activeMember = useState('activeMember', () => null);


  const setActiveMember = (member) => {
    activeMember.value = member;
  }

  return { openModal, openTeamModal, activeMember, setActiveMember };
}
