import Link from 'next/link';
import ClientSideComponent from './client-side-component/page';
import ServerSideComponent from './server-side-component/page';

const Home = () => {
  return (
      <div>
        <h1 className="flex justify-center m-10 text-4xl font-bold text-gray-700">Welcome to NextJS</h1>
      <div className="m-10 ">
        <ClientSideComponent />
      </div>
      <Link legacyBehavior href="/client-side-component">
        <a className="m-8 p-2 text-blue-600 hover:text-blue-800 border-b-2 border-blue-600 hover:border-blue-800">
          Go to Client-Side Component
        </a>
      </Link>
      <div className="m-10">
        <ServerSideComponent />
      </div>
      <Link legacyBehavior href="/server-side-component">
        <a className="m-8 p-2 text-green-600 hover:text-green-800 border-b-2 border-green-600 hover:border-green-800">
          Go to Server-Side Component
        </a>
      </Link>

      </div>
  );
};

export default Home;
