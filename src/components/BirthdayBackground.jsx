function BirthdayBackground() {
  return (
    <>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="star-field" aria-hidden="true">
        {Array.from({ length: 22 }, (_, index) => (
          <span
            key={index}
            className={`star-dot star-dot-${index % 6}`}
            style={{
              top: `${(index * 37 + 9) % 86 + 5}%`,
              left: `${(index * 53 + 7) % 94 + 3}%`,
              animationDelay: `${(index % 7) * 0.4}s`,
            }}
          >
            {index % 4 === 0 ? '✦' : '·'}
          </span>
        ))}
      </div>
    </>
  )
}

export default BirthdayBackground
