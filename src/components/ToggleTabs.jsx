const ToggleTabs = ({ active, setActive }) => {
  return (
    <div className='flex justify-center gap-4 mb-6'>
      {['CS', 'G'].map(tab => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 font-semibold rounded-full transition-all duration-300 ${
            active === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          {tab === 'CS' ? 'Customer Service' : 'Groups'}
        </button>
      ))}
    </div>
  );
};

export default ToggleTabs;
