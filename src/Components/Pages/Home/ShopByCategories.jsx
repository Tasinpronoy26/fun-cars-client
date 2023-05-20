import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SportsCar from './SportsCar/SportsCar';
import OffVehicles from './OffVehicles/OffVehicles';
import Vintage from './Vintage/Vintage';

const ShopByCategories = () => {
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState("Sports_Cars"); // Set initial active category

    useEffect(() => {
        fetch(`http://localhost:5000/category/${active}`)
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [active]);

  

    return (
        <div>
            <Tabs className="text-center m-20">
                <TabList>
                    <Tab onClick={() => setActive("Sports_Cars")}>SPORTS CAR</Tab>
                    <Tab onClick={() => setActive("Off-Road_Vehicles")}>Off-Road Vehicles</Tab>
                    <Tab onClick={() => setActive("Vintage_Cars")}>Vintage_Cars</Tab>
                </TabList>


                <TabPanel>
                    <div className='lg:grid grid-cols-3 gap-5 mt-10'>
                        {
                            categories.map(category => category.toys.map(toy => <SportsCar toy={toy} />))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='lg:grid grid-cols-3 gap-5 mt-10'>
                        {
                            categories.map(category => category.toys.map(toy => <OffVehicles toy={toy} />))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='lg:grid grid-cols-3 gap-5 mt-10'>
                        {
                            categories.map(category => category.toys.map(toy => <Vintage  toy={toy} />))
                        }
                    </div>
                </TabPanel>



            </Tabs>
        </div>
    );
};

export default ShopByCategories;
