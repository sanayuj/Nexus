import React, { useEffect, useState } from "react";
import "./AppManagement.css";
import { toast } from "react-toastify";
import {
  approveApp,
  blockApp,
  totalApplications,
} from "../../../Services/adminApi";

export default function AppManagement() {
  const [appDetails, setAppDetails] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = () => {
    totalApplications().then((value) => {
      setAppDetails(value.data.Data);
    });
  };

  const testApplication = (apkFile) => {
    const fileUrl = `http://localhost:4000/img/${apkFile}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const approveApplication = (appId) => {
    approveApp(appId).then((value) => {
      if (value?.data?.status) {
        toast.success(value?.data?.message);
        fetchApplications(); // Re-fetch applications to update the state
      } else {
        toast.error("Unable to approve");
      }
    });
  };

  const applicationBlock = (appId) => {
    blockApp(appId).then((value) => {
      if (value?.data?.status) {
        toast.success(value?.data?.message);
        fetchApplications(); // Re-fetch applications to update the state
      } else {
        toast.error("Unable to block application");
      }
    });
  };

  return (
    <div>
      <div className="div2" id="div2">
        <section>
          <div className="container">
            <div className="row">
              <h2>App Management</h2>
              {appDetails.map((value, index) => (
                <div id="ambox" key={index}>
                  <input
                    type="text"
                    id="amt1"
                    value={value?.appName}
                    readOnly
                  />
                  <input
                    type="text"
                    id="amt2"
                    value={value?.devName}
                    readOnly
                  />
                  <input
                    type="text"
                    id="amt3"
                    value={value?.userId?.email}
                    readOnly
                  />
                  <button
                    id="amb1"
                    onClick={() => {
                      testApplication(value?.apkFile);
                    }}
                  >
                    <i className="bi bi-file-earmark-break" id="ami1"></i>Test
                  </button>
                  {value.verified ? (
                    <span className="bi bi-clipboard-check approved" id="amb2">
                      Approved
                    </span>
                  ) : (
                    <button
                      id="amb23"
                      onClick={() => {
                        approveApplication(value?._id);
                      }}
                    >
                      <i className="bi bi-clipboard-check" id="ami1"></i>Approve
                    </button>
                  )}

                  <button
                    id="amb3"
                    onClick={() => applicationBlock(value?._id)}
                  >
                    <i className="bi bi-ban" id="ami1"></i>Block
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
