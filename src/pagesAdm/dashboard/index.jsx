import { IoIosPaper } from 'react-icons/io';
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Brand, Charts, Container, Content, Menu } from './styles';
import { RiDashboardFill } from "react-icons/ri";
import { FaHeadphones, FaPaw } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../services/firebaseConfig';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { getCurrentUser } from '../../services/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { StyleClass } from 'primereact/styleclass';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export function Dashboard() {
  const [userData, setUserData] = useState([]);
  const [petsData, setPetsData] = useState([]);
  const [userName, setUserName] = useState('');
  const [partners, setPartners] = useState([])





  useEffect(() => {


    const fetchData = async () => {
      const user = await getCurrentUser();
      setUserName(user?.name.split(' ')[0]);

      const petsRef = collection(firestore, "formsPets")

      try {
        const snapshot = await getDocs(petsRef);
        const petsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPetsData(petsData);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }

      const usersRef = collection(firestore, 'users');

      try {
        const snapshot = await getDocs(usersRef);
        const userData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }


      const partnersRef = collection(firestore, "partner")

      try {
        const snpPtr = await getDocs(partnersRef)
        const PtrData = snpPtr.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setPartners(PtrData)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    };

    fetchData();
  }, []);

  const chartStyle = {
    width: '300px',
    height: '300px'
  };

  const getPetsByMonth = () => {
    const petsCountsByMonth = {};

    petsData.forEach(pet => {
      // Check if pet object has 'created_at' and it's a valid Firestore Timestamp
      if (pet.created_at && pet.created_at.toDate instanceof Function) {
        const createdAt = pet.created_at.toDate();
        const monthYear = `${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;

        if (petsCountsByMonth[monthYear]) {
          petsCountsByMonth[monthYear]++;
        } else {
          petsCountsByMonth[monthYear] = 1;
        }
      } else {
        console.warn(`Invalid 'created_at' timestamp for pet: ${pet.id}`);
      }
    });

    return petsCountsByMonth;
  };

  const petsCountsByMonth = getPetsByMonth();
  const sortedMonths = Object.keys(petsCountsByMonth).sort((a, b) => {
    const [aMonth, aYear] = a.split('/').map(Number);
    const [bMonth, bYear] = b.split('/').map(Number);
    return new Date(aYear, aMonth - 1) - new Date(bYear, bMonth - 1);
  });

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;

  const currentMonthKey = `${currentMonth}/${currentYear}`;
  const previousMonthKey = `${previousMonth}/${previousYear}`;

  const chartDataPets = {
    labels: [previousMonthKey, currentMonthKey],
    datasets: [
      {
        label: 'Pets Cadastrados',
        backgroundColor: '#E4AC46',
        borderColor: '#E4AC46',

        data: [petsCountsByMonth[previousMonthKey] || 0, petsCountsByMonth[currentMonthKey] || 0],
      }
    ]
  };


  // Process user data to get counts by month
  const getUsersByMonth = () => {
    const userCountsByMonth = {};

    userData.forEach(user => {
      // Check if user object has 'created_at' and it's a valid Firestore Timestamp
      if (user.created_at && user.created_at.toDate instanceof Function) {
        const createdAt = user.created_at.toDate();
        const monthYear = `${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;

        if (userCountsByMonth[monthYear]) {
          userCountsByMonth[monthYear]++;
        } else {
          userCountsByMonth[monthYear] = 1;
        }
      } else {
        console.warn(`Invalid 'created_at' timestamp for user: ${user.id}`);
        // Handle or log the error (e.g., skip this user, set a default date, etc.)
      }
    });

    return userCountsByMonth;
  };

  const userCountsByMonth = getUsersByMonth();

  // Prepare data for chart
  const chartData = {
    labels: Object.keys(userCountsByMonth),
    datasets: [
      {
        label: 'Usuários Cadastrados por mês',
        backgroundColor: '#E4AC46',
        borderColor: '#4B5563',
        borderWidth: 1,
        data: Object.values(userCountsByMonth)
      }
    ]
  };
  return (
    <Container>
      <Brand>
        <img src={AdopetImg} alt="Logo do site" />
      </Brand>



      <Menu>
        <li><RiDashboardFill /></li>

        <li><IoIosPaper /></li>
        <li><FaPaw /></li>
        <li> <HiUsers /></li>
        <li><FaHeadphones /></li>

      </Menu>

      <Content>

        <h1>Olá <span>{userName}
        </span></h1>

        <h3>Usuários Cadastrados por mês</h3>
        <Charts>
          <Bar
            style={chartStyle}
            data={chartData}
            options={{
              scales: {
                x: {
                  type: 'category',
                  labels: Object.keys(userCountsByMonth),
                  title: {
                    display: true,
                    text: 'Mês'
                  }
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Número de usuários'
                  }
                }
              }
            }}
          />

          <Line
            style={chartStyle}
            data={chartDataPets}
            options={{
              scales: {
                x: {
                  type: 'category',
                  title: {
                    display: true,
                    text: 'Mês'
                  }
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Número de pets em relação ao mês anterior'
                  }
                }
              }
            }}
          />
        </Charts>
        <div className="datatable-responsive">
          <DataTable value={partners} className="p-datatable p-datatable-basic" paginator rows={5} rowsPerPageOptions={[5, 10, 20]}>
            <Column field="id" header="Id" />
            <Column field="companyName" header="Nome da Empresa"  sortable/>
            <Column field="businessSegment" header="Segmento" />
            <Column field="contact" header="Contato" />
          </DataTable>
        </div>

      </Content>
    </Container>
  )
}