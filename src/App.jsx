import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello React 👋</h1>
      <p style={styles.text}>
        This is your App.jsx file.   go !
        Start editing and build from here. ready get set
      </p>
      <button style={styles.button} onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

function handleClick() {
  alert("Button clicked!");
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#555",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default App;
