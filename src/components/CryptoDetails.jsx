
import { Card, Switch } from "antd";
import React, { useState } from "react";
import ops from '../images/OOPS.png'

const CryptoDetails = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <div
      style={{ minHeight: "90vh", display: "flex", justifyContent: "center" }}
    >
      <Switch checked={!loading} onChange={onChange}/>

      <Card
        style={{
          width: "400px",
          marginTop: "16px",
          height:"60vh"
        }}
        loading={loading}
      >
        <img src={ops} alt="img" style={{width:'100%', height:'100%'}} />
        
      </Card>
    </div>
  );
};

export default CryptoDetails;
