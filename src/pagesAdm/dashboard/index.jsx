import { IoIosPaper } from 'react-icons/io';
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Brand, Container, Content, Menu } from './styles';
import { RiDashboardFill } from "react-icons/ri";
import { FaHeadphones, FaPaw } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Dashboard(){
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    
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
    };

    fetchData();
  }, []);

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
        label: 'Users Registered per Month',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: Object.values(userCountsByMonth)
      }
    ]
  };
    return(
        <Container>
      <Brand>
      <img src={AdopetImg} alt="Logo do site" />
      </Brand>
        
    

      <Menu>
        <li><RiDashboardFill /></li>
        
        <li><IoIosPaper /></li>
       <li><FaPaw /></li>
       <li> <HiUsers/></li>
        <li><FaHeadphones /></li>
        
      </Menu>

      <Content>
      
      <h2>Users Registered per Month</h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            x: {
              type: 'category',
              labels: Object.keys(userCountsByMonth),
              title: {
                display: true,
                text: 'Month'
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Users'
              }
            }
          }
        }}
      />
        
      </Content>
    </Container>
    )
}