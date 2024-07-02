

const fetchServerSideData = async () => {
  return {
    message: 'This is rendered on the server side!',
  };
};

const ServerSideComponent = async () => {
  const data = await fetchServerSideData();

  return (
    <div className="p-4 bg-white rounded shadow max-w-lg m-10 ">
      <h1 className="text-2xl font-bold text-black">Server-Side Component</h1>
      <p className="text-black">{data.message}</p>
    </div>
    
  );
};

export default ServerSideComponent;
