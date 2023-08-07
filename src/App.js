import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import realme from "../src/pages/realme.jpg";
import { Box, Button } from "@mui/material";

const App = () => {
  const [count, setCount] = useState(1);
  const [showButtons, setShowButtons] = useState(true);
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    if (count === 1) {
      setShowButtons(true);
    }
  };
  const costPerItem = 15000;
  const totalCost = parseInt(count) * costPerItem;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Card
        sx={{
          height: "80vh",
          width: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginLeft: "10%",
                marginTop: "2%",
                fontWeight: "bold",
                marginBottom: "5%",
              }}
            >
              Adding items to cart
            </Typography>
            <img
              src={realme}
              width={300}
              sx={{ marginTop: "10%" }}
              alt="logo"
            />
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "60%" }}
              >
                <Typography variant="h6" color="primary">
                  Realme 7 PRO
                </Typography>
                <Typography variant="h6" color="primary">
                  {" "}
                  15000 RS
                </Typography>
              </Box>
              {showButtons ? (
                <Button
                  variant="contained"
                  onClick={() => {
                    setShowButtons(false);
                  }}
                  sx={{ height: "5%", width: "20vh" }}
                >
                  Add to cart
                </Button>
              ) : (
                <Box
                  sx={{
                    display: "inline",
                    alignItems: "center",
                    gap: "5px",
                    width: "20vh",
                  }}
                >
                  <Button variant="text" onClick={handleDecrement}>
                    -
                  </Button>
                  <span style={{ margin: "0 5px" }}>{count}</span>
                  <Button
                    variant="text"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </Button>
                  <Typography sx={{ marginTop: "6px", width: "20vh" }}>
                    Total Cost : {totalCost}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
