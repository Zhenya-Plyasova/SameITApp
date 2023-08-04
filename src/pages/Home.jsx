import manyUsers from "../img/many-users.jpg";

const Home = () => {
    return (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '100px',
          }}
        >
          <h1>
            Welcome to the APP!
          </h1>
          <img src={manyUsers} with = 'auto' height='450px' alt='net of people'></img>
        </div>
      </>
    );
}

export default Home;