import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';
import { TabPanel } from 'react-tabs';

const OrderTab = ({ items }) => {
    return (
        <TabPanel>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </TabPanel>
    );
};

export default OrderTab;