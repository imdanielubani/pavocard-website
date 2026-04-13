export default function PhoneMockup() {
  return (
    <section className="w-full bg-white overflow-hidden" style={{ height: "clamp(300px, 50vw, 715px)" }}>
      <div className="relative h-full max-w-[1240px] mx-auto px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Aboutbg.png"
          alt="Pavocard App Preview"
          style={{
            position: "absolute",
            width: "100%",
            height: "143.52%",
            top: "-33.33%",
            left: 0,
            right: 0,
            objectFit: "contain",
            objectPosition: "center",
            animation: "float 4s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
