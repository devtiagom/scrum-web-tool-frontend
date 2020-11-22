import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Welcome to Scrum Web Tool!</h1>

    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default HomePage;