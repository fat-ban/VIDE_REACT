import React, { useEffect } from "react";
import { Switch, Route  } from "react-router-dom";
//scss style
import "./default.scss";
//hoc
import WithAuth from "./hoc/WithAuth";

//Layouts
import HomepageLayout from "./cmponents/layouts/HomepageLayout";
import MainLayout from "./cmponents/layouts/MainLayout";
import { connect } from "react-redux";
//Pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registartion";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";
//import frfom firebase
import { auth, handleUserProfile } from "./firebase/utils";
import { setCurrentUsre } from "./redux/User/user.actions";

const App = (props) => {
  const { setCurrentUsre, currentUser } = props;

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUsre({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUsre(userAuth);
    });

    //componentWillUnmount
    return () => {
      authListener();
    };
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() =>
            
              <MainLayout>
                <Registration />
              </MainLayout>
            
          }
        />
        <Route
          path="/login"
          render={() =>
            
              <MainLayout>
                <Login />
              </MainLayout>
            
          }
        />

        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />

        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUsre: (user) => dispatch(setCurrentUsre(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
