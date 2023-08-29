function Avatar({ avatarUrl }) {
  return (
    <img
      src={avatarUrl}
      alt="User Avatar"
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        margin: "0 auto",
        padding: "20px",
        display: "block",
      }}
    />
  );
}

export default Avatar;
