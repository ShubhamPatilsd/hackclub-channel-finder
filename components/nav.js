import Flag from "./flag";

const Nav = () => {
  return (
    <>
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: space-between;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      `}</style>
      <nav className="nav">
        <Flag />
        <p>Hi there</p>
      </nav>
    </>
  );
};

export default Nav;
