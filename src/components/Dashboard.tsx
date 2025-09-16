import React from 'react';
import { DollarSign, ShoppingCart, Users, Activity, ChevronUp, ChevronDown } from 'lucide-react';
import head from '../assets/head.jpeg';
import xbox from '../assets/xbox.jpg';
import applewatch from '../assets/applewatch.jpeg';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  trendDirection: 'up' | 'down';
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, trendDirection, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        {icon}
      </div>
    </div>
    <div className="mt-4 flex items-center">
      {trendDirection === 'up' ? (
        <ChevronUp size={16} className="text-green-500" />
      ) : (
        <ChevronDown size={16} className="text-red-500" />
      )}
      <p className={`ml-1 text-sm font-medium ${trendDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>
        {trend}
      </p>
      <p className="ml-2 text-sm text-gray-500">vs. last month</p>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const recentOrders = [
    { id: '#1234', customer: 'John Doe', date: '2025-09-15', total: '$150.00', status: 'Shipped', statusColor: 'bg-green-100 text-green-700' },
    { id: '#1235', customer: 'Jane Smith', date: '2025-09-15', total: '$89.50', status: 'Processing', statusColor: 'bg-yellow-100 text-yellow-700' },
    { id: '#1236', customer: 'Mike Johnson', date: '2025-09-14', total: '$250.00', status: 'Delivered', statusColor: 'bg-blue-100 text-blue-700' },
    { id: '#1237', customer: 'Emily Brown', date: '2025-09-14', total: '$45.00', status: 'Cancelled', statusColor: 'bg-red-100 text-red-700' },
    { id: '#1238', customer: 'Chris Lee', date: '2025-09-13', total: '$300.75', status: 'Delivered', statusColor: 'bg-blue-100 text-blue-700' },
  ];

  const topProducts = [
    { name: 'JBL On-Ear Headphones', image: head, sales: 120 },
    { name: 'Microsoft Xbox Controller', image: xbox, sales: 98 },
    { name: 'Apple Watch Series 5', image: applewatch, sales: 85 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Sales"
            value="$45,231.89"
            icon={<DollarSign className="text-green-600" />}
            trend="12.5%"
            trendDirection="up"
            color="bg-green-100"
          />
          <StatCard
            title="Total Orders"
            value="2,350"
            icon={<ShoppingCart className="text-blue-600" />}
            trend="8.2%"
            trendDirection="up"
            color="bg-blue-100"
          />
          <StatCard
            title="Total Customers"
            value="1,890"
            icon={<Users className="text-purple-600" />}
            trend="2.1%"
            trendDirection="down"
            color="bg-purple-100"
          />
          <StatCard
            title="Conversion Rate"
            value="2.45%"
            icon={<Activity className="text-yellow-600" />}
            trend="0.5%"
            trendDirection="up"
            color="bg-yellow-100"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Overview</h2>
              <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Sales chart will be displayed here.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Order ID</th>
                      <th scope="col" className="px-6 py-3">Customer</th>
                      <th scope="col" className="px-6 py-3">Date</th>
                      <th scope="col" className="px-6 py-3">Total</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                        <td className="px-6 py-4">{order.customer}</td>
                        <td className="px-6 py-4">{order.date}</td>
                        <td className="px-6 py-4">{order.total}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Selling Products</h2>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales} sales</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;