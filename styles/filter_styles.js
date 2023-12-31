export const filterStyles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    transition: "all 0.3s",
    // position: "sticky",
    // zIndex: "3",
    border: "1px solid #ddd5",
    borderRadius: "0 1rem 0 0",
  },
  icon: {
    fontSize: "1.5rem",
    fontWeight: "900",
    // paddingInline: "0.5rem",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "100%",
    transition: "all 1s",
  },
  insideWrapper: {
    width: "100%",
    transition: "all 0.3s",
    // display: open ? "flex" : "none",
    flexDirection: "column",
    rowGap: "8px",
    paddingInline: "1rem",
  },
  grid: {
    container: {
      width: "100%",
      columnGap: "10px",
      rowGap: "5px",
      alignItems: "start",
    },
  },
  textField: { width: "100%", cursor: "pointer", color: "secondary" },
  buttonWrapper: {
    display: "flex",
    columnGap: "5px",
    justifyContent: "end",
    padding: "0.5rem 3rem",
    // paddingInline: "0.5rem 3rem",
    // paddingBottom: "",
  },
  button: {
    bgcolor: "primary",
  },
};
