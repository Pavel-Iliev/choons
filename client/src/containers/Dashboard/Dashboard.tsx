import { useState, useEffect } from 'react';
import { listUserLists } from '../../apiService';
import { ListInterface } from '../../interfaces';
import ListCard from '../../components/ListCard/ListCard';
import NewListModal from '../../components/NewListModal/NewListModal';
import './Dashboard.scss';

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [lists, setLists] = useState<ListInterface[]>([]);
  const [showNewList, setShowNewList] = useState(false);

  useEffect(() => {
    const fetchLists = async () => {
      const fetchedLists = await listUserLists();
      setLists(fetchedLists);
    };

    fetchLists();
  }, []);

  const showNewListModal = () => {
    setShowNewList(true);
  };

  const handleCloseModal = () => {
    setShowNewList(false);
  };

  const handleListHasBeenAdded = (newList: ListInterface): void => {
    setLists([...lists, newList]);
    setShowNewList(false);
  };

  return (
    <section>
      <h2>Wishlists</h2>
      <ul className='list-cards-wrapper'>
        {lists.map((list) => (
          <ListCard list={list} key={list._id} />
        ))}
        <li className='add-list btn list-card' onClick={showNewListModal}>
          <p>Add list</p>
          <h1>+</h1>
        </li>
      </ul>
      {showNewList && <NewListModal listHasBeenAdded={handleListHasBeenAdded} closeModal={handleCloseModal} />}
    </section>
  );
};

export default Dashboard;
