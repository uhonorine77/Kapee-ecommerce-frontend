import React, { useState } from 'react';
import { DollarSign, ShoppingCart, Users, Activity, ChevronUp, ChevronDown, Bell, Search, LogOut, ChevronRight, LayoutDashboard } from 'lucide-react';
import head from '../assets/head.jpeg';
import xbox from '../assets/xbox.jpg';
import applewatch from '../assets/applewatch.jpeg';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import MensClothing from './MensClothing';

// --- Reusable Child Components ---

const StatCard: React.FC<any> = ({ title, value, icon, trend, trendDirection, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${color}`}>{icon}</div>
    </div>
    <div className="mt-4 flex items-center">
      {trendDirection === 'up' ? <ChevronUp size={16} className="text-green-500" /> : <ChevronDown size={16} className="text-red-500" />}
      <p className={`ml-1 text-sm font-medium ${trendDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>{trend}</p>
      <p className="ml-2 text-sm text-gray-500">vs. last month</p>
    </div>
  </div>
);

const DashboardUpperBar: React.FC<{ selectedView: string }> = ({ selectedView }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800 capitalize">{selectedView}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} /><input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
        <button className="p-2 rounded-full hover:bg-gray-100"><Bell size={20} /></button>
        <div className="w-px h-6 bg-gray-300"></div>
        <div className="flex items-center"><img src="https://via.placeholder.com/40" alt="Admin" className="w-10 h-10 rounded-full" /><div className="ml-3"><p className="font-semibold text-sm">Admin User</p><p className="text-xs text-gray-500">admin@google.com</p></div></div>
        <button onClick={handleLogout} className="p-2 rounded-full hover:bg-red-100 text-red-500" title="Logout"><LogOut size={20} /></button>
      </div>
    </div>
  );
};

// --- Main Dashboard View (Stats, Charts, etc.) ---
const MainDashboardView: React.FC = () => {
    const recentOrders = [
        { id: '#1234', customer: 'John Doe', date: '2025-09-15', total: '$150.00', status: 'Shipped', statusColor: 'bg-green-100 text-green-700' },
        { id: '#1235', customer: 'Jane Smith', date: '2025-09-15', total: '$89.50', status: 'Processing', statusColor: 'bg-yellow-100 text-yellow-700' },
        { id: '#1236', customer: 'Mike Johnson', date: '2025-09-14', total: '$250.00', status: 'Delivered', statusColor: 'bg-blue-100 text-blue-700' },
    ];
    const topProducts = [
        { name: 'JBL On-Ear Headphones', image: head, sales: 120 },
        { name: 'Microsoft Xbox Controller', image: xbox, sales: 98 },
        { name: 'Apple Watch Series 5', image: applewatch, sales: 85 },
    ];
    
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Sales" value="$45,231.89" icon={<DollarSign className="text-green-600" />} trend="12.5%" trendDirection="up" color="bg-green-100" />
                <StatCard title="Total Orders" value="2,350" icon={<ShoppingCart className="text-blue-600" />} trend="8.2%" trendDirection="up" color="bg-blue-100" />
                <StatCard title="Total Customers" value="1,890" icon={<Users className="text-purple-600" />} trend="2.1%" trendDirection="down" color="bg-purple-100" />
                <StatCard title="Conversion Rate" value="2.45%" icon={<Activity className="text-yellow-600" />} trend="0.5%" trendDirection="up" color="bg-yellow-100" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-md"><h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Overview</h2><div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center"><p className="text-gray-500">Sales chart will be displayed here.</p></div></div>
                    <div className="bg-white p-6 rounded-lg shadow-md"><h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2><div className="overflow-x-auto"><table className="w-full text-sm text-left text-gray-500"><thead className="text-xs text-gray-700 uppercase bg-gray-50"><tr><th scope="col" className="px-6 py-3">Order ID</th><th scope="col" className="px-6 py-3">Customer</th><th scope="col" className="px-6 py-3">Date</th><th scope="col" className="px-6 py-3">Total</th><th scope="col" className="px-6 py-3">Status</th></tr></thead><tbody>{recentOrders.map((order) => (<tr key={order.id} className="bg-white border-b hover:bg-gray-50"><td className="px-6 py-4 font-medium text-gray-900">{order.id}</td><td className="px-6 py-4">{order.customer}</td><td className="px-6 py-4">{order.date}</td><td className="px-6 py-4">{order.total}</td><td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>{order.status}</span></td></tr>))}</tbody></table></div></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md"><h2 className="text-xl font-semibold text-gray-800 mb-4">Top Selling Products</h2><div className="space-y-4">{topProducts.map((product, index) => (<div key={index} className="flex items-center space-x-4"><img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" /><div className="flex-1"><p className="font-medium text-gray-800">{product.name}</p><p className="text-sm text-gray-500">{product.sales} sales</p></div></div>))}</div></div>
            </div>
        </>
    );
};


// --- The Main Dashboard Component ---

const Dashboard: React.FC = () => {
  // State to manage which view is active (e.g., 'dashboard', 'men's clothing')
  const [activeView, setActiveView] = useState<string>('dashboard');
  // State to manage which sidebar category is expanded
  const [expandedCategory, setExpandedCategory] = useState<string>('');

  const sidebarNavItems = [
    { name: "Men's Clothing", subcategories: ["Shirts", "Pants", "Jackets"] },
    { name: "Women's Clothing", subcategories: ["Dresses", "Tops", "Skirts"] },
    { name: "Accessories", subcategories: ["Belts", "Hats", "Sunglasses"] },
    { name: "Shoes", subcategories: ["Sneakers", "Boots", "Sandals"] },
    { name: "Jewellery", subcategories: ["Necklaces", "Rings", "Bracelets"] },
  ];

  const handleNavClick = (viewName: string) => {
    setActiveView(viewName.toLowerCase()); // Set the active view for rendering content
    setExpandedCategory(prev => prev === viewName ? '' : viewName); // Toggle expansion
  };

  // Function to conditionally render the main content based on the active view
  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <MainDashboardView />;
      case "men's clothing":
        return <MensClothing selectedCategory="Men's Clothing" />;
      // Add cases for other components here
      // case 'women\'s clothing':
      //   return <WomensClothingComponent />;
      default:
        return (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-700">Welcome to {activeView}</h2>
            <p className="mt-2 text-gray-500">This component is under construction.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 text-2xl font-bold text-gray-800 border-b">kapee. Admin</div>
        <nav className="flex-1 p-4 space-y-2">
          {/* Dashboard Home Button */}
          <button
            onClick={() => handleNavClick('dashboard')}
            className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${activeView === 'dashboard' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
          >
            <LayoutDashboard size={20} className="mr-3" />
            <span className="font-medium">Dashboard</span>
          </button>
          
          <div className="pt-2 mt-2 border-t">
            {sidebarNavItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => handleNavClick(item.name)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${activeView === item.name.toLowerCase() ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronRight size={16} className={`transition-transform ${expandedCategory === item.name ? 'rotate-90' : ''}`} />
                </button>
                {expandedCategory === item.name && (
                  <div className="mt-1 ml-6 space-y-1">
                    {item.subcategories?.map((sub) => (
                      <a href="#" key={sub} className="block p-2 text-sm rounded-lg hover:bg-gray-100 text-gray-600">{sub}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <DashboardUpperBar selectedView={activeView} />
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;