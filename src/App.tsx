import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "./components/Layout";
import { Spin } from "antd";

const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <Layout>
                <Suspense
                  fallback={
                    <div className="custom-spin">
                      <Spin />
                    </div>
                  }
                >
                  <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="profile" element={<Profile />} />
                  </Routes>
                </Suspense>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
