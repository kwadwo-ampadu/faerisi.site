export function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <a
        className="big-shoulders-text-normal"
        href="https://faerisi.com"
        style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
      >
        media &
        <br />
        pr company
      </a>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%,-50%,0)",
        }}
      >
        <h1
          className="show-xl libre-baskerville-regular"
          style={{
            margin: 0,
            padding: 0,
            fontSize: "20em",
            fontWeight: 500,
            letterSpacing: "-0.05em",
          }}
        >
          Faerisi
        </h1>
        <h1
          className="show-md big-shoulders-text-normal"
          style={{
            margin: 0,
            padding: 0,
            fontSize: "17em",
            fontWeight: 500,
            lineHeight: "15rem",
            letterSpacing: "-0.025em",
          }}
        >
          fae-risi
        </h1>
      </div>
      <div
        className="big-shoulders-text-normal"
        style={{ position: "absolute", top: 40, left: 40, fontSize: "17px" }}
      >
        BE VISIBLE —
      </div>
      <div
        className="big-shoulders-text-normal"
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "17px",
        }}
      >
        coming.soon
      </div>
    </div>
  );
}
